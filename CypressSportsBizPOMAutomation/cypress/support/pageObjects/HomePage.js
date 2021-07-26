class HomePage {

    clickOnAll() {
        return cy.get("#mat-tab-label-0-0")
    }

    athelete() {
        return cy.get("#mat-tab-label-0-1")
    }

    firstAtheletePlusIcon() {
        return cy.get("ul[class='calendar-of-activities-list']>li:nth-child(1)>div>div:nth-child(3)")
    }

    secondAtheletePlusIcon() {
        return cy.get("ul[class='calendar-of-activities-list']>li:nth-child(2)>div>div:nth-child(3)")
    }

    thirdAtheletePlusIcon() {
        return cy.get("ul[class='calendar-of-activities-list']>li:nth-child(3)>div>div:nth-child(3)")
    }

    teamTab() {
        return cy.get("#mat-tab-label-0-2")
    }

    teamPlusIcon() {
        return cy.get("ul[class='calendar-of-activities-list']>li:nth-child(1)>div>div:nth-child(3)")
    }

    League() {
        return cy.get("#mat-tab-label-0-3")
    }

    Venue() {
        return cy.get("#mat-tab-label-0-4")
    }


    Event() {
        return cy.get("#mat-tab-label-0-4")
    }


    Association() {
        return cy.get("#mat-tab-label-0-4")
    }

    dropdownProfile() {
        return cy.get("div[class='dropdown profile']>div:nth-child(1)")
    }

    
    signoutLink() {
        return cy.get("div[class='dropdown profile']>div:nth-child(2)>a:nth-child(7)>div")
    }

    StartDateInCalender() {
        return cy.get("ngb-datepicker-month[class='border rounded']>div:nth-child(3)>div:nth-child(3)")
    }

    EndDateInCalender() {
        return cy.get("ngb-datepicker-month[class='border rounded']>div:nth-child(4)>div:nth-child(3)")
    }
    

    AthletePortfolioProfile() {
        return cy.get("#mat-tab-label-2-1>div").contains("Athlete")
    }



    

}

export default HomePage;
