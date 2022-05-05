import {Link, Outlet, useLoaderData, json} from 'remix'
import Auth from '@client/modules/auth/actions.server'

const publicRoutes = [
  '/influencer/login',
  '/influencer/register',
]

export const loader = async ({request}) => {
  const {pathname} = new URL(request.url)

  if (publicRoutes.includes(pathname)) {
    return json({pathname})
  }

  const influencer = await Auth.influencer.get({request})

  return json({influencer, pathname})
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      {
        !data.influencer && (
          <ul>
            <li><Link to="/influencer/login">Login</Link></li>
            <li><Link to="/influencer/register">Sign Up</Link></li>
            <li><Link to="/business/login">Business?</Link></li>
          </ul>
        )
      }
      {
        data.influencer && (
          <div className='flex justify-end'>
            <span>{`Hi ${data.influencer.name}`}</span>
            <form action="/logout" method="post" className='ml-2'>
              <input type="hidden" name="module" value="influencer" />
              <button type="submit">
                Logout
              </button>
            </form>
            <ul className='ml-2'>
              <li><Link to="/influencer">Dashboard</Link></li>
              <li><Link to="/influencer/partnerships">Partnerships</Link></li>
              <li><Link to="/influencer/businesses">Browse Businesses</Link></li>
              <li><Link to="/influencer/inquiries">Inquiries</Link></li>
              <li><Link to="/influencer/products">My products</Link></li>
              <li><Link to="/influencer/settings">Settings</Link></li>
            </ul>
          </div>
        )
      }
      <Outlet />
    </div>
  )
}