Feature: Verify user submit new form features

    Scenario: Submit new form with details
    Given User is on registration form screen
    When Enter all the form details
    Then Verify that form submitted successfully
    And Logout from application