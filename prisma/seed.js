import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs'
import omit from 'lodash/omit'
import {PRODUCT} from '../app/utils/constants.js'

const fixtures = {
  businesses: [
    {
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
  ],
  influencers: [
    {
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
  ],
}

const db = new PrismaClient()

const hashPassword = async items => {
  const salt = await bcrypt.genSalt(10)

  return await Promise.all(
    items.map(async item => ({
      ...omit(item, ['password']),
      passhash: await bcrypt.hash(item.password, salt)
    }))
  )
}

const seed = async () => {
  const businesses = await hashPassword(fixtures.businesses)
  const influencers = await hashPassword(fixtures.influencers)

  await Promise.all([
    Promise.all(businesses.map(data => db.business.create({data}))),
    Promise.all(influencers.map(data => db.influencer.create({data, include: {products: true}})))
  ])
}

seed()
