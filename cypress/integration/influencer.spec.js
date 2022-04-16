const module = 'influencer'
const route = '/' + module

describe(`Route: ${route}`, () => {
  it(`Visiting '${route}' redirects to login while logged out`, () => {
    cy.visit(route)
    cy.url().should('include', `/${module}/login`)
  })

  it(`Visiting '${route}' displays the dashboard`, () => {
    cy.login(module)

    cy.url().should('not.include', `/${module}/login`)
    cy.get('h1').should('contain', 'Dashboard')

    cy.logout(module)
  })
})