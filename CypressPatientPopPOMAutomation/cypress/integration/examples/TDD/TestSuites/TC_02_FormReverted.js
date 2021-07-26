import PatientFormPage from "../../../../support/pageObjects/PatientFormPage"
import LeftSubMenu from "../../../../support/pageObjects/LeftSubMenu"


describe("Verify form being reverted from last published is working as expected", function () {

    before("Setup", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });

        cy.fixture("example").then(function (data) {
            this.data = data;
        })

    })

    it("Test Form Reverted functionality", function () {
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
        //patientFormPage.BackArrowAtEditForm().click()


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

        //click on Add form drop down
        patientFormPage.AddFieldsDropDown().click();

        //click on Section option at Add form drop dowm
        patientFormPage.SectionOptionAtDropdown().click();

        //Verify that section is displayed at edit form
        patientFormPage.Section2Of2AtEditForm().then(function (section) {
            const sec = section.text();
            console.log("Section text: " + sec)
            expect(sec).to.contains(' Section 2 of 2 ');

        })

        //click on update button at edit form
        patientFormPage.UpdateButtonAtEditForm().click();

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

        //click on revert icon
        patientFormPage.RevertIconAtEditForm().click()

        //click on revert button at revert form popup
        patientFormPage.RevertButtonAtAtRevertForm().click()

        //verify that Newly added section is no more displayed
         patientFormPage.Section2Of2AtEditForm().should('not.exist');

    })




})