import HomePage from "../../../../support/pageObjects/HomePage"
import PortfolioPage from "../../../../support/pageObjects/PortfolioPage"

describe("Format left filter scenario", function () {

    before("Setup", function () {

        cy.fixture("example").then(function (data) {
            this.data = data;
        })

    })

    it("Format left filter TC_03", function () {

        const homePage= new HomePage
        const portfolioPage = new PortfolioPage
        //visit the application url
        cy.visit(Cypress.env('url'))

        //login into application and provide credential, authentication code
        cy.LoginIntoApplication(this.data.username, this.data.password, this.data.authenticationCode)

        //click on Coporate Assets tab
        portfolioPage.CorporateAssetsTab().click()

        //Verify all the filter should be displayed at left hand side
        portfolioPage.AllFilter().should('be.visible');
        portfolioPage.AthleteFilter().should('be.visible');
        portfolioPage.TeamFilter().should('be.visible');
        portfolioPage.LeagueFilter().should('be.visible');
        portfolioPage.AssociationFilter().should('be.visible');
        portfolioPage.VenueFilter().should('be.visible');
        portfolioPage.EventFilter().should('be.visible');

        //click on Recommended Matches tab
        cy.wait(2000)
        portfolioPage.RecommendedMatchesTab().click()

        //Verify all the filter should be displayed at left hand side
       portfolioPage.AllFilter().should('be.visible');
        portfolioPage.AthleteFilter().should('be.visible');
        portfolioPage.TeamFilter().should('be.visible');
        portfolioPage.LeagueFilter().should('be.visible');
        portfolioPage.AssociationFilter().should('be.visible');
        portfolioPage.VenueFilter().should('be.visible');
        portfolioPage.EventFilter().should('be.visible');


        //click on Trending  tab
        cy.wait(2000)
        portfolioPage.TrendingTab().click()

        //Verify all the filter should be displayed at left hand side
        portfolioPage.AllFilter().should('be.visible');
        portfolioPage.AthleteFilter().should('be.visible');
        portfolioPage.TeamFilter().should('be.visible');
        portfolioPage.LeagueFilter().should('be.visible');
        portfolioPage.AssociationFilter().should('be.visible');
        portfolioPage.VenueFilter().should('be.visible');
        portfolioPage.EventFilter().should('be.visible');


        //click on Indices  tab
        cy.wait(2000)
        portfolioPage.IndicesTab().click()

        //Verify all the filter should not be displayed at left hand side
        portfolioPage.AllFilter().should('not.exist');
        portfolioPage.AthleteFilter().should('not.exist');
        portfolioPage.TeamFilter().should('not.exist');
        portfolioPage.LeagueFilter().should('not.exist');
        portfolioPage.AssociationFilter().should('not.exist');
        portfolioPage.VenueFilter().should('not.exist');
        portfolioPage.EventFilter().should('not.exist');

        //click on My Favorites  tab
        cy.wait(2000)
        portfolioPage.MyFavorityesTab().click()

        //Verify all the filter should not be displayed at left hand side
        portfolioPage.AllFilter().should('not.exist');
        portfolioPage.AthleteFilter().should('not.exist');
        portfolioPage.TeamFilter().should('not.exist');
        portfolioPage.LeagueFilter().should('not.exist');
        portfolioPage.AssociationFilter().should('not.exist');
        portfolioPage.VenueFilter().should('not.exist');
        portfolioPage.EventFilter().should('not.exist');

        //click on dropdown profile
        homePage.dropdownProfile().click({ force: true })
        //click on sign out link
        homePage.signoutLink().click({ force: true })


    })




})