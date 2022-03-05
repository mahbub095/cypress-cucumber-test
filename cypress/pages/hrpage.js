
class hrm{

    elements = {
        hrmenu: () => cy.contains('Human Resource'),
        hrsettings: () => cy.contains('Designation'),     
        desination: () => cy.get('[name=title]'),
        savedesination: () => cy.contains('Save designation'),
     
        hrdept: () => cy.contains('Department'),
        deptname: () => cy.get('[name=name]'),
        savedept: () => cy.contains('Save department'),

        //add staff
        staffmenu: () => cy.contains('Add Staff'),
        roleclick: ()=>cy.xpath("//span[normalize-space()='Role']"),
        teacherclick: ()=>cy.xpath("//li[normalize-space()='Teacher']"),
       
       
        deptclick: ()=>cy.xpath("//span[normalize-space()='Department']"),
        acaselect: () =>cy.xpath("//li[normalize-space()='Academic']"),
        deginationclick: ()=>cy.xpath("//span[normalize-space()='Designations']"),
        assistantclick: ()=>cy.xpath("//li[normalize-space()='Assistant Teacher']"),
         
         
        staffname: () => cy.get('[name=first_name]'),
        stafflastname: () => cy.get('[name=last_name]'),
        email: () => cy.get('[name=email]'),
        genderbtn:() =>cy.xpath("//span[normalize-space()='Gender *']"),      
        malebtn:() =>cy.xpath("//li[normalize-space()='Male']"),     
        savestaffbtn: () => cy.contains('Save Staff'),
    }
    humanmenu(){
        this.elements.hrmenu().click();
        this.elements.hrsettings().click();
        this.elements.desination().type("Assistant Teacher");
        this.elements.savedesination().click();

         
    }
    deptmenu(){
        this.elements.hrdept().click();
        this.elements.deptname().type("Academic");
        this.elements.savedept().click();
    }
    addstaffmenu(){
        this.elements.staffmenu().click();
        this.elements.roleclick().click();
        this.elements.teacherclick().click();

        this.elements.deptclick().click();
        this.elements.acaselect().click();
        this.elements.deginationclick().click();
        this.elements.assistantclick().click();


        this.elements.staffname().type("John");
        this.elements.stafflastname().type("smith");
        this.elements.email().type("john@gmail.com");
        this.elements.genderbtn().click();
        this.elements.malebtn().click();
        this.elements.savestaffbtn().click();
    }
}

module.exports = new hrm();