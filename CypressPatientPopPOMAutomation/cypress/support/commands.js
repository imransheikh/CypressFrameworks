import LoginPage from "../support/pageObjects/LoginPage"
import PatientFormPage from "../support/pageObjects/PatientFormPage"

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
////


// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add("selectProduct", (productName) => {
  cy.get('h4.card-title').each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.get('button.btn.btn-info').eq(index).click()
    }

  })
})



Cypress.Commands.add("LoginIntoApplication", (emailAddress, Password) => {
  const loginPage = new LoginPage
  loginPage.emailAddress().type(emailAddress)
  loginPage.password().type(Password)
  loginPage.loginButton().click();


})


Cypress.Commands.add("CreateNewForm", (formNameTest) => {
  const patientFormPage = new PatientFormPage
  patientFormPage.CreateFromButton().click()
  console.log("TestData: " + formNameTest)
  patientFormPage.FormName().type(formNameTest)
  patientFormPage.CreateButton().click();
  patientFormPage.CreateButton().should('not.exist');

})


Cypress.Commands.add("GenerateRandomString", () => {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    console.log("Random string is: " + text)
    return text;

})


//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
