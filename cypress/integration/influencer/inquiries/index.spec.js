const module = 'influencer'
const route = `/${module}/inquiries`

describe(`Route: ${route}`, () => {
  before(() => {
    cy.login(module)
    cy.visit(route)
  })

  it('Shows inquiries', () => {
    cy.get('h2').contains('Inquiries').should('exist')
    cy.get('a').contains('status "pending"').should('exist')
  })

  after(() => {
    cy.logout(module)
  })
})