import {json, redirect, useLoaderData} from 'remix'
import {db} from '@client/utils/db.server'

export const loader = async ({params}) => {
  const business = await db.business.findUnique({where: {id: params.id}})

  if (!business) {
    return redirect('/influencer/businesses')
  }

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