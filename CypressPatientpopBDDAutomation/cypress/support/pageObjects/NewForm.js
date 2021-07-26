class NewForm
{

FirstNameField()
{
    //return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    //return  cy.xpath("//label[contains(text(),'First Name')]/following-sibling::div/div/div//div/input[contains(@id,'input')]")
    return cy.get("#input-23");
}

getEditBox()
{
    return cy.get("#input-23")
}

}
export default NewForm;
