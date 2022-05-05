import {useLoaderData, json} from 'remix'
import Auth from '@client/modules/auth/actions.server'

export const loader = async ({request}) => {
  const {pathname} = new URL(request.url)
  const business = await Auth.business.get({request})

  return json({business, pathname})
}

export default function Index() {
  const data = useLoaderData()

  return (
    <div>
      <h2>Dashboard for {data.business.name}</h2>
    </div>
  )
}