import {redirect, json, useLoaderData} from 'remix'
import {db} from '~/utils/db.server'
import Auth from '~/modules/auth/auth.server'

export const action = async ({request, params}) => {
  const businessId = await Auth.getSessionId({request})
  const {id: newInquiryId} = await db.inquiry.create({data: {
    partnership: {
      create: {
        influencer: {connect: {id: params.id}},
        business: {connect: {id: businessId}},
      }
    }
  }})

  return redirect(`/business/inquiries/${newInquiryId}/edit?type=new`)
}

export const loader = async ({params}) => {
  const influencer = await db.influencer.findUnique({
    where: {id: params.id},
    include: {products: true}
  })

  return json({influencer})
}

export default () => {
  const {influencer} = useLoaderData()

  return (
    <div>
      <span>Influencer selected: {influencer.name}</span>
      <div>
        <span>Products they offer:</span>
        <ul>
          {influencer.products.map((product, idx) => (
            <li key={idx}>{product.name}</li>
          ))}
        </ul>
        <form method='post' className='mt-2'>
          <button type='submit'>Inquire</button>
        </form>
      </div>
    </div>
  )
}