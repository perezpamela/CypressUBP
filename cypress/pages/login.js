
class loginLocators{
    constructor(){
        this.username = 'input#loginFrm_loginname';
        this.password = 'input#loginFrm_password';
        this.loginBTN = 'button[title="Login"]';
    }
}

export default class Login{
    constructor(){
        this.locators = new loginLocators();
    }

    get_username(){
        return cy.get(this.locators.username);
    }
    get_password(){
        return cy.get(this.locators.password);
    }
    get_loginBTN(){
        return cy.get(this.locators.loginBTN);
    }
}