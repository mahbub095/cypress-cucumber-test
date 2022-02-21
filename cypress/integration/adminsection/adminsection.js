import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')
const adminsectionPage = require('../../pages/adminsectionPage')

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

Then('Click admin section after goto admin setup fillup your purpose',()=>{
    adminsectionPage.adminsection()
})
And('Fillup your source',()=>{
    adminsectionPage.sourcefield()
})
And('Fillup your reference',()=>{
    adminsectionPage.referencefield()
})
Then('Fillup admin query',()=>{
    adminsectionPage.queryfield()
})
 
