import PatientFormPage from "../../../../support/pageObjects/PatientFormPage"
import LeftSubMenu from "../../../../support/pageObjects/LeftSubMenu"


describe("Verify user is able to edit form ", function () {

    before("Setup", function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        });

        cy.fixture("example").then(function (data) {
            this.data = data;
        })

    })

    it("Test Edit Form functionality", function () {
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


         //click on Add form drop down
         cy.wait(2000)
         patientFormPage.AddFieldsDropDown().click();

        //click on Section option at Add form drop dowm
        patientFormPage.SectionOptionAtDropdown().click();

        //Verify that section is displayed at edit form
        patientFormPage.Section3Of3AtEditForm().then(function (section) {
            const sec = section.text();
            console.log("Section text: " + sec)
            expect(sec).to.contains(' Section 3 of 3 ');

        })


        //click on Add form drop down
         patientFormPage.AddFieldsDropDown().click();         
        //click on Short Text option at Add field drop down
        patientFormPage.ShortTextOptionAtAddFieldDropdown().click();

        //click on Add form drop down
        cy.wait(2000)
        patientFormPage.AddFieldsDropDown().click();
        //click on checkbox option at Add field drop down
        patientFormPage.CheckboxOptionAtAddFieldDropdown().click();

        //Enter first name
        patientFormPage.EnterFirstName().type("Test First Name");
        //Enter Last name
        patientFormPage.EnterLastName().type("Test Last Name");
        //Enter Short Text
        patientFormPage.EnterShortText().type("Test Short Name");

        //Select option 1 at check box
        patientFormPage.OptionOneAtCheckBox().click();
        //Select option 2 at check box
        patientFormPage.OptionTwoAtCheckBox().click();

        //Click on section 2 of 3 strip to enable the options 
        patientFormPage.Section2of3().click();
        patientFormPage.DeleteButtonOfSection2of3().click();
        patientFormPage.RemoveButtonAtRemoveSectionPopup().click()
        cy.wait(2000)

        //Click on section 3 of 3 strip to enable the options 
        patientFormPage.Section2of2().click();
        patientFormPage.DeleteButtonOfSection2of2().click();
        patientFormPage.RemoveButtonAtRemoveSectionPopup().click();
        cy.wait(2000)
/*`1
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
*/
    })




})