class LoginPage {


    emailAddress() {
        return cy.get("input[type='email']");

    }

    signInLink() {
        return cy.get(".login")
    }

    password() {
        return cy.get("input[type='password']")
    }


    loginButton() {
        return cy.get("button[type='submit']")
    }


    authentication() {
        return cy.get("form>div>input[type='text']")
    }

  

    submitAuthentication() {
        return cy.get("button[type='submit']")
    }


}


export default LoginPage