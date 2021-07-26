class LeftSubMenu {


    PatientsMenu() {
        //return cy.xpath("//div[contains(@class,'pp-side-nav')]/ul//li/div[contains(text(),'Patients')]")
        return cy.get(".patients > .navigation-container > .navigation-title > .nav-item")
  
       
    }

      AllPatientsSubMenu() {
        return cy.xpath("//div[contains(@class,'pp-side-nav')]/ul//li/ul//li[contains(text(),'All Patients')]")
    }
 
    FormsSubMenu() {
        cy.xpath
        return cy.xpath("//div[contains(@class,'pp-side-nav')]/ul/li/ul/li[contains(text(),'Forms')]");
    }

  
}

export default LeftSubMenu;
