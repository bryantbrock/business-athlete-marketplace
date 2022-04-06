import {json, redirect, useLoaderData, useActionData} from 'remix'
import keys from 'lodash/keys'
import Auth from '~/modules/auth/auth.server'
import Input from '~/modules/auth/Input'
import {db} from '~/utils/db.server'

export const action = async ({request}) => {
  const [form, {id: influencerId}] = await Promise.all([
    request.formData(),
    Auth.influencer.get({request, include: {address: true}}),
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

  await Auth.influencer.update({id: influencerId, data})

  return redirect((new URL(request.url).pathname))
}

export const loader = async ({request}) => {
  const id = await Auth.influencer.requireId({request})
  const influencer = await db.influencer.findUnique({where: {id}, include: {address: true}})

  return json({influencer})
}

export default () => {
  const {influencer} = useLoaderData()
  const data = useActionData()

  return (
    <div>
      <h2>Account Settings</h2>
      <form method='post' className='lg:w-1/2'>
        <input hidden readOnly name='currentPasshash' value={influencer.passhash} />
        <Input data={data} name='name' defaultValue={influencer.name} />
        <Input data={data} name='email' type='email' defaultValue={influencer.email} />
        <Input data={data} name='phone' type='number' defaultValue={influencer.phone} />
        <Input data={data} name='instagram' defaultValue={influencer.instagram} />
        <Input data={data} name='street' defaultValue={influencer.street} />
        <Input data={data} name='city' defaultValue={influencer.city} />
        <Input data={data} name='state' defaultValue={influencer.state} />
        <Input data={data} name='zip' defaultValue={influencer.zip} />
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