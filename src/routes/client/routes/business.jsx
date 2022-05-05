import {Link, Outlet, useLoaderData, json} from 'remix'
import Auth from '@client/modules/auth/actions.server'

const publicRoutes = [
  '/business/login',
  '/business/register',
]

export const loader = async ({request}) => {
  const {pathname} = new URL(request.url)

  if (publicRoutes.includes(pathname)) {
    return json({pathname})
  }

  const business = await Auth.business.get({request})

  return json({business, pathname})
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      {
        !data.business && (
          <ul>
            <li><Link to="/business/login">Login</Link></li>
            <li><Link to="/business/register">Sign Up</Link></li>
            <li><Link to="/influencer/login">Influencer?</Link></li>
          </ul>
        )
      }
      {
        data.business && (
          <div className='flex justify-end'>
            <span>{`Hi ${data.business.name}`}</span>
            <form action="/logout" method="post" className='ml-4'>
              <input type="hidden" name="module" value="business" />
              <button type="submit">
                Logout
              </button>
            </form>
            <ul className='ml-4'>
              <li><Link to="/business">Dashboard</Link></li>
              <li><Link to="/business/influencers">Browse influencers</Link></li>
              <li><Link to="/business/partnerships">Partnerships</Link></li>
              <li><Link to="/business/inquiries">Inquiries</Link></li>
              <li><Link to="/business/settings">Settings</Link></li>
            </ul>
          </div>
        )
      }
      <Outlet />
    </div>
  )
}