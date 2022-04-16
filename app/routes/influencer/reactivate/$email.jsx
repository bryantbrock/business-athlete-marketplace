import {redirect} from 'remix'
import {db} from '~/utils/db.server'

export const loader = async ({params}) => {
  await db.influencer.update({where: {email: params.email}, data: {isDeleted: false}})

  return redirect('/influencer/login')
}