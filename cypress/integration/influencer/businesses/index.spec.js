const module = 'influencer'
const route = `/${module}/businesses`

describe(`Route: ${route}`, () => {
  before(() => {
    cy.login(module)
    cy.visit(route)
  })

  it('Shows businesses', () => {
    cy.get('h2').contains('Browse Businesses').should('exist')
  })

  after(() => {
    cy.logout(module)
  })
})