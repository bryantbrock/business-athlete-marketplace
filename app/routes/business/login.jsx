import {useSearchParams, json, useActionData} from 'remix'
import Auth from '~/modules/auth/auth.server'
import Input from '~/modules/auth/Input'

export const action = async ({request}) => {
  const form = await request.formData()

  const email = form.get('email')
  const password = form.get('password')
  const redirectTo = form.get('redirectTo') || '/business'

  const result = await Auth.business.login({email, password})

  if (result.errors) {
    return json(result)
  }

  return await Auth.business.createSession({id: result.id, redirectTo})
}

export default function Login() {
  const [searchParams] = useSearchParams()
  const data = useActionData()

  return (
    <div>
      <div className='my-2'>
        <h1>Business Login</h1>
        <form method='post' className='lg:w-1/2'>
          <input hidden readOnly name='redirectTo' value={searchParams.get('redirectTo') ?? undefined} />
          <Input data={data} type='email' name='email' />
          <Input data={data} type='password' name='password' />
          <button type='submit' className='button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}