import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')
const hrpage = require('../../pages/hrpage')

Given('A user opens a infixedu website', () => {
    cy.visit('https://freeschoolsoftware.in/spn4/infixedu/v6.5.0/login')
})
When('A user enters the username {string}', (username)=>{
    loginPage.typeUsername(username)
})
And('A user enters the password {string}', (password)=>{
    loginPage.typePassword(password)
})
And('A user clicks on the login button', ()=>{
    loginPage.clickLogin() 
})
Then('Clicks hr settings', ()=>{
    hrpage.humanmenu() 
})
Then('Clicks hr department', ()=>{
    hrpage.deptmenu() 
})
Then('add staff', ()=>{
    hrpage.addstaffmenu() 
})