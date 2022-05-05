import {redirect} from 'remix'
import {db} from '@client/utils/db.server'

export const loader = async ({params}) => {
  await db.business.update({where: {email: params.email}, data: {isDeleted: false}})

  return redirect('/business/login')
}