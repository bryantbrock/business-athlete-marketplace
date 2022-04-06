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

  await Auth.business.update({id: businessId, data})

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
        <Input data={data} name='street' defaultValue={business.street} />
        <Input data={data} name='city' defaultValue={business.city} />
        <Input data={data} name='state' defaultValue={business.state} />
        <Input data={data} name='zip' defaultValue={business.zip} />
        <Input data={data} name='currentPassword' type='password' />
        <Input data={data} name='password' type='password' />
        <Input data={data} name='confirmPassword' type='password' />
        <button type='submit' className='button'>
          Submit
        </button>
      </form>
    </div>
  )
}