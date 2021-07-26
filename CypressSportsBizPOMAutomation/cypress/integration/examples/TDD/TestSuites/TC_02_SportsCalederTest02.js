//import HomePage from "../../support/PageObjects/HomePage";

import HomePage from "../../../../support/pageObjects/HomePage"
describe("Sports Biz Test tscenario second", function () {

      before("Setup", function () {

        cy.fixture("example").then(function (data) {
             this.data = data;
        })

    })

    it("Sports Biz Test02", function () {

        const homePage= new HomePage
        //visit the application url
        cy.visit(Cypress.env('url'))

        //login into application and provide credential, authentication code
        cy.LoginIntoApplication(this.data.username, this.data.password, this.data.authenticationCode)

         //click on ALL
        homePage.clickOnAll().click()
        //click on Athlete
        homePage.athelete().click()
        homePage.firstAtheletePlusIcon().click()
         //click on Team
        homePage.teamTab().click()
        homePage.teamPlusIcon().click()
         //click on League
        homePage.League().click()

         //click on Association
         homePage.Association().click();
        //click on Venue
        homePage.Venue().click()
         //click on Event
        homePage.Event().click()

        //click on Athlete
        homePage.athelete().click()
        //click on first + athlete icon
        homePage.firstAtheletePlusIcon().click()
         //click on second + athlete icon
        homePage.secondAtheletePlusIcon().click()
         //click on third + athlete icon
        homePage.thirdAtheletePlusIcon().click()

        //select start date in calender
        homePage.StartDateInCalender().click()

        //select end date in calender
        homePage.EndDateInCalender().click()

        //click on Athlete on portfolio profile
        homePage.AthletePortfolioProfile().click()

        //click on dropdown profile
        homePage.dropdownProfile().click({force: true})
         //click on sign out link
        homePage.signoutLink().click({force: true})
    

    })




})