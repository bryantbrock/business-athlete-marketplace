import {Link, useLoaderData, json} from 'remix'
import Auth from '@client/modules/auth/actions.server'
import {db} from '@client/utils/db.server'
import {PARTNERSHIP} from '@client/utils/constants'

export const loader = async ({request}) => {
  const influencerId = await Auth.getSessionId({request})
  const partnerships = await db.partnership.findMany({
    where: {
      AND: [
        {influencer: {
          is: {id: influencerId}
        }},
       {OR: [
         {owner: PARTNERSHIP.OWNER.influencer},
         {AND: [
           {owner: PARTNERSHIP.OWNER.business},
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
              <Link to={`/influencer/partnerships/${id}`}>
                {id} - status "{status}"
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}