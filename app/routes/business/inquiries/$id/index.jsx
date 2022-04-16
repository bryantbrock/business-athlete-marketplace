import {Link} from 'remix'
import startCase from 'lodash/startCase'
import {INQUIRY} from '~/utils/constants'
import {useParentLoaderData} from '~/utils/hooks'

export default () => {
  const {inquiry} = useParentLoaderData({key: 'inquiry'})

  return (
    <div>
      <div>
        <h2>Inquiry</h2>
        <hr />
        <h3 className='my-2'>Details</h3>
        <ul>
          <li><strong>Status:</strong> {inquiry.status}</li>
          <li><strong>Created:</strong> {(new Date(inquiry.createdAt)).toLocaleDateString()}</li>
          <li><strong>Start Date:</strong> {(new Date(inquiry.startDate)).toLocaleDateString()}</li>
          <li><strong>End Date:</strong> {(new Date(inquiry.endDate)).toLocaleDateString()}</li>
          <li><strong>Notes:</strong> {inquiry.notes}</li>
          {inquiry.counterInquiryId && (
            <li><Link to={`/business/inquiries/${inquiry.counterInquiryId}`}>Countered inquiry {'->'}</Link></li>
          )}
        </ul>
        <ul>
          {inquiry.inquiryLineItems.map(({product, quantity, interval}, idx) => (
            <li key={idx}>
              - {quantity} amount of {startCase(product.name)} costing ${product.price}/ea every {interval}
            </li>
          ))}
        </ul>
        {
          inquiry.from === 'business' &&
          inquiry.status === INQUIRY.STATUS.drafted && (
            <Link to={`/business/inquiries/${inquiry.id}/edit`}>Edit</Link>
          )
        }
        {
          inquiry.from !== 'business' &&
          inquiry.status === INQUIRY.STATUS.pending && (
            <form method='post'>
              <button type='submit' name={INQUIRY.STATUS.accepted}>Accept</button>
              <button type='submit' name={INQUIRY.STATUS.rejected}>Reject</button>
              <button type='submit' name={INQUIRY.STATUS.countered}>Counter</button>
            </form>
          )
        }
      </div>
    </div>
  )
}