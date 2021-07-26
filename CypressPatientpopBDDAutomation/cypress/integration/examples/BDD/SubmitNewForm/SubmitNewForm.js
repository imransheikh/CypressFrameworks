/// <reference types="Cypress" />

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import NewForm from '../../../../support/pageObjects/NewForm';
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const homePage = new HomePage()
const productPage = new ProductPage()
const newForm = new NewForm()
let name

Given('User is on registration form screen', function () {
    Cypress.on('window:before:load', (win) => {
        Object.defineProperty(win, 'self', {
            get: () => {
                return window.top
            }
        })
    })

    cy.visit(Cypress.env('registerFormURL'))
    //cy.LoginIntoApplication(this.data.username, this.data.password, this.data.authenticationCode)
})


When('Enter all the form details', function () {
    console.log("Test When")

    //Enter first name
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-23")
        .eq(0)
        .click()
        .type("TestFirstName")

    //Enter last name
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-31")
        .eq(0)
        .click()
        .type("TestLastName")



    //Enter Mobile phone
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-39")
        .eq(0)
        .click()
        .type("8888888888")



    //Enter Short text
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-49")
        .eq(0)
        .click()
        .type("ShortText")



    //Enter Long text
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-57")
        .eq(0)
        .click()
        .type("LongText")


    //Enter Number
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-63")
        .eq(0)
        .click()
        .type("12345678")


    //Enter Phone Number
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-71")
        .eq(0)
        .click()
        .type("1234567890")


    //Enter Phone Number
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-71")
        .eq(0)
        .click()
        .type("1234567890")

    //Enter email address
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-81")
        .eq(0)
        .click()
        .type("john.smith@gmail.com")


    //Select the date
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("#input-91")
        .eq(0)
        .click()
        .type("06/11/2021")


    //Select radio button
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("input[value='option-2']")
        .eq(0)
        .click({ force: true })

    //Select checkboxes
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("label>input[type='checkbox']")
        .eq(4)
        .click({ force: true })

    //Click on submit button
    cy.iframe('#registration-form').as('registrationFrame') // create alias
    cy.get('@registrationFrame')
        .find("button[type='submit']")
        .eq(0)
        .click({ force: true })


})



Then('Verify that form submitted successfully', () => {
    console.log("Test Then")
    cy.wait(5000)
    //Verify the Form successfully submitted! message should be displayed
    cy.iframe('#registration-form').as('registrationFrame')
    cy.get('@registrationFrame')
        .find("div[class*='submission-completed']>h2")
        .eq(0)
        .should('have.text', 'Form successfully submitted!')



})



And('Logout from application', () => {

    console.log("Test And")

})