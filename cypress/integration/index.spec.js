describe('Route: /', () => {
  it('Visiting `/` works', () => {
    cy.visit('/')
    cy.url().should('include', '/business/login')
  })
})