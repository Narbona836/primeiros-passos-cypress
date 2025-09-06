class MyInfoPage {
    selectorList() {
        const selectors = {
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
        return selectors
    
    }
    fillPersonalDetails(firstName, midleName, lestName){
        cy.get(this.selectorList().firstNameFild).clear().type(firstName)
        cy.get(this.selectorList().midleNameFild).clear().type(midleName)
        cy.get(this.selectorList().lastNameFild).clear().type(lestName)
    
    
    }
    fillEmployDetails(emplyeeId, OtherId,  licenNumber,dateOfBirthFild, licenExpDate, buttonGender){
        cy.get(this.selectorList().genericFild).eq(3).clear().type(emplyeeId)
        cy.get(this.selectorList().genericFild).eq(4).clear().type(OtherId)
        cy.get(this.selectorList().genericFild).eq(5).clear().type(licenNumber)
        cy.get(this.selectorList().dateOfBirthFild).eq(0).click().clear().type(licenExpDate)
        cy.get(this.selectorList().dataCloseButton).click()
        cy.get(this.selectorList().NationalitySelector).eq(0).click()
        cy.contains('Brazilian').click()
        cy.get(this.selectorList().NationalitySelector).eq(1).click()
        cy.contains('Single').click()
        cy.get(this.selectorList().dateOfBirthFild).eq(1).click().clear().type(dateOfBirthFild)
        cy.get(this.selectorList().dataCloseButton).click()
        cy.get(this.selectorList().buttonGender).eq(0).click()
        
    }
    //customFields(){
    //    cy.get(this.selectorList().NationalitySelector).eq(2).click()
    //    cy.contains().click()
    //    cy.get(selectorList.customFields).clear().type('customFilds')
    //}
    saveForm(){
        cy.get(this.selectorList().saveButton).eq(0).click()
        cy.get('.oxd-toast-content')
    }
    

}
export default MyInfoPage