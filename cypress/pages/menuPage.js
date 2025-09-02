class menuPage {
    selectorList() {
        const selectors = {
        myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
        adiminButton:"[href='/web/index.php/admin/viewAdminModule]",
        pimButton:"[href='/web/index.php/pim/viewPimModule']",
        leaveButton:"[href='/web/index.php/leave/viewLeaveModule']",
        timeButton:"[href='/web/index.php/time/viewTimeModule']",
        recruitmentButton:"[href='/web/index.php/recruitment/viewRecruitmentModule']",
        performanceButton:"[href='/web/index.php/performance/viewPerformanceModule']",
        directoryButton:"[href='/web/index.php/directory/viewDirectory']",
        maintenanceButton:"[href='/web/index.php/maintenance/viewMaintenanceModule']",
        claimButton:"[href='/web/index.php/claim/viewClaimModule']",
        buzzButton:"[href='/web/index.php/buzz/viewBuzz']",
        }    
        return selectors
    
    }
    accessMyInfoPage(){
        cy.get(this.selectorList().myInfoButton).click()
    }
    accessAdminPage(){
        cy.get(this.selectorList().adiminButton).click()
        cy.get(selectorList.selectionTitletopBar).should('have.text', '.oxd-topbar-header-breadcrumb')
    }
    accessPimButton(){
        cy.get(this.selectorList().pimButton).click()
    }
    accessLeaveButton(){
        cy.get(this.selectorList().leaveButton).click()
    }
    accessTimeButton(){
        cy.get(this.selectorList().timeButton).click()
    }
    accessRecruitmentButton(){
        cy.get(this.selectorList().recruitmentButton).click()
    }
    accessPerformanceButton(){
        cy.get(this.selectorList().performanceButton).click()
    }
    accessDirectoryButton(){
        cy.get(this.selectorList().directoryButton).click()
    }
    accessMaintenanceButton(){
        cy.get(this.selectorList().maintenanceButton).click()
    }
    accessClaimButton(){
        cy.get(this.selectorList().claimButton).click()
    }
    accessBuzzButton(){
        cy.get(this.selectorList().buzzButton).click()
    }
}
export default menuPage