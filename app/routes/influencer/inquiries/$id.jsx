import {json, Outlet, redirect} from 'remix'
import keys from 'lodash/keys'
import {INQUIRY} from '~/utils/constants'
import {db} from '~/utils/db.server'
import Auth from '~/modules/auth/auth.server'
import {acceptInquiry, rejectInquiry, counterInquiry} from '~/modules/inquiry/actions.server'

export const action = async ({request, params}) => {
  const id = params.id
  const form = await request.formData()
  const [action] = keys(Object.fromEntries(form))

  if (action === INQUIRY.STATUS.accepted) {
    await acceptInquiry({id})
  }

  if (action === INQUIRY.STATUS.rejected) {
    await rejectInquiry({id})
  }

  if (action === INQUIRY.STATUS.countered) {
    const {id: newInquiryId} = await counterInquiry({id})

    return redirect(`/influencer/inquiries/${newInquiryId}/edit?type=counter`)
  }

  return json({})
}

export const loader = async ({request, params}) => {
  const influencerId = await Auth.getSessionId({request})
  const [inquiry] = await db.inquiry.findMany({
    where: {AND: [
      {id: params.id},
      {
        partnership: {
          influencer: {
            is: {id: influencerId}
          }
        }
      }
    ]},
    include: {
      inquiryLineItems: {
        include: {product: true}
      },
      partnership: {
        include: {
          influencer: {
            include: {products: true}
          }
        }
      }
    }
  })

  if (!inquiry) {
    return redirect('/influencer/inquiries')
  }

  return json({inquiry})
}

export default () => {
  return <Outlet />
}