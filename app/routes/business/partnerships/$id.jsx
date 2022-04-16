import {Link, json, useLoaderData, redirect} from 'remix'
import {db} from '~/utils/db.server'
import {PARTNERSHIP} from '~/utils/constants'
import capitalize from 'lodash/capitalize'
import Auth from '~/modules/auth/auth.server'

const statusBgColors = {
  [PARTNERSHIP.STATUS.pending]: 'bg-yellow-200',
  [PARTNERSHIP.STATUS.active]: 'bg-green-200',
  [PARTNERSHIP.STATUS.closed]: 'bg-gray-200',
  [PARTNERSHIP.STATUS.cancelled]: 'bg-red-200',
}

export const loader = async ({request, params}) => {
  const businessId = await Auth.getSessionId({request})
  const [partnership] = await db.partnership.findMany({
    where: {AND: [
      {id: params.id},
      {business: {is: {id: businessId}}}
    ]},
    include: {
      inquiries: {skip: 0, take: 5},
      influencer: true
    }
  })

  if (!partnership) {
    return redirect('/business/partnerships')
  }

  return json({partnership})
}

export default () => {
  const {partnership} = useLoaderData()
  const statusBgColor = statusBgColors[partnership.status]

  return (
    <div>
      <div className='flex'>
        <h1>Partnership with {partnership.influencer.name}</h1>
        <div className={`ml-2 py-1 px-2 rounded-2xl flex justify-center items-center ${statusBgColor}`}>
          <span className='text-sm'>{capitalize(partnership.status)}</span>
        </div>
      </div>
      <br />
      <div>
        <h2>Details</h2>
        <ul>
          {partnership.agreement && (
            <li>
              <a href={partnership.agreement} target='_blank' rel="noreferrer">
                Contract
              </a>
            </li>
          )}
          <li>
            Influencer: {' '}
            <Link to={`/business/influencers/${partnership.influencer.id}`}>
              {partnership.influencer.name}
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <div className='flex flex-col mt-5 md:flex-row md:mt-0'>
        <div className='mr-5 md:w-1/2'>
          <h2>Inquiries</h2>
          <hr className='my-2' />
          <div className='flex'>
            <Link
              to={`/business/inquiries?partnershipId=${partnership.id}`}
              data-css-override={true}
              className='bg-gray-100 hover:bg-gray-200 rounded-lg p-2 my-2'>
                See all inquiries
            </Link>
          </div>
          <div className='flex flex-col border rounded shadow'>
            {partnership.inquiries.map(({id, createdAt, to, from, status}) => (
              <Link
                key={id}
                data-css-override={true}
                to={`/business/inquiries/${id}`}>
                <div className='p-2 hover:bg-gray-50 hover:cursor-pointer border-b'>
                  <strong>Date:</strong> {new Date(createdAt).toLocaleString()}
                  <br />
                  <strong>Status:</strong> {status}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}