class Portfolio {


    CorporateAssetsTab() {
        return cy.get("#mat-tab-label-1-0")
    }

   
    RecommendedMatchesTab() {
        return cy.get("#mat-tab-label-1-1")
    }

   
    TrendingTab() {
        return cy.get("#mat-tab-label-1-2")
    }

    IndicesTab() {
        return cy.get("#mat-tab-label-1-3")
    }

    MyFavorityesTab() {
        return cy.get("#mat-tab-label-1-4")
    }

    AllFilter() {
        
        return cy.xpath("(//div[@role='tablist']//div[contains(text(),'All')])[2]")

    }

    AthleteFilter() {
        return cy.xpath("(//div[@role='tablist']//div[contains(text(),'Athlete')])[2]")
      }
    
    TeamFilter() {
        return cy.xpath("(//div[@role='tablist']//div[contains(text(),'Team')])[2]")
    }

    LeagueFilter() {
        return cy.xpath("(//div[@role='tablist']//div[contains(text(),'League')])[2]")
    }

    AssociationFilter() {
        return cy.xpath("(//div[@role='tablist']//div[contains(text(),'Association')])[2]")
    }

    VenueFilter() {
        return cy.xpath("(//div[@role='tablist']//div[contains(text(),'Venue')])[2]")
    }

    EventFilter() {
        return cy.xpath("(//div[@role='tablist']//div[contains(text(),'Event')])[2]")
        
    }
}

export default Portfolio;
