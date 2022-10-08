class headerLocators {

    constructor(){
        this.login_btn='ul[id="customer_menu_top"] a';
        this.username = 'input#loginFrm_loginname';
        this.password = 'input#loginFrm_password';
        this.btn_entrar ="button[title='Login']";
        this.alert_box = 'div.alert'
    }
}

export default class Header{
constructor(){
    this.locators = new headerLocators();
}

get_login_btn(){
    return cy.get(this.locators.login_btn);
    }//fin método get login_btn
get_username(){
    return cy.get(this.locators.username);
    }//fin método get username
get_password(){
    return cy.get(this.locators.password);
    }//fin método get password
get_btn_entrar(){

    return cy.get(this.locators.btn_entrar);
}
get_alert_box(){
    return cy.get(this.locators.alert_box);
}  

}