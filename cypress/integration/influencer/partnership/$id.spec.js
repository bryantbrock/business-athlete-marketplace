const module = 'influencer'
const route = `/${module}/partnerships`

describe(`Route: ${route}/$id`, () => {
  before(() => {
    cy.login(module)
    cy.visit(route)
  })

  it('Shows a partnership', () => {
    cy.get('h2').contains('Partnerships').should('exist')
    cy.get('a').contains('status "pending"').click()

    cy.get('h1').contains('Partnership with Brock Co.').should('exist')
    cy.get('h2').contains('Details').should('exist')
    cy.get('a').contains('Contract').should('not.exist')
    cy.get('h2').contains('Inquiries').should('exist')
  })

  after(() => {
    cy.logout(module)
  })
})