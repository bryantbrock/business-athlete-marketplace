import Auth from '~/modules/auth/auth.server'

export const action = async ({request}) => {
  const form = await request.formData()
  const module = form.get('module') || 'business'

  return Auth[module].logout({request})
}