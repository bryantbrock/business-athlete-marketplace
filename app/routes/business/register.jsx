import {useSearchParams, json, useActionData} from 'remix'
import Auth from '~/modules/auth/auth.server'
import Input from '~/modules/auth/Input'

export const action = async ({request}) => {
  const form = await request.formData()
  const redirectTo = form.get('redirectTo') || '/business'

  const data = {
    name: form.get('name'),
    email: form.get('email'),
    password: form.get('password'),
    phone: form.get('phone'),
    instagram: form.get('instagram'),
    address: {
      create: {
        street: form.get('street'),
        city: form.get('city'),
        state: form.get('state'),
        zip: form.get('zip'),
      }
    }
  }

  const result = await Auth.business.register({data})

  if (result.errors) {
    return json(result)
  }

  return await Auth.business.createSession({id: result.id, redirectTo})
}

export default () => {
  const [searchParams] = useSearchParams()
  const data = useActionData()

  return (
    <div>
      <div className='my-2'>
        <h1>Business Register</h1>
        <form method='post' className='lg:w-1/2'>
          <input hidden readOnly name='redirectTo' value ={searchParams.get('redirectTo') ?? undefined} />
          <Input name='name' data={data} />
          <Input name='email' type='email' data={data} />
          <Input name='password' type='password' data={data} />
          <Input name='instagram' data={data} />
          <Input name='phone' type='number' data={data} />
          <Input name='street' data={data} />
          <Input name='city' data={data} />
          <Input name='state' data={data} />
          <Input name='zip' data={data} />
          <button type='submit' className='button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}