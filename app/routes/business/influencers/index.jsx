import {Link, useLoaderData, json} from 'remix'
import {db} from '~/utils/db.server'

export const loader = async () => {
  const influencers = await db.influencer.findMany({take: 5})

  return json({influencers})
}

export default () => {
  const data = useLoaderData()

  return (
    <div>
      <div>
        <h2>Browse influencers</h2>
        <ul>
          {data.influencers.map(({id, email}, idx) => (
            <li key={idx}>
              <Link to={`/business/influencers/${id}`}>
                {email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}