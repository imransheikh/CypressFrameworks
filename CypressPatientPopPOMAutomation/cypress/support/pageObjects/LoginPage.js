class LoginPage {


    emailAddress() {
        return cy.get("#email");

    }

    password() {
        return cy.get("#password")
    }
  
    loginButton() {
        return cy.get("#sign-in-submit")
    }



}


export default LoginPage