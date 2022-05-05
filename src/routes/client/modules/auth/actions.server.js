import keys from 'lodash/keys'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import bcrypt from 'bcryptjs'
import {db} from '@client/utils/db.server'
import {createCookieSessionStorage, redirect} from 'remix'

const sessionSecret = process.env.SESSION_SECRET

if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set")
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'RJ_session',
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
})

const createSession = module => async ({id, redirectTo}) => {
  const session = await storage.getSession()

  session.set('id', id)
  session.set('module', module)

  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  })
}

const getSession = ({request}) => {
  return storage.getSession(request.headers.get('Cookie'))
}

const getSessionId = async ({request}) => {
  const session = await getSession({request})
  const id = session.get('id')

  if (!id || typeof id !== 'string') {
    return null
  }

  return id
}

const requireId = module => async ({request, redirectTo = new URL(request.url).pathname}) => {
  const session = await getSession({request})

  const sessionId = session.get('id')
  const sessionModule = session.get('module')

  if (!sessionId || sessionModule !== module || typeof sessionId !== 'string') {
    const searchParams = new URLSearchParams([['redirectTo', redirectTo]])

    throw redirect(`/${module}/login?${searchParams}`)
  }

  return sessionId
}

const logout = module => async ({request}) => {
  const session = await getSession({request})

  return redirect(`/${module}/login`, {
    headers: {
      'Set-Cookie': await storage.destroySession(session),
    },
  })
}

const login = module => async ({email, password}) => {
  const account = await db[module].findUnique({where: {email}})

  if (!account) {
    return {errors: {email: `A ${module} account with that email was not found.`}}
  }

  if (account.isDeleted) {
    return {errors: {email: `A ${module} account with that email has been deleted.`}}
  }

  const passwordMatches = await bcrypt.compare(password, account.passhash)

  if (!passwordMatches) {
    return {errors: {password: 'Incorrect password.'}}
  }

  return omit(account, ['passhash'])
}

const register = module => async ({data}) => {
  let errors = {}

  if (!data.email || !data.email.includes('@')) {
    errors.email = 'Please provide a valid email address.'
  }
  if (!data.password) {
    errors.password = 'Please provide a password.'
  }
  if (!data.name) {
    errors.name = 'Please provide a name.'
  }

  const accountExists = await db[module].findUnique({where: {email: data.email}})

  if (accountExists) {
    errors.email = `${module} already exists.`
  }

  if (keys(errors).length > 0) {
    return {errors}
  }

  try {
    const salt = await bcrypt.genSalt(10)
    const passhash = await bcrypt.hash(data.password, salt)

    const account = await db[module].create({data: {...omit(data, ['password']), passhash}})

    return omit(account, ['passhash'])
  } catch {
    errors.general = `Unable to create ${module}.`

    return {errors}
  }
}

const update = module => async ({id, data}) => {
  let errors = {}

  if (!data.name) errors.name = 'Name cannot be empty.'
  if (!data.email) errors.email = 'Email cannot be empty.'

  if (
    data.currentPassword.length > 0
    || data.password.length > 0
    || data.confirmPassword.length > 0
  ) {
    const passwordMatches = await bcrypt.compare(
      data.currentPassword,
      data.currentPasshash
    )

    if (!passwordMatches) errors.currentPassword = 'Incorrect current password.'
    if (data.password !== data.confirmPassword) errors.confirmPassword = 'Passwords do not match.'
    if (data.password.length < 1) errors.password = 'Password cannot be empty.'
  }


  if (keys(errors).length > 0) {
    return {errors}
  }

  try {
    const updatedAccount = await db[module].update({
      where: {id},
      data: {
        ...pick(data, ['name', 'email', 'instagram', 'phone', 'address']),
        ...(data.password && {
          passhash: await bcrypt.hash(
            data.password,
            await bcrypt.genSalt(10)
          )
        })
      }
    })

    return omit(updatedAccount, ['passhash'])
  } catch {
    errors.general = `Unable to update ${module}.`

    return {errors}
  }
}

const get = module => async ({request, include = null}) => {
  const id = await requireId(module)({request})

  try {
    const account =  await db[module].findUnique({
      where: {id},
      ...(include && {include})
    })

    return omit(account, ['passhash'])
  } catch {
    throw logout(module)({request})
  }
}


export default {
  getSessionId,
  business: {
    login: login('business'),
    register: register('business'),
    get: get('business'),
    requireId: requireId('business'),
    createSession: createSession('business'),
    update: update('business'),
    logout: logout('business'),
  },
  influencer: {
    login: login('influencer'),
    register: register('influencer'),
    get: get('influencer'),
    requireId: requireId('influencer'),
    createSession: createSession('influencer'),
    update: update('influencer'),
    logout: logout('influencer'),
  }
}