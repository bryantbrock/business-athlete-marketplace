import {Link, json, useLoaderData, redirect} from 'remix'
import capitalize from 'lodash/capitalize'
import startCase from 'lodash/startCase'
import {db} from '~/utils/db.server'
import {INQUIRY, PARTNERSHIP} from '~/utils/constants'

const statusColors = {
  [PARTNERSHIP.STATUS.pending]: 'bg-yellow-200',
  [PARTNERSHIP.STATUS.active]: 'bg-green-200',
  [PARTNERSHIP.STATUS.closed]: 'bg-gray-200',
  [PARTNERSHIP.STATUS.cancelled]: 'bg-red-200',
}

export const loader = async ({params}) => {
  const partnership = await db.partnership.findUnique({
    where: {id: params.id},
    include: {
      inquiries: {
        where: {NOT: {status: INQUIRY.STATUS.drafter}},
        skip: 0,
        take: 5,
        include: {
          inquiryLineItems: {
            include: {product: true}
          }
        }
      },
      business: true
    }
  })

  if (!partnership) {
    return redirect('/influencer/partnerships')
  }

  return json({partnership})
}

export default () => {
  const {partnership} = useLoaderData()
  const statusBgColor = statusColors[partnership.status]

  return (
    <div>
      <div className='flex'>
        <h1>Partnership with {partnership.business.name}</h1>
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
            Business: {' '}
            <Link to={`/influencer/businesses/${partnership.business.id}`}>
              {partnership.business.name}
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
              to={`/influencer/inquiries?partnershipId=${partnership.id}`}
              data-css-override={true}
              className='bg-gray-100 hover:bg-gray-200 rounded-lg p-2 my-2'>
                See all inquiries
            </Link>
          </div>
          <div className='flex flex-col border rounded shadow'>
            {partnership.inquiries.map(({id, createdAt, status, inquiryLineItems}) => (
              <Link
                key={id}
                data-css-override={true}
                to={`/influencer/inquiries/${id}`}>
                <div className='p-2 hover:bg-gray-50 hover:cursor-pointer border-b'>
                  <div>
                    <strong>Date:</strong> {new Date(createdAt).toLocaleString()}
                    <br />
                    <strong>Status:</strong> {status}
                    <br />
                    <strong>Details:</strong>
                    <ul>
                      {inquiryLineItems.map(({product, quantity, interval}, idx) => (
                        <li key={idx}>
                          - {quantity} amount of {startCase(product.name)} costing ${product.price}/ea every {interval}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}