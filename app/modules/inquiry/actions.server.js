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
    ...pick(inquiry, ['startDate', 'endDate', 'notes', 'status']),
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
    data: {
      status: INQUIRY.STATUS.countered,
      counterInquiry: {connect: {id: newInquiry.id}}
    },
  })

  return newInquiry
}