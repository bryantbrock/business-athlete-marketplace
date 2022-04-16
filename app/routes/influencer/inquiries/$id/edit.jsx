import {useState} from 'react'
import {redirect, useLoaderData} from 'remix'
import keys from 'lodash/keys'
import filter from 'lodash/filter'
import toPairs from 'lodash/toPairs'
import startCase from 'lodash/startCase'
import first from 'lodash/first'
import {INQUIRY} from '~/utils/constants'
import {useParentLoaderData} from '~/utils/hooks'
import {updateInquiry} from '~/modules/inquiry/actions.server'

export const action = async ({request, params}) => {
  const inquiryId = params.id;
  const form = await request.formData()
  const formData = Object.fromEntries(form)

  const data = {
    inquiryId,
    notes: form.get('notes'),
    endDate: form.get('endDate'),
    startDate: form.get('startDate'),
    lineItemData: filter(toPairs(formData), ([k]) => k.includes('product')),
    influencerId: form.get('influencerId'),
    partnershipId: form.get('partnershipId'),
    status: first(filter(keys(formData), val => keys(INQUIRY.STATUS).includes(val))),
  }

  await updateInquiry(data)

  return redirect(`/business/inquiries/${inquiryId}`)
}

export default () => {
  const {type} = useLoaderData()
  const {inquiry} = useParentLoaderData({key: 'inquiry'})
  const {influencer} = inquiry.partnership
  const [lineItems, setLineItems] = useState(inquiry.inquiryLineItems)

  const newItem = influencer.products.length > 0 && {
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
            {newItem && (
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
            )}
          </tbody>
        </table>
        <textarea name='notes' defaultValue={inquiry.notes} />
        <button name={INQUIRY.STATUS.pending} type='submit'>Submit Inquiry</button>
        <button name={INQUIRY.STATUS.drafted} type='submit'>Save for later</button>
      </form>
    </div>
  )
}