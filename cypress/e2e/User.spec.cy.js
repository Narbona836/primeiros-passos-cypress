import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')



const chance = new Chance()
const menuPage = new MenuPage()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const myInfoPage = new MyInfoPage()



describe('Orange HRM Test', () => {

  
  it('User Info Update-  Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfoPage()
    myInfoPage.fillPersonalDetails(chance.first(),'MidleName',chance.last())
    myInfoPage.fillEmployDetails(chance.integer({min: 5, max: 9 }),chance.cpf(),chance.bb_pin(),'2028-10-08','2000-10-08')
    myInfoPage.saveForm()
    //myInfoPage.customFields()

    // menuPage.accessAdiminPage()
    // menuPage.accesspPimButton()
    // menuPage.accessLeaveButton()
    // menuPage.accessTemeButton()
    // menuPage.accessRecruitmentButton()
    // menuPage.accessPerformanceButton()
    // menuPage.accessDirectoryButton()
    // menuPage.accessMaintenanceButton()
    // menuPage.accessClaimButton()
    // menuPage.accessBuzzButton()

  })
})