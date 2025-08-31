class LoginPage {
    selectorList()  {
        const selectors = {
            usernameFild:"[name='username']",
            passwordFild:"[name='password']",
            loginButton:"button[type='submit']",  
            wrongCredentialAlert:"[role='alert']"  
        }   
        
        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithUser(username, password) {
        cy.get(this.selectorList().usernameFild).type(username)
        cy.get(this.selectorList().passwordFild).type(password)
        cy.get(this.selectorList().loginButton).click()

    }
}
export default LoginPage