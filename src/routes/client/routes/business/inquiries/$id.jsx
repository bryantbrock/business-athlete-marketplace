import {acceptInquiry, rejectInquiry, counterInquiry} from '@client/modules/inquiry/actions.server'
import {redirect, json, Outlet} from 'remix'
import {INQUIRY} from '@client/utils/constants'
import {db} from '@client/utils/db.server'
import keys from 'lodash/keys'
import Auth from '@client/modules/auth/actions.server'

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

    return redirect(`/business/inquiries/${newInquiryId}/edit?type=counter`)
  }

  return json({})
}

export const loader = async ({request, params}) => {
  const businessId = await Auth.getSessionId({request})
  const [inquiry] = await db.inquiry.findMany({
    where: {AND: [
      {id: params.id},
      {
        partnership: {
          business: {
            is: {id: businessId}
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
    return redirect('/business/inquiries')
  }

  return json({inquiry})
}

export default () => {
  return <Outlet />
}
