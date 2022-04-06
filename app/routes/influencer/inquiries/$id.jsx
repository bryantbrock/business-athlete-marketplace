import {json, Outlet, redirect} from 'remix'
import keys from 'lodash/keys'
import {INQUIRY} from '~/utils/constants'
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

export default () => {
  return <Outlet />
}