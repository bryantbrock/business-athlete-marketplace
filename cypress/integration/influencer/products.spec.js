const module = 'influencer'
const route = `/${module}/products`

describe(`Route: ${route}`, () => {
  before(() => {
    cy.login(module)
    cy.visit(route)
  })

  it('Adds a product', () => {
    cy.get('input[name="price"]').clear().type(55.99)
    cy.get('button[type="submit"]').contains('Add').click()

    cy.get('span:contains("55.99")').should('have.length', 1)
  })

  it('Deletes a product', () => {
    cy
      .get('span')
      .contains('55.99')
      .parents('[data-cy="product-parent"]')
      .children('form')
      .first()
      .within(() => {
        cy.get('button').click()
      })

    cy.get('span:contains("55.99")').should('have.length', 0)
  })

  after(() => {
    cy.logout(module)
  })
})