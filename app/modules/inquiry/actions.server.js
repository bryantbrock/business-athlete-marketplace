import {generateAgreement} from '~/modules/legal/agreement.server'
import {INQUIRY, PARTNERSHIP} from '~/utils/constants'
import {db} from '~/utils/db.server'
import sum from 'lodash/sum'
import pick from 'lodash/pick'
import map from 'lodash/map'


export const rejectInquiry = ({id}) => {
  return db.inquiry.update({
    where: {id},
    data: {
      status: INQUIRY.STATUS.rejected,
      partnership: {
        update: {
          status: PARTNERSHIP.STATUS.cancelled
        }
      }
    }
  })
}


export const acceptInquiry = async ({id}) => {
  const inquiry = await db.inquiry.findUnique({
    where: {id},
    include: {
      partnership: {
        include: {influencer: {
          include: {address: true}
        }, business: {
          include: {address: true}
        }}
      },
      inquiryLineItems: {
        include: {product: true}
      }
    }
  })

  const agreement = await generateAgreement({
    partnershipId: inquiry.partnership.id,
    params: {
      influencer: inquiry.partnership.influencer,
      business: inquiry.partnership.business,
      endDate: inquiry.endDate?.toLocaleDateString() || 'never',
      termLength: 'forever',
      lineItems: inquiry.inquiryLineItems,
      sumOfProducts: sum(
        map(
          map(
            inquiry.inquiryLineItems, 'product.price'
          ),
          Number
        )
      )
    }
  })

  return db.inquiry.update({
    where: {id},
    data: {
      status: INQUIRY.STATUS.accepted,
      partnership: {
        update: {
          agreement,
          status: PARTNERSHIP.STATUS.active,
        }
      }
    }
  })
}


export const counterInquiry = async ({id}) => {
  const inquiry = await db.inquiry.findUnique({
    where: {id},
    include: {inquiryLineItems: true}
  })

  const newInquiry = await db.inquiry.create({data: {
    ...pick(inquiry, ['startDate', 'endDate', 'notes']),
    to: inquiry.from,
    from: inquiry.to,
    partnership: {connect: {id: inquiry.partnershipId}},
    inquiryLineItems: {
      create: inquiry.inquiryLineItems.map(
        lineItem => ({...pick(lineItem, ['quantity', 'interval']), product: {connect: {id: lineItem.productId}}})
      )
    },
  }})

  await db.inquiry.update({
    where: {id},
    data: {counterInquiry: {connect: {id: newInquiry.id}}},
  })

  return newInquiry
}


const toArrOfObjs = (acc, [k, v]) => {
  const [idx, field] = k.split('-product-')

  if (!acc[idx]) {
    acc[idx] = {}
  }

  acc[idx][field] = v

  return acc
}

const toProduct = products => obj => {
  const {id} = products.find(prod => prod.name === obj.name)

  return {
    interval: obj.interval,
    product: {connect: {id}},
    quantity: Number(obj.quantity)
  }
}


export const updateInquiry = async ({
  partnershipId,
  influencerId,
  lineItemData,
  inquiryId,
  startDate,
  endDate,
  status,
  notes,
}) => {
  const {products} = await db.influencer.findUnique({
    where: {id: influencerId},
    include: {products: true}
  })

  const lineItems = lineItemData
    .reduce(toArrOfObjs, [])
    .map(toProduct(products))

  // For a smooth ui, we don't want to create/delete product line items
  // as the inquiry is being edited; rather, let the client manage them, and
  // when they are done editing, just delete old line items and create all new ones
  await db.inquiryLineItem.deleteMany({where: {inquiry: {is: {id: inquiryId}}}})
  await db.inquiry.update({
    where: {id: inquiryId},
    data: {
      notes,
      status,
      ...(startDate && {startDate: new Date(startDate).toISOString()}),
      ...(endDate && {endDate: new Date(endDate).toISOString()}),
      inquiryLineItems: {
        create: lineItems
      },
    }
  })

  if (status === INQUIRY.STATUS.pending) {
    const [counteredInquiry] = await db.inquiry.findMany({where: {counterInquiryId: inquiryId}})

    await Promise.all([
      counteredInquiry && db.inquiry.update({
        where: {id: counteredInquiry.id},
        data: {status: INQUIRY.STATUS.countered },
      }),
      db.partnership.update({
        where: {id: partnershipId},
        data: {status: PARTNERSHIP.STATUS.pending}
      })
    ])
  }
}