import {Link, Outlet, useLoaderData, json} from 'remix'
import Auth from '@client/modules/auth/actions.server'
import flatten from 'lodash/flatten'

const modules = ['influencer', 'business']
const publicRoutes = flatten([
  modules.map(module => `/${module}/login`),
  modules.map(module => `/${module}/register`),
])

export const loader = async ({request, params}) => {
  const {pathname} = new URL(request.url)

  if (publicRoutes.includes(pathname)) {
    return json({pathname})
  }

  const account = await Auth[params.module].get({request})

  return json({account, module})
}

export default function Index() {
  const {account, module} = useLoaderData()

  return (
    <div>
      {
        !account && (
          <ul>
            <li><Link to={`/${module}/login>`}>Login</Link></li>
            <li><Link to={`/${module}/register`}>Sign Up</Link></li>
            <li><Link to="/$influencer/login">Influencer?</Link></li>
          </ul>
        )
      }
      {
        account && (
          <div className='flex justify-end'>
            <span>{`Hi ${account.name}`}</span>
            <form action="/logout" method="post" className='ml-4'>
              <input type="hidden" name="module" value={module} />
              <button type="submit">
                Logout
              </button>
            </form>
            <ul className='ml-4'>
              <li><Link to={`/${module}`}>Dashboard</Link></li>
              <li><Link to={`/${module}/influencers`}>Browse influencers</Link></li>
              <li><Link to={`/${module}/partnerships`}>Partnerships</Link></li>
              <li><Link to={`/${module}/inquiries`}>Inquiries</Link></li>
              <li><Link to={`/${module}/settings`}>Settings</Link></li>
            </ul>
          </div>
        )
      }
      <Outlet />
    </div>
  )
}