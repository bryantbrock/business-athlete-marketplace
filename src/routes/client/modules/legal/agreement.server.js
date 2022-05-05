import htmlToPdf from 'html-pdf-node'
import {renderToString} from 'react-dom/server'
import startCase from 'lodash/startCase'
import {S3} from 'aws-sdk'

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const Agreement = ({
  business,
  influencer,
  endDate,
  termLength,
  sumOfProducts,
  lineItems,
}) => (
  <div>
    <div style={{margin: '3rem'}}>
      <h2 style={{textAlign: 'center'}}>Influencer to Business Aggreement</h2>
      <br />
      <br />
      <p>
        This ABC Agreement is made by and between {business.name}
        and {influencer.name}. During the Term, {influencer.name}
        will provide {business.name} with services as further described below.
      </p>
      <br /><br />
      <div style={{display: 'flex'}}>
        <span style={{marginRight: '2rem', fontWeight: 'bold'}}>I.</span>
        <span style={{fontWeight: 'bold'}}>Term</span>
      </div>
      <br /><br />
      <p>
      The term of this agreement begins {endDate} (the “Effective Date”)
      and ends {termLength} thereafter (the “Term”).
      </p>
      <br /><br />
      <div style={{display: 'flex'}}>
        <span style={{marginRight: '2rem', fontWeight: 'bold'}}>II.</span>
        <span style={{fontWeight: 'bold'}}>Subscription Fee</span>
      </div>
      <br /><br />
      <p>
        The fee for the services is ${sumOfProducts},
        due upfront and paid out to {influencer.name} on the final date of the contract term.
      </p>
      <br />
      <div style={{display: 'flex'}}>
        <span style={{marginRight: '2rem', fontWeight: 'bold'}}>III.</span>
        <span style={{fontWeight: 'bold'}}>Grant of Services to {business.name}</span>
      </div>
      <br />
      <p>
        {influencer.name} hereby grants {business.name} a non-exclusive,
        non-transferable, limited access to {influencer.name} services as follows:
      </p>
      <br />
      <ul style={{marginLeft: '3rem'}}>
        {lineItems.map((item, idx) => (
          <li key={idx}>
            - {item.quantity} amount of {startCase(item.product.name)} costing ${item.product.price}/ea every {item.interval}
            {/* - {item.quantity} amount of {startCase(item.product.name)} costing ${item.product.price}/ea {every {item.interval}} ($120 overall) */}
          </li>
        ))}
      </ul>
      <br />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        {[influencer, business].map((party, idx) => (
          <div key={idx} style={{display: 'flex', flexDirection: 'column', margin: '2rem'}}>
            <span>For {party.name}:</span>
            <div style={{borderTop: '2px solid black', display: 'flex', justifyContent: 'space-between', margin: '2rem 0'}}>
              <span>Authorized Signature</span>
              <span style={{marginLeft: '1rem'}}>Date</span>
            </div>
            <div style={{borderTop: '2px solid black'}}>
              <span>Printed Name</span>
            </div>
            <br />
            <div style={{display: 'flex', flexDirection: 'column', marginTop: '2rem'}}>
              <span>{party.name}</span>
              <span>{party.address?.street}</span>
              <span>{party.address?.city} {party.address?.state}</span>
              <span>{party.address?.zip}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const generateAgreement = async ({partnershipId, params}) => {
  const options = {format: 'A4'}
  const file = {content: renderToString(<Agreement {...params} />)}
  const buffer = await htmlToPdf.generatePdf(file, options)

  const opts = {
    Key: 'partnership-agreement-' + partnershipId + '.pdf',
    Body: buffer,
    Bucket: 'business-athlete-marketplace',
    ContentType: 'application/pdf',
  }

  const {Location: path} = await s3.upload(opts).promise()

  return path
}