import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'
const loginPage = require('../../pages/loginPage')
const accountspage = require('../../pages/accountspage')

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
// And ('Click demolink',()=>{
//     loginPage.clickdemo()
// })
Then('Clicks accounts', ()=>{
    accountspage.bankacc() 
})
Then('i will fillup chart of account income', ()=>{
    accountspage.chartincomeacc() 
})
Then('i will fillup chart of account expense', ()=>{
    accountspage.chartexpenseacc() 
})
Then('fillup income', ()=>{
    accountspage.incomeacc() 
})