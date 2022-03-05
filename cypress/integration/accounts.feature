Feature: Academics Section

    Check Academics all menu 

    Background: 
        Given A user opens a infixedu website

        Scenario: Check acdemics section
        When A user enters the username "support@spondonit.com"
        And A user enters the password "12345678"
        And A user clicks on the login button
        # And Click demolink
        Then Clicks accounts
        Then i will fillup chart of account income
        Then i will fillup chart of account expense
        Then fillup income