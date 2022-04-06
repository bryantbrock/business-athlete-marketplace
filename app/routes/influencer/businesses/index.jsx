import {Link, useLoaderData, json} from 'remix'
import {db} from '~/utils/db.server'

export const loader = async () => {
  const businesses = await db.business.findMany({take: 5})

  return json({businesses})
}

export default () => {
  const {businesses} = useLoaderData()

  return (
    <div>
      <div>
        <h2>Browse Businesses</h2>
        <ul>
          {businesses.map(({id, email}, idx) => (
            <li key={idx}>
              <Link to={`/influencer/businesses/${id}`}>
                {email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}