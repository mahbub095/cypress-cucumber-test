
class AcademicsPage{

    elements = {
        usernameInput: () => cy.get('[name=email]'),
        passwordInput: () => cy.get('[name=password]'),
        loginBtn: () => cy.get('[id=btnsubmit] '),
      
        //academics section
        academicsbtn: () => cy.contains('Academics'),
        adminsetupbtn: () => cy.xpath("//a[normalize-space()='Section']"),
        // Section field
        sectionname: () => cy.get('[name=name]'),
        sectionbtn: () => cy.contains('Save Section'),
         
        //class section
        classbtn: () => cy.xpath("//a[normalize-space()='Class']"),
        classname: () => cy.get('[name=name]'),   
        classa1btn: () => cy.xpath("//label[normalize-space()='Section A1']"),
         
        classsavebtn:()=> cy.contains("Save Class"),
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
    academicsection(){
        this.elements.academicsbtn().click();
        this.elements.adminsetupbtn().click();
        this.elements.sectionname().type("A1");
        this.elements.sectionbtn().click();
    }
    academicsclass(){
        
        this.elements.classbtn().click();
        this.elements.classname().type("CLASS ONE");
        this.elements.classa1btn().click();
        this.elements.classsavebtn().click();
    }
    }
    module.exports = new AcademicsPage();