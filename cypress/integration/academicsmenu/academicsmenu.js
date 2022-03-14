import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')
const academicsPage = require('../../pages/academicsPage')

Given('A user opens a infixedu website', () => {
    cy.visit('https://freeschoolsoftware.in/spn4/infixedu/v6.4.3/login')
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

// And ('Click demolink',()=>{
//     loginPage.clickdemo()
// })


Then('Clicks academics and fillup section', ()=>{
    academicsPage.academicsection()
})
Then('Clicks class and fillup class', ()=>{
    academicsPage.academicsclass()
})
Then('Click subjects and fillup subjects', ()=>{
    academicsPage.subjectmenu()
}) 