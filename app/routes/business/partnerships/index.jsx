import {Link, useLoaderData, json} from 'remix'
import Auth from '~/modules/auth/auth.server'
import {db} from '~/utils/db.server'
import {PARTNERSHIP} from '~/utils/constants'

export const loader = async ({request}) => {
  const businessId = await Auth.getSessionId({request})
  const partnerships = await db.partnership.findMany({
    where: {
      AND: [
        {business: {
          is: {id: businessId}
        }},
       {OR: [
         {owner: PARTNERSHIP.OWNER.business},
         {AND: [
           {owner: PARTNERSHIP.OWNER.influencer},
           {NOT: {status: PARTNERSHIP.STATUS.drafted}}
         ]}
       ]}
      ]
    },
    include: {inquiries: true}
  })

  return json({partnerships})
}

export default () => {
  const data = useLoaderData()

  return (
    <div>
      <div>
        <h2>Partnerships</h2>
        <ul>
          {data.partnerships.map(({id, status}, idx) => (
            <li key={idx}>
              <Link to={`/business/partnerships/${id}`}>
                {id} - status "{status}"
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}