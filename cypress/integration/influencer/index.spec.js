const module = 'influencer'
const route = `/${module}/`

describe(`Route: ${route}`, () => {
  before(() => {
    cy.login(module)
    cy.visit(route)
  })

  it('Shows the dashboard', () => {
    cy.get('h2').contains('Dashboard').should('exist')
  })

  after(() => {
    cy.logout(module)
  })
})