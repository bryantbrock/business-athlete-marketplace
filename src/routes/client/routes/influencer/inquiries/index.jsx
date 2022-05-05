import {json, useLoaderData, Link} from 'remix'
import {db} from '@client/utils/db.server'
import {INQUIRY} from '@client/utils/constants'
import Auth from '@client/modules/auth/actions.server'

export const loader = async ({request}) => {
  const {pathname} = new URL(request.url)
  const influencerId = await Auth.getSessionId({request})
  const inquiries = await db.inquiry.findMany({
    where: {OR: [
      {AND: [
        {partnership: {influencer: {is: {id: influencerId}}}},
        {NOT: {status: INQUIRY.STATUS.drafted}},
        {NOT: {from: INQUIRY.FROM.influencer}}
      ]},
      {AND: [
        {partnership: {influencer: {is: {id: influencerId}}}},
        {from: INQUIRY.FROM.influencer},
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