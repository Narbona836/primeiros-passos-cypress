import userData from '../fixtures/userData.json'

describe('Orange HRM Test', () => {

  const selectorList = {
    usernameFild:"[name='username']",
    passwordFild:"[name='password']",
    loginButton:"button[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    selectionTitletopBar:".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert:"[role='alert']"
  }

  
  it('Login -  Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userSucess.username)
    cy.get(selectorList.passwordFild).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  }),
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userFail.username)
    cy.get(selectorList.passwordFild).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})