const values = {
  influencer: {email: 'mjackson@gmail.com', password: '123'},
  business: {email: 'bryantleebrock@gmail.com', password: '123'},
}

export const login = ({module}) => {
  cy.visit(`/${module}`)

  cy.get('input[name="email"]').type(values[module].email)
  cy.get('input[name="password"]').type(values[module].password)
  cy.get('button[type="submit"]').click()
}

export const logout = ({module}) => {
  let formData = new FormData()

  formData.append('module', module)

  cy.request({
    method: 'POST',
    url: '/logout',
    headers: {"Content-Type": "multipart/form-data"},
    body: formData,
  })

  cy.visit(`/${module}`)
  cy.url().should('include', `/${module}/login`)
}