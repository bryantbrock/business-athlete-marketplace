import influencer from '../fixtures/influencer.json'
import business from '../fixtures/business.json'

Cypress.on('uncaught:exception', (err, runnable) => {
  console.log(err);
  return false;
})

Cypress.Commands.add('form_request', (url, formData) => {
  return cy
    .server()
    .route('POST', url)
    .as('formRequest')
    .window()
    .then(win => {
      var xhr = new win.XMLHttpRequest();
      xhr.open('POST', url);
      xhr.send(formData);
    })
    .wait('@formRequest');
});

Cypress.Commands.add('login', (module, password = null, email = null) => {
  const fixture = module === 'influencer' ? influencer : business

  cy.visit(`/${module}`)

  cy.get('input[name="email"]').type(email || fixture.email)
  cy.get('input[name="password"]').type(password || fixture.password)
  cy.get('button[type="submit"]').click()
});

Cypress.Commands.add('logout', (module) => {
  let formData = new FormData()

  formData.append('module', module)

  cy.request({
    url: '/logout',
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    form: true,
    body: new URLSearchParams(formData)
  })

  cy.visit(`/${module}`)
  cy.url().should('include', `/${module}/login`)
});