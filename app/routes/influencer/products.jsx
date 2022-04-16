import {json, redirect, useLoaderData} from 'remix'
import Icon from '~/partials/Icon'
import {db} from '~/utils/db.server'
import Auth from '~/modules/auth/auth.server'
import {PRODUCT} from '~/utils/constants'
import values from 'lodash/values'
import startCase from 'lodash/startCase'

const addProduct = async ({form, request}) => {
  const productName = form.get('name')
  const price = Number(form.get('price')).toFixed(2)
  const influencerId = await Auth.influencer.requireId({request})
  const name = productName.toLowerCase().replace(/ /g, '-')

  await db.product.create({data: {
    name, price,
    influencer: {connect: {id: influencerId}}
  }})
}

const deleteProduct = async ({form}) => {
  const id = form.get('id')
  console.log(id)

  await db.product.delete({where: {id}})
}

export const action = async ({request}) => {
  const {pathname} = new URL(request.url)
  const form = await request.formData()
  const _action = form.get('_action')

  if (_action === 'addProduct') {
    await addProduct({form, request})
  }

  if (_action === 'deleteProduct') {
    await deleteProduct({form})
  }

  return redirect(pathname)
}

export const loader = async ({request}) => {
  const id = await Auth.influencer.requireId({request})
  const products = await db.product.findMany({
    where: {
      influencer: {
        is: {id}
      }
    }
  })

  return json({products})
}

export default () => {
  const {products} = useLoaderData()

  return (
    <div>
      <h1>Products</h1>
      <hr />
      <form method='post' className='flex flex-col rounded-xl border p-4 my-2'>
        <input hidden readOnly name='_action' value='addProduct' />
        <label htmlFor='name' className='mb-2 font-bold text-lg'>Add a new product</label>
        <select name='name'>
          {values(PRODUCT.NAME).map((name, idx) => (
            <option key={idx}>{startCase(name)}</option>
          ))}
        </select>
        <input type='number' step='0.01' name='price' defaultValue={0} placeholder='Price' />
        <button
          className='py-1 px-2 my-2 rounded bg-gray-100 hover:bg-gray-200 w-44'
          data-css-override='true'
          type='submit'>
          Add
        </button>
      </form>
      {products.map(({id, name, price}) => (
        <div key={id} className='p-2 shadow rounded-lg flex justify-between' data-cy="product-parent">
          <div className='flex flex-col ml-2'>
            <span><strong>Name:</strong> {startCase(name)}</span>
            <span><strong>Price:</strong> ${price}</span>
          </div>
          <form method='post' className='flex justify-center items-center'>
            <input hidden name='_action' value='deleteProduct' readOnly />
            <input hidden name='id' value={id} readOnly />
            <button data-css-override={true} className='flex justify-center items-center hover:bg-gray-100 rounded-full p-2'>
              <Icon name='trash' />
            </button>
          </form>
        </div>
      ))}
    </div>
  )
}