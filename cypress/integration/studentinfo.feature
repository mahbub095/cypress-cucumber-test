Feature: Admin Section

    Check admin section also all menu 

    Background: 
        Given A user opens a infixedu website

        Scenario: Check admin section
        When A user enters the username "support@spondonit.com"
        And A user enters the password "12345678"
        And A user clicks on the login button
      