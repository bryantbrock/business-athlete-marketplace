import Auth from '@client/modules/auth/actions.server'

export const action = async ({request}) => {
  const form = await request.formData()
  const module = form.get('module') || 'business'

  return Auth[module].logout({request})
}