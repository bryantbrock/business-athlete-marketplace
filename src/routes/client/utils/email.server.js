import nodemailer from 'nodemailer'
import {v4} from 'uuid'

export const sendEmail = ({error}) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      type: 'OAUTH2',
      user: process.env.GMAIL_ADDRESS,
      clientId: process.env.GMAIL_OAUTH_CLIENT_ID,
      clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN,
      accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN,
    },
  })

  const options = {
    from: 'bandamarketplace@gmail.com',
    to: 'bryantleebrock@gmail.com',
    subject: `New Error: (id ${v4()}`,
    html: `<div style="margin: 20px;">${error}</div>`,
  }

  transporter.sendMail(options, error => console.log(error))
}