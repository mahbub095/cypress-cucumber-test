
class AdminPage{

    elements = {
        usernameInput: () => cy.get('[name=email]'),
        passwordInput: () => cy.get('[name=password]'),
        loginBtn: () => cy.get('[id=btnsubmit] '),
      
        //admin section
        adminbtn:()=>  cy.contains('Admin Section'),
        adminsetupbtn:()=>  cy.contains('Admin Setup'),
        //admin setup purpose
        typebtn:()=> cy.xpath("//span[contains(text(),'Type *')]"),
        typebtnone:()=> cy.xpath("//li[normalize-space()='Purpose']"),
        nameInput: () => cy.get('[name=name]'),
        savebtn:()=>  cy.contains('Save Setup'),
        //admin setup source
        typebtnsource:()=> cy.xpath("//li[normalize-space()='Source']"),
        typebtnrefernce:()=> cy.xpath("//li[normalize-space()='Reference']"),

        // query
        querymenu:()=> cy.xpath("//a[normalize-space()='Admission Query']"),
        addbtn:()=> cy.xpath(" //button[normalize-space()='Add']"),
        quryname: () => cy.get('[name=name]'),
        qurassign: () => cy.get('[name=assigned]'),
        clickreference:()=> cy.xpath("//span[normalize-space()='Reference *']"),
        clicknewspaper:()=> cy.xpath("(//li[@class='option'][normalize-space()='Newspaper'])[1]"),
        
        clicksource:()=> cy.xpath("(//span[normalize-space()='Source *']"),
        clickinternet:()=> cy.xpath("(//li[@class='option'][normalize-space()='Internet'])[9]"),
        clickclass:()=> cy.xpath("//span[normalize-space()='Class *']"),
        clickone:()=> cy.xpath("//li[normalize-space()='Class One']"),
        childInput: () => cy.get('[name=no_of_child]'),
        savequerybtn:()=>  cy.contains('Save'),
         
         
    }

    typeUsername(username){
        this.elements.usernameInput().type(username);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }
    adminsection(){
        
        this.elements.adminbtn().click();
        this.elements.adminsetupbtn().click();
        
        this.elements.typebtn().click();
        this.elements.typebtnone().click();
        this.elements.nameInput().type("Test1");
        this.elements.savebtn().click();

    }
    sourcefield(){
        this.elements.typebtn().click();
        this.elements.typebtnsource().click();
        this.elements.nameInput().type("Internet");
        this.elements.savebtn().click();
    }
    referencefield(){
        this.elements.typebtn().click();
        this.elements.typebtnrefernce().click();
        this.elements.nameInput().type("Newspaper");
        this.elements.savebtn().click();
    }
    queryfield(){
         
            this.elements.querymenu().click();
            this.elements.addbtn().click();
            this.elements.quryname().type("Query test");
            this.elements.qurassign().type("2");
            this.elements.clickreference().click();
            this.elements.clicknewspaper().click();
            

            this.elements.clicksource().click();
            this.elements.clickinternet().click();
            this.elements.clickclass().click();
            this.elements.clickone().click();
            this.elements.childInput().type("2");  
            this.elements.savequerybtn().click();
        
    }
}

module.exports = new AdminPage();