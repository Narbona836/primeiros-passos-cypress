import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const menuPage = new MenuPage()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('Orange HRM Test', () => {

  const selectorList = {
    dashboardGrid: ".orangehrm-dashboard-grid",
    selectionTitletopBar:".oxd-topbar-header-breadcrumb-module",
    firstNameFild:"[name='firstName']",
    midleNameFild:"[name='middleName']",
    lastNameFild:"[name='lastName']",
    nickNameFild:".oxd-input--active",
    genericFild:".oxd-input--active",
    NationalitySelector:".oxd-select-text--active",
    dateOfBirthFild:"[placeholder='yyyy-dd-mm']",
    dataCloseButton:".--close",
    ssnNunber:".oxd-input--active",
    buttonGender:".oxd-radio-input",
    saveButton:"[type='submit']",
    customFields:"[options='']"

  }
  
  it.only('User Info Update-  Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfoPage()
    menuPage.accessAdiminPage()
    
    menuPage.accesspPimButton()
    menuPage.accessLeaveButton()
    menuPage.accessTemeButton()
    menuPage.accessRecruitmentButton()
    menuPage.accessPerformanceButton()
    menuPage.accessDirectoryButton()
    menuPage.accessMaintenanceButton()
    menuPage.accessClaimButton()
    menuPage.accessBuzzButton()

  
    cy.get(selectorList.firstNameFild).clear().type('firstNameFild')
    cy.get(selectorList.midleNameFild).clear().type('midleNameFild')
    cy.get(selectorList.lastNameFild).clear().type('lastNameFild')
    cy.get(selectorList.nickNameFild).eq(3).clear().type('nickName')
    cy.get(selectorList.genericFild).eq(4).clear().type('IdTest')
    cy.get(selectorList.genericFild).eq(5).clear().type('test')
    cy.get(selectorList.NationalitySelector).eq(0).click()
    cy.contains('Brazilian').click()
    cy.get(selectorList.NationalitySelector).eq(1).click()
    cy.contains('Single').click()
    cy.get(selectorList.dateOfBirthFild).eq(0).clear().type('2055-11-28')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.genericFild).eq(8).clear().type('test-Fild')
    cy.get(selectorList.dateOfBirthFild).eq(1).clear().type('2024-12-12')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.buttonGender).eq(0).click()
    cy.get(selectorList.saveButton).eq(0).click()
    cy.get('.oxd-toast-content')
    cy.get(selectorList.NationalitySelector).eq(2).click()
    cy.contains('A+').click()
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