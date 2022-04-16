import {json, redirect, useLoaderData, useActionData} from 'remix'
import keys from 'lodash/keys'
import Auth from '~/modules/auth/auth.server'
import Input from '~/modules/auth/Input'
import {db} from '~/utils/db.server'

export const action = async ({request}) => {
  const [form, {id: businessId}] = await Promise.all([
    request.formData(),
    Auth.business.get({request, include: {address: true}}),
  ])
  const action = form.get('_action')

  if (action === 'delete') {
    await db.business.delete({where: {id: businessId}})
    return redirect('/business/login')
  }

  const street = form.get('street')
  const city = form.get('city')
  const state = form.get('state')
  const zip = form.get('zip')

  const addressData = {
    ...(street && {street: street}),
    ...(city && {city: city}),
    ...(state && {state: state}),
    ...(zip && {zip: zip}),
  }

  const data = {
    name: form.get('name'),
    email: form.get('email'),
    instagram: form.get('instagram'),
    password: form.get('password'),
    confirmPassword: form.get('confirmPassword'),
    currentPassword: form.get('currentPassword'),
    currentPasshash: form.get('currentPasshash'),
    phone: form.get('phone'),
    ...(keys(addressData).length > 0 && {
      address: {
        upsert: {
          create: addressData,
          update: addressData
        }
      }
    })
  }

  const res = await Auth.business.update({id: businessId, data})

  if (res.errors) {
    return res
  }

  return redirect((new URL(request.url).pathname))
}

export const loader = async ({request}) => {
  const id = await Auth.business.requireId({request})
  const business = await db.business.findUnique({where: {id}, include: {address: true}})

  return json({business})
}

export default () => {
  const {business} = useLoaderData()
  const data = useActionData()

  return (
    <div>
      <h2>Account Settings</h2>
      <form method='post' className='lg:w-1/2'>
        <input hidden readOnly name='currentPasshash' value={business.passhash} />
        <Input data={data} name='name' defaultValue={business.name} />
        <Input data={data} name='email' type='email' defaultValue={business.email} />
        <Input data={data} name='phone' type='number' defaultValue={business.phone} />
        <Input data={data} name='instagram' defaultValue={business.instagram} />
        <Input data={data} name='street' defaultValue={business.address?.street} />
        <Input data={data} name='city' defaultValue={business.address?.city} />
        <Input data={data} name='state' defaultValue={business.address?.state} />
        <Input data={data} name='zip' defaultValue={business.address?.zip} />
        <Input data={data} name='currentPassword' type='password' />
        <Input data={data} name='password' type='password' />
        <Input data={data} name='confirmPassword' type='password' />
        <div className='flex gap-2'>
          <button type='submit' name="_action" value="update" className='button'>
            Update
          </button>
          <button hidden type='submit' name="_action" value="delete" className='button'>
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}