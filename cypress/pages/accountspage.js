
class accountspage{

    elements = {
        accountsbtn: () => cy.contains('Accounts'),
        bankaccount: () => cy.contains('Bank Account'),
        bankname: () => cy.get('[name=bank_name]') ,
        accname: () => cy.get('[name=account_name]'),

        accnumber: () => cy.get('[name=account_number]'), 
        openbalance: () => cy.get('[name=opening_balance]'),
        savebtn: () => cy.contains('Save Account'),



        //chart of account
        chartofacc: () => cy.contains('Chart Of Account'),
        chartname: () => cy.get('[name=head]'),
        charttype: () => cy.xpath("//span[normalize-space()='Type *']"),
        chartincome: () => cy.xpath("//li[contains(text(),'Income')]"),
        saveheadbtn: () => cy.contains('Save Head'),
// expense
        chartname: () => cy.get('[name=head]'),
        charttype: () => cy.xpath("//span[normalize-space()='Type *']"),
        chartincome: () => cy.xpath("//li[contains(text(),'Expense')]"),
        saveheadbtn: () => cy.contains('Save Head'),
        //li[contains(text(),'Income')]
          
        //income
        incomebtn: () => cy.contains('Income'),  
        incomenamebtn: () => cy.get('[name=name]') ,
        clickhead : () =>cy.xpath("//body/div/div/section/div/div/div/div/div/form[@method='POST']/div/div/div[2]/div[1]/div[1]"),
        feecollection : () =>cy.xpath("//li[normalize-space()='Fees Collection']"),
        clickpaymethod : () =>cy.xpath("//span[normalize-space()='Payment Method *']"),
        choosecash:() =>cy.xpath("//span[normalize-space()='Payment Method *']"),
        account: () => cy.get('[name=amount]') ,
        updatebtn: () => cy.contains('Update Income'),
          
         
         
         

         
    }
    bankacc(){
        this.elements.accountsbtn().click();
        this.elements.bankaccount().click();
        this.elements.bankname().type("DBBL");
        this.elements.accname().type("SPN");
        this.elements.accnumber().type("123456");
        this.elements.openbalance().type("500");
        this.elements.savebtn().click();
    }
    chartincomeacc(){
        this.elements.chartofacc().click();       
        this.elements.chartname().type("Fees Collection");  
        this.elements.charttype().click(); 
        this.elements.chartincome().click();
        this.elements.saveheadbtn().click();
         
          
    }
    chartexpenseacc(){
        //this.elements.chartofacc().click();       
        this.elements.chartname().type("Academic office cost");  
        this.elements.charttype().click(); 
        this.elements.chartincome().click();
        this.elements.saveheadbtn().click();     
    }

    incomeacc(){
        
        this.elements.incomebtn().click();
        this.elements.incomenamebtn().type("Fees collect"); 
        this.elements.clickhead().click();
        this.elements.feecollection().click();
        this.elements.clickpaymethod().click();
        this.elements.choosecash().click();
        this.elements.account().type("700");     
        this.elements.updatebtn().click();

    }




   

}

module.exports = new accountspage();