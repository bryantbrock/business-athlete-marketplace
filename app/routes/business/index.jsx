import {useLoaderData, json} from 'remix'
import Auth from '~/modules/auth/auth.server'

export const loader = async ({request}) => {
  const {pathname} = new URL(request.url)
  const business = await Auth.business.get({request})

  return json({business, pathname})
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      Dashboard for {data.business.name}
    </div>
  )
}