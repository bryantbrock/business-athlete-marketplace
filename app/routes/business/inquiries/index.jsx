import {json, useLoaderData, Link} from 'remix'
import {INQUIRY} from '~/utils/constants'
import {db} from '~/utils/db.server'
import Auth from '~/modules/auth/auth.server'

export const loader = async ({request}) => {
  const {pathname} = new URL(request.url)
  const businessId = await Auth.getSessionId({request})
  const inquiries = await db.inquiry.findMany({
    where: {OR: [
      {AND: [
        {partnership: {business: {is: {id: businessId}}}},
        {NOT: {status: INQUIRY.STATUS.drafted}},
        {NOT: {from: INQUIRY.FROM.business}}
      ]},
      {AND: [
        {partnership: {business: {is: {id: businessId}}}},
        {from: INQUIRY.FROM.business},
      ]},
    ]},
    skip: 0,
    take: 20
  })

  return json({inquiries, pathname})
}

export default () => {
  const {inquiries, pathname} = useLoaderData()

  return (
    <div>
      <div>
        <h2>Inquiries</h2>
        <ul>
          {inquiries.map(({id, status}, idx) => (
            <li key={idx}>
              <Link to={pathname + '/' + id}>
                {id} - status "{status}"
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}