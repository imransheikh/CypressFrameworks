import PatientFormPage from "../../../../support/pageObjects/PatientFormPage"
import LeftSubMenu from "../../../../support/pageObjects/LeftSubMenu"
import PatientFormPage from "../../../../support/pageObjects/PatientFormPage"



let test;
describe("Form is disabled, then re-enabled ", function () {

    before("Setup", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
             return false
            });

        cy.fixture("example").then(function (data) {
            this.data = data;
        })

    })

    it("Form enabled, diabled", function () {
        var testVariable;
        
        const patientFormPage = new PatientFormPage
        const leftSubMenu = new LeftSubMenu
        //visit the application url
        cy.visit(Cypress.env('url'))

        //login into application and provide credential, authentication code
        cy.LoginIntoApplication(this.data.username, this.data.password)
        cy.wait(3000)

        //click on patient left menu
        leftSubMenu.PatientsMenu().click();

        //click on form left sub menu under patient menu
        leftSubMenu.FormsSubMenu().click();

        //Create the form with random string everytime
        cy.GenerateRandomString().then((formNameTest) => {
            console.log("Variable " + formNameTest)
            testVariable = formNameTest
            cy.CreateNewForm(testVariable);

        });

        //click on save button at edit form
        patientFormPage.SaveForm().click()
        //click on Save & Publish button
        patientFormPage.SaveAndPublishForm().click()
        //click on back arrow button
        patientFormPage.BackArrowAtEditForm().click()
       
        

        //search the created form and click on edit button
        cy.get("div[id='app']>main>div>div>div>div:nth-child(1)>span").each(($el,
            index, $list) => {
            // grabbing all form text
            const txt = $el.text();
            console.log("All forms: " + txt)
            // checking the matching condition
            if (txt.includes(testVariable)) {
                console.log("Yes I found")
                cy.get("div[id='app']>main>div>div>div>div:nth-child(2)>div:nth-child(5)").eq(index).click()

            }
        })

        //click on diabled button
        patientFormPage.DisabledFormButton().click();
        //click on diable button at disable form popup
        patientFormPage.DisabledButtonAtPopup().click()
          

        //search the updated form and verify that form is diabled
        cy.get("div[id='app']>main>div>div>div>div:nth-child(1)>span").each(($el,
            index, $list) => {
            // grabbing all form text
            const txt = $el.text();
            console.log("All forms: " + txt)
            // checking the matching condition
            if (txt.includes(testVariable)) {
                console.log("Yes I found")
                cy.get("div[id='app']>main>div>div>div>div:nth-child(2)>span:nth-child(1)").eq(index).then(function(formState){
                    const state = formState.text(); 
                    console.log("State is: " + state)              
                    expect(state).to.contains('Disabled');
                })

            }
        })
})




})