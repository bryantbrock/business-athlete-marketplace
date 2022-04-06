import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcryptjs'
import omit from 'lodash/omit'
import {PRODUCT, INQUIRY} from '../app/utils/constants.js'

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
      email: 'bryantleebrock@gmail.com',
      password: '123',
      name: 'Brock Brock',
      phone: '7708208961',
      instagram: '_.bryantbrock._',
      products: {
        create: [
          {name: PRODUCT.NAME.instagramPost, price: '99.99'},
          {name: PRODUCT.NAME.instagramReel, price: '215.00'}
        ]
      },
    },
  ],
  partnership: ({influencer, business}) => ({
    business: {connect: {id: business.id}},
    influencer: {connect: {id: influencer.id}},
    inquiries: {
      create: [
        {
          to: INQUIRY.TO.influencer,
          from: INQUIRY.FROM.business,
          notes: 'Please, let\'s work man!',
          endDate: (
            new Date(
              (new Date()).setMonth(
                (new Date()).getMonth() + 2
              )
            )
          ).toISOString(),
          inquiryLineItems: {
            create: [
              {
                product: {connect: {id: influencer.products[0].id}},
                quantity: 5,
                interval: 'month'
              },
              {
                product: {connect: {id: influencer.products[1].id}},
                quantity: 1,
              },
            ]
          }
        }
      ]
    },
  }),
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

  const [[business], [influencer]] = await Promise.all([
    Promise.all(businesses.map(data => db.business.create({data}))),
    Promise.all(influencers.map(data => db.influencer.create({data, include: {products: true}})))
  ])

  await db.partnership.create({data: fixtures.partnership({business, influencer})})
}

seed()
