class menuPage {
    selectorList() {
        const selectors = {
        myInfoButton:"[href='/web/index.php/pim/viewMyDetails']"
        }    
        return selectors
    
    }
    accessMyInfoPage(){
        cy.get(this.selectorList().myInfoButton).click()
    }
}
export default menuPage