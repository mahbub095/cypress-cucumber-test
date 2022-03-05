
class loginPage{

    elements = {
        usernameInput: () => cy.get('[name=email]'),
        passwordInput: () => cy.get('[name=password]'),
        loginBtn: () => cy.get('[id=btnsubmit] '),
        demologin: () => cy.contains('Super admin')
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

    // clickdemo(){
    //     this.elements.demologin().click();
    // }

}

module.exports = new loginPage();