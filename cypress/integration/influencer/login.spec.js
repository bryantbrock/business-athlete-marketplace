import fixture from '../../fixtures/influencer.json'

const module = 'influencer'
const route = `/${module}/login`

describe(`Route: ${route}`, () => {
  it(`Logs in a new ${module}`, () => {
    cy.visit(route)
    cy.get('input[name="email"]').type(fixture.email)
    cy.get('input[name="password"]').type(fixture.password)
    cy.get('button[type="submit"]').click()

    cy.get('h2').contains(`Dashboard for ${fixture.name}`)
    cy.logout(module)
  })
})