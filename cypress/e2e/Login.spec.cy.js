describe('Orange HRM Test', () => {

  const selectorList = {
    usernameFild:"[name='username']",
    passwordFild:"[name='password']",
    loginButton:"button[type='submit']",
    selectionTitletopBar:".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert:"[role='alert']"

  }
  it('Login -  Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type('Admin')
    cy.get(selectorList.passwordFild).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type('Test')
    cy.get(selectorList.passwordFild).type('Test')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})