import userData from '../fixtures/userData.json'

describe('Orange HRM Test', () => {

  const selectorList = {
    usernameFild:"[name='username']",
    passwordFild:"[name='password']",
    loginButton:"button[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    selectionTitletopBar:".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert:"[role='alert']",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameFild:"[name='firstName']",
    midleNameFild:"[name='middleName']",
    lastNameFild:"[name='lastName']",
    genericFild:".oxd-input--active",
    NationalitySelector:".oxd-select-text--active",
    dateOfBirthFild:"[placeholder='yyyy-dd-mm']",
    dataCloseButton:".--close",
    buttonGender:".oxd-radio-input",
    saveButton:"[type='submit']",
    customFields:"[options='']"
  }
  
  it.only('User Info Update-  Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userSucess.username)
    cy.get(selectorList.passwordFild).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameFild).clear().type('firstNameFild')
    cy.get(selectorList.midleNameFild).clear().type('midleNameFild')
    cy.get(selectorList.lastNameFild).clear().type('lastNameFild')
    cy.get(selectorList.genericFild).eq(3).clear().type('UserWill')
    cy.get(selectorList.genericFild).eq(4).clear().type('IdTest')
    cy.get(selectorList.genericFild).eq(5).clear().type('test')
    cy.get(selectorList.genericFild).eq(6).clear().type('2025-10-10')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.NationalitySelector).eq(0).click()
    cy.contains('Albanian').click()
    cy.get(selectorList.NationalitySelector).eq(1).click()
    cy.contains('Married').click()
    cy.get(selectorList.genericFild).eq(7).clear().type('2025-11-27')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.buttonGender).eq(0).click()
    cy.get(selectorList.saveButton).eq(0).click()
    cy.get('.oxd-toast-content')
    cy.get(selectorList.NationalitySelector).eq(2).click()
    cy.contains('B+').click()
    cy.get(selectorList.customFields).clear().type('customFilds')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameFild).type(userData.userFail.username)
    cy.get(selectorList.passwordFild).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})