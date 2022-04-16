const module = 'influencer'
const route = `/${module}/register`

describe(`Route: ${route}`, () => {
  beforeEach(() => {
    cy.visit(route)
  })

  it(`Registers & then deletes a new ${module}`, () => {
    const testData = {
      name: 'Test',
      email: 'test@test.com',
      password: 'test123',
      instagram: 'testhandle',
      phone: '1231231234',
      street: 'Test Ave'
    }

    cy.get('input[name="name"]').type(testData.name)
    cy.get('input[name="email"]').type(testData.email)
    cy.get('input[name="password"]').type(testData.password)
    cy.get('input[name="instagram"]').type(testData.instagram)
    cy.get('input[name="phone"]').type(testData.phone)
    cy.get('input[name="street"]').type(testData.street)

    cy.get('button[type="submit"]').click()
    cy.visit(`/${module}/settings`)

    cy.get('input[name="name"]').should('have.value', testData.name)
    cy.get('input[name="email"]').should('have.value', testData.email)
    cy.get('input[name="instagram"]').should('have.value', testData.instagram)
    cy.get('input[name="phone"]').should('have.value', testData.phone)
    cy.get('input[name="street"]').should('have.value', testData.street)

    cy.get('button[value="delete"]').click({force: true})
  })
})