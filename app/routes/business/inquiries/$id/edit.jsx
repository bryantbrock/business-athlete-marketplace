import {useState} from 'react'
import {redirect, json, useLoaderData} from 'remix'
import partition from 'lodash/partition'
import keys from 'lodash/keys'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import toPairs from 'lodash/toPairs'
import startCase from 'lodash/startCase'
import {db} from '~/utils/db.server'
import {INQUIRY, PARTNERSHIP} from '~/utils/constants'

export const action = async ({request, params}) => {
  const form = await request.formData()
  const [status] = filter(keys(Object.fromEntries(form)), val => keys(INQUIRY.STATUS).includes(val))

  const influencerId = form.get('influencerId')
  const partnershipId = form.get('partnershipId')
  const partnershipStatus = form.get('partnershipStatus')

  const {products: influencerProducts} = await db.influencer.findUnique({
    where: {id: influencerId},
    include: {products: true}
  })

  const [productEntries, otherEntries] = partition(toPairs(Object.fromEntries(form)), ([k]) => k.includes('product'))
  const lineItemEntries = productEntries.reduce((acc, [k, v]) => {
    const [idx, field] = k.split('-product-')

    if (!acc[idx]) {
      acc[idx] = {}
    }

    acc[idx][field] = v

    return acc
  }, [])

  const data = filter(otherEntries, ([k,v]) => Boolean(v)).reduce((acc, [k, v]) => ({...acc, [k]: v}), {})
  const lineItems = lineItemEntries.map(
    obj => {
      const [{id}] = influencerProducts.filter(prod => prod.name === obj.name)

      return {
        ...omit(obj, ['name', 'id']),
        product: {connect: {id}},
        quantity: Number(obj.quantity)
      }
    }
  )

  // Delete previous line items
  await db.inquiryLineItem.deleteMany({where: {inquiry: {is: {id: params.id}}}})

  // Update inquiry and add all new line items
  await db.inquiry.update({
    where: {id: params.id},
    data: {
      ...omit(data, ['influencerId', 'partnershipId', 'partnershipStatus']),
      status,
      ...(data.startDate && {startDate: new Date(data.startDate).toISOString()}),
      ...(data.endDate && {endDate: new Date(data.endDate).toISOString()}),
      inquiryLineItems: {
        create: lineItems
      },
    }
  })

  // Update the partnership status
  if (partnershipStatus === PARTNERSHIP.STATUS.drafted && status === INQUIRY.STATUS.pending) {
    await db.partnership.update({
      where: {id: partnershipId},
      data: {status: PARTNERSHIP.STATUS.pending}
    })
  }

  return redirect(`/business/inquiries/${params.id}`)
}

export const loader = async ({request, params}) => {
  const {searchParams} = new URL(request.url)
  const inquiry = await db.inquiry.findUnique({
    where: {id: params.id},
    include: {
      inquiryLineItems: {
        include: {
          product: true
        }
      },
      partnership: {
        include: {
          influencer: {
            include: {
              products: true
            }
          }
        }
      }
    }
  })

  if (inquiry.status !== INQUIRY.STATUS.drafted) {
    return redirect(`/business/inquiries/${params.id}`)
  }

  return json({inquiry, type: searchParams.get('type')})
}

export default () => {
  const {inquiry, type} = useLoaderData()
  const {influencer} = inquiry.partnership
  const [lineItems, setLineItems] = useState(inquiry.inquiryLineItems)

  const newItem = {
    quantity: 1,
    interval: 'day',
    product: {
      name: influencer.products[0].name,
      price: Number(influencer.products[0].price),
    },
  }

  const startDate = inquiry.startDate ? (new Date(inquiry.startDate)).toISOString().substr(0,10) : ''
  const endDate = inquiry.endDate ? (new Date(inquiry.endDate)).toISOString().substr(0,10) : ''

  return (
    <div>
      <h2>{type ? startCase(type) : 'Edit'} Inquiry</h2>
      <form method='post'>
        <input hidden name='influencerId' defaultValue={influencer.id} />
        <input hidden name='partnershipId' defaultValue={inquiry.partnership.id} />
        <input hidden name='partnershipStatus' defaultValue={inquiry.partnership.status} />
        <div className='flex flex-col m-2 md:w-1/2'>
          <label html-for='startDate' className='mb-1'>Start Date</label>
          <input name='startDate' type='date' defaultValue={startDate} />
        </div>
        <div className='flex flex-col m-2 md:w-1/2'>
          <label html-for='endDate' className='mb-1'>End Date</label>
          <input name='endDate' type='date' defaultValue={endDate} />
        </div>
        <table className='m-2'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price Per</th>
              <th>Quantity</th>
              <th>Every</th>
            </tr>
          </thead>
          <tbody>
            {lineItems.map((item, idx) => (
              <tr key={idx}>
                <td>
                  <select
                    name={`${idx}-product-name`}
                    value={item.product.name}
                    onChange={e => {
                      const newName = e.target.value
                      const item = {...lineItems[idx], product: {
                        name: newName,
                        price: influencer.products.find(prod => prod.name === newName).price
                      }}

                      setLineItems(items => items.filter((v, i) => i !== idx).concat(item))
                    }}>
                    {influencer.products.map((product, index) => (
                      <option key={index} value={product.name}>
                        {startCase(product.name)}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input
                    type='number'
                    step='0.01'
                    name={`${idx}-product-price`}
                    value={lineItems[idx].product.price}
                    disabled
                    readOnly />
                </td>
                <td>
                  <input type='number' name={`${idx}-product-quantity`} defaultValue={item.quantity} />
                </td>
                <td>
                  <select name={`${idx}-product-interval`} defaultValue={item.interval}>
                    <option value='day'>Day</option>
                    <option value='2-day'>2 Days</option>
                    <option value='week'>Week</option>
                    <option value='2-weeks'>2 Weeks</option>
                    <option value='month'>Month</option>
                    <option value='2-months'>2 Months</option>
                    <option value='year'>Year</option>
                  </select>
                </td>
                <td>
                  <button onClick={e => {
                    e.preventDefault()
                    setLineItems(items => items.filter((v, i) => i !== idx))
                  }}>
                    Remove Product
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <button onClick={e => {
                  e.preventDefault()
                  setLineItems(items => items.concat(newItem))
                }}>
                  Add Product
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <textarea name='notes' defaultValue={inquiry.notes} />
        <button name={INQUIRY.STATUS.pending} type='submit'>Submit Inquiry</button>
        <button name={INQUIRY.STATUS.drafted} type='submit'>Save for later</button>
      </form>
    </div>
  )
}