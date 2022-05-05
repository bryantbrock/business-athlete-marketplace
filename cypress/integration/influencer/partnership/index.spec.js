const module = 'influencer'
const route = `/${module}/partnerships`

describe(`Route: ${route}`, () => {
  before(() => {
    cy.login(module)
    cy.visit(route)
  })

  it('Shows the partnerships', () => {
    cy.get('h2').contains('Partnerships').should('exist')
    cy.get('a').contains('status "pending"').should('exist')
  })

  after(() => {
    cy.logout(module)
  })
})