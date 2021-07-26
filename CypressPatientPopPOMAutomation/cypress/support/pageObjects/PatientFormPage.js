class PatientFormPage {

    CreateFromButton() {
        return cy.xpath("//span[contains(text(),'Create Form')]")
    }

    FormName() {
        return cy.xpath("//div[@class='v-input__slot']//input[contains(@id,'input')]")
    }

    CreateButton() {
        return cy.xpath("//div[contains(@class,'v-card__actions')]//button/span[contains(text(),'Create')]")
    }

    SaveForm() {
        return cy.get(".mr-5 > .v-btn__content");
    }

    SaveAndPublishForm() {
        return cy.xpath("//span[contains(text(),'Save & Publish')]")
    }

    BackArrowAtEditForm() {
        return cy.get("i[class='pp-icon-arrow--back']")
    }


    DisabledFormButton() {
        return cy.xpath("//span[contains(text(),'Disable')]")
    }

    DisabledButtonAtPopup() {
        return cy.xpath("//div[contains(@class,'v-card__actions')]//button/span[contains(text(),'Disable')]")
    }

    AddFieldsDropDown() {
        return cy.xpath("//span[contains(text(),' Add Field ')]")
    }

    SectionOptionAtDropdown() {
        return cy.xpath("//span/div[contains(text(),'Section')]")
    }

    ShortTextOptionAtAddFieldDropdown() {
        return cy.xpath("//div[contains(text(),'Short text')]")
    }

    CheckboxOptionAtAddFieldDropdown() {
        return cy.xpath("//div[contains(text(),'Checkbox')]")
    }

    Section2Of2AtEditForm() {
        return cy.xpath("//h3[contains(text(),' Section 2 of 2 ')]")
    }

    Section3Of3AtEditForm() {
        return cy.xpath("//h3[contains(text(),' Section 3 of 3 ')]")
    }

    UpdateButtonAtEditForm() {
        return cy.xpath("//span[contains(text(),'Update')]")
    }

    RevertIconAtEditForm() {
        return cy.xpath("//i[@class='pp-icon-log']")
    }

    RevertButtonAtAtRevertForm() {
        return cy.xpath("//button/span[contains(text(),'Revert')]")
    }
    
    EnterFirstName() {
        return cy.get(".v-text-field__slot>input").eq(1)
    }

    EnterLastName() {
        return cy.get(".v-text-field__slot>input").eq(2)
    }

    EnterShortText() {
        return cy.get(".v-text-field__slot>input").eq(4)
    }


    OptionOneAtCheckBox(){
        return cy.get("div[class='form-field-display']>label:nth-child(3)")
    }
  
    OptionTwoAtCheckBox(){
        return cy.get("div[class='form-field-display']>label:nth-child(4)")
    }

  
    Section2of3(){
        return cy.xpath("//h3[contains(text(),'Section 2 of 3')]/following-sibling::div[1]")
    }

    DeleteButtonOfSection2of3(){
        return cy.xpath("//h3[contains(text(),'Section 2 of 3')]/following-sibling::div/div/button[1]")
    }

    RemoveButtonAtRemoveSectionPopup(){
        return cy.xpath("//div[contains(@class,'v-card__actions')]//button/span[contains(text(),'Remove')]")
    }
    
   
    Section3of3(){
        return cy.xpath("//h3[contains(text(),'Section 3 of 3')]/following-sibling::div[1]")
    }

    Section2of2(){
        return cy.xpath("//h3[contains(text(),'Section 2 of 2')]/following-sibling::div[1]")
    }

    DeleteButtonOfSection3of3(){
        return cy.xpath("//h3[contains(text(),'Section 3 of 3')]/following-sibling::div/div/button[1]")
    }


    DeleteButtonOfSection2of2(){
        return cy.xpath("//h3[contains(text(),'Section 2 of 2')]/following-sibling::div/div/button[1]")
    }
    
}



export default PatientFormPage;
