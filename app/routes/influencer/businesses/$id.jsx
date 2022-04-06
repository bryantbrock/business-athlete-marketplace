import {Link, json, useLoaderData} from 'remix'
import {db} from '~/utils/db.server'

export const loader = async ({request, params}) => {
  const business = await db.business.findUnique({where: {id: params.id}})

  return json({business})
}

export default () => {
  const {business} = useLoaderData()

  return (
    <div>
      <span>Business selected: {business.name}</span>
    </div>
  )
}