const module = 'influencer'
const route = `/${module}/businesses`

describe(`Route: ${route}/$id`, () => {
  before(() => {
    cy.login(module)
    cy.visit(route)
  })

  it('Shows a business', () => {
    cy.get('a').contains('bryantleebrock@gmail.com').click()
    cy.contains('Business selected: Brock Co.').should('exist')
  })

  after(() => {
    cy.logout(module)
  })
})