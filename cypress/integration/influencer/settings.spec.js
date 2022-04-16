import fixture from '../../fixtures/influencer.json'

const module = 'influencer'
const route = `/${module}/settings`

describe(`Route: ${route}`, () => {
  beforeEach(() => {
    cy.login(module)
    cy.visit(route)
  })

  afterEach(() => {
    cy.logout(module)
  })

  it('Displays fixture data', () => {
    cy.get('input[name="name"]').should('have.value', fixture.name)
    cy.get('input[name="email"]').should('have.value', fixture.email)
    cy.get('input[name="instagram"]').should('have.value', fixture.instagram)
    cy.get('input[name="phone"]').should('have.value', fixture.phone)
  })

  it('Modifies all fields', () => {
    const test = {
      name: 'Test',
      email: 'test@test.com',
      phone: '1231231234',
      instagram: 'testhandle',
      address: {
        street: '123 Test Ave',
        city: 'Test City',
        state: 'Test State',
        zip: '12345'
      }
    }

    // Add the test data
    cy.get('input[name="name"]').clear().type(test.name)
    cy.get('input[name="email"]').clear().type(test.email)
    cy.get('input[name="phone"]').clear().type(test.phone)
    cy.get('input[name="instagram"]').clear().type(test.instagram)
    cy.get('input[name="street"]').clear().type(test.address.street)
    cy.get('input[name="city"]').clear().type(test.address.city)
    cy.get('input[name="state"]').clear().type(test.address.state)
    cy.get('input[name="zip"]').clear().type(test.address.zip)

    cy.get('button[type="submit"]').contains('Update').click()

    // Verify test data was saved
    cy.get('input[name="name"]').should('have.value', test.name)
    cy.get('input[name="email"]').should('have.value', test.email)
    cy.get('input[name="phone"]').should('have.value', test.phone)
    cy.get('input[name="instagram"]').should('have.value', test.instagram)
    cy.get('input[name="street"]').should('have.value', test.address.street)
    cy.get('input[name="city"]').should('have.value', test.address.city)
    cy.get('input[name="state"]').should('have.value', test.address.state)
    cy.get('input[name="zip"]').should('have.value', test.address.zip)

    // Reset back to original data
    cy.get('input[name="name"]').clear().type(fixture.name)
    cy.get('input[name="email"]').clear().type(fixture.email)
    cy.get('input[name="phone"]').clear().type(fixture.phone)
    cy.get('input[name="instagram"]').clear().type(fixture.instagram)
    cy.get('input[name="street"]').clear()
    cy.get('input[name="city"]').clear()
    cy.get('input[name="state"]').clear()
    cy.get('input[name="zip"]').clear()

    cy.get('button[type="submit"]').contains('Update').click()

    // Verify original data was saved
    cy.get('input[name="name"]').should('have.value', fixture.name)
    cy.get('input[name="email"]').should('have.value', fixture.email)
    cy.get('input[name="instagram"]').should('have.value', fixture.instagram)
    cy.get('input[name="phone"]').should('have.value', fixture.phone)
  })

  it('Changes the password successfully', () => {
    const newPassword = 'newpassword'

    // Fails to change password
    cy.get('input[name="password"]').type(newPassword)
    cy.get('button[type="submit"]').contains('Update').click()
    cy.get('span.text-red-500').contains('Incorrect current password.').should('exist')
    cy.get('span.text-red-500').contains('Passwords do not match.').should('exist')

    // Successfully changes password
    cy.get('input[name="currentPassword"]').type(fixture.password)
    cy.get('input[name="password"]').type(newPassword)
    cy.get('input[name="confirmPassword"]').type(newPassword)
    cy.get('button[type="submit"]').contains('Update').click()

    cy.logout(module)
    cy.login(module, newPassword)
    cy.visit(route)

    // Reset back to original data
    cy.get('input[name="currentPassword"]').type(newPassword)
    cy.get('input[name="password"]').type(fixture.password)
    cy.get('input[name="confirmPassword"]').type(fixture.password)
    cy.get('button[type="submit"]').contains('Update').click()
  })
})