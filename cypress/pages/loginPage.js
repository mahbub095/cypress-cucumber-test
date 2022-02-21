
class loginPage{

    elements = {
        usernameInput: () => cy.get('[name=email]'),
        passwordInput: () => cy.get('[name=password]'),
        loginBtn: () => cy.get('[id=btnsubmit] ')
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


}

module.exports = new loginPage();