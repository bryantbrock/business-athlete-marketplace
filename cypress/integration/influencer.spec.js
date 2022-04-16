import {login, logout} from '../utils'

const module = 'influencer'

describe('Route: /influencer', () => {
  it('Visiting `/influencer` works while logged out', () => {
    cy.visit('/influencer')
    cy.url().should('include', '/influencer/login')
  })

  it('Visiting `/influencer` works while logged in', () => {
    login({module})

    cy.url().should('not.include', '/influencer/login')
    cy.get('h1').should('contain', 'Dashboard')

    logout({module})
  })
})