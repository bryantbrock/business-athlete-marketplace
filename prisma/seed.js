import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs'
import omit from 'lodash/omit'
import {INQUIRY, PARTNERSHIP, PRODUCT} from '../app/utils/constants.js'

const fixtures = {
  business: {
    email: 'bryantleebrock@gmail.com',
    password: '123',
    name: 'Brock Co.',
    phone: '7708208961',
    address: {
      create: {
        street: '1377 N Mountain View Rd',
        city: 'Moscow',
        state: 'ID',
        zip: '83843',
      }
    }
  },
  influencer: {
    email: 'mjackson@gmail.com',
    password: '123',
    name: 'Michael Jackson',
    phone: '99999999999',
    instagram: 'mjackson',
    products: {
      create: [
        {name: PRODUCT.NAME.instagramPost, price: '99.99'},
        {name: PRODUCT.NAME.instagramReel, price: '215.00'}
      ]
    },
  },
  partnership: {
    influencer: {connect: {email: 'mjackson@gmail.com'}},
    business: {connect: {email: 'bryantleebrock@gmail.com'}},
    status: PARTNERSHIP.STATUS.pending,
    inquiries: {
      create: [
        {notes: 'First partnership between Bryant & Michael', status: INQUIRY.STATUS.pending}
      ]
    }
  },
}

const db = new PrismaClient()

const hashPassword = async item => {
  const salt = await bcrypt.genSalt(10)

  return {
    ...omit(item, ['password']),
    passhash: await bcrypt.hash(item.password, salt)
  }
}

const seed = async () => {
  await Promise.all([
    db.influencer.create({data: await hashPassword(fixtures.influencer)}),
    db.business.create({data: await hashPassword(fixtures.business)}),
  ])

  await db.partnership.create({data: fixtures.partnership})
}

seed()
