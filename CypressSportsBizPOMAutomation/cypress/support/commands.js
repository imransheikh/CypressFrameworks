import LoginPage from "../support/pageObjects/LoginPage"
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
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//

Cypress.Commands.add("selectProduct", (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName))
        {
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
        })
})



Cypress.Commands.add("LoginIntoApplication", (UserName, Password, AuthenticationCode ) => { 
   /* cy.get("input[type='email']").type(usernmae)
    cy.get("input[type='password']").type(password)
    cy.get("button[type='submit']").click()
    cy.get("form>div>input[type='text']").type(authenticationCode)
    cy.get("button[type='submit']").click()
    */ 

  const loginPage= new LoginPage
  loginPage.emailAddress().type(UserName)
  loginPage.password().type(Password)
  loginPage.loginButton().click();
  loginPage.authentication().type(AuthenticationCode);
  loginPage.submitAuthentication().click();
  
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
