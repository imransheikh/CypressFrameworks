/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
const homePage = new HomePage()
const productPage = new ProductPage()
let name

Given('Login into Patientpop application', function () {
  Cypress.on('window:before:load', (win) => {
    Object.defineProperty(win, 'self', {
      get: () => {
        return window.top
      }
    })
  })

  cy.visit(Cypress.env('url'))
  cy.LoginIntoApplication(this.data.username, this.data.password, this.data.authenticationCode)
})


When('User is on form screen', function () {

  //click on Patients left menu
  cy.get(".patients > .navigation-container > .navigation-title > .nav-item").click();

  //click on Patients>>Form left menu
  cy.get(".pa-0>li:nth-child(3)>ul>li:nth-child(2)").contains("Forms").click();


})


And('Create the new form', () => {
  //click on create form icon
  cy.wait(5000);
  //cy.get(".text-right .v-btn > .v-btn__content").click();
  cy.get(".container>div>header>div:nth-child(3)>button>span").click();


  //enter form name
  cy.get(".v-text-field__slot>input").type("TestForm");

  //click on create button at create form popup
  cy.get(".v-card__actions>button:nth-child(2)>span").click()
  cy.wait(5000)



})


And('Edit the form and publish', () => {
  //Edit the form name
  cy.get(".v-text-field__slot>input").eq(0).clear();
  cy.get(".v-text-field__slot>input").eq(0).type("TestForm Updated");
  cy.wait(3000)

  //select the New option from Patient Type drop down
  cy.get(".v-select__slot>input[placeholder='Select']").click()
  //cy.wait(2000)
  cy.get("div[role='listbox']>div:nth-child(2)").click();

  //click on Add field button and add Short Text field
  cy.get(".pp-drop-down-button__main-button").click();
  cy.get(".pp-drop-down-button__menu-item>span>div").contains("Short text").click();

  //click on Add field button and add Checkbox field
  cy.get(".pp-drop-down-button__main-button").click();
  cy.get(".pp-drop-down-button__menu-item>span>div").contains("Checkbox").click();


 //Enter first name
  cy.get(".v-text-field__slot>input").eq(1).type("Test First Name");

  //Enter Last name
  cy.get(".v-text-field__slot>input").eq(2).type("Test Last Name");

  //Enter Short Text
  cy.get(".v-text-field__slot>input").eq(4).type("Test Short Text");

  //Select option 1 at check box
  cy.get("div[class='form-field-display']>label:nth-child(3)").click();

  //Select option 2 at check box
  cy.get("div[class='form-field-display']>label:nth-child(4)").click();

  //click on Save & Publish button
  cy.get(":nth-child(5) > .v-btn__content").click();


})



Then('Logout from application', () => {


  //click on view icon
  cy.get("div[class='v-responsive__content']").click({ force: true })
  cy.get("div[class='v-list-item__title']").contains("Sign Out").click()

})