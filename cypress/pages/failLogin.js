class failLoginLocators{
    constructor(){
        this.alertBox = 'div.alert'
    }
}

export default class failLogin{
    constructor(){
        this.locators = new failLoginLocators()
    }

    get_alertBox(){
        return cy.get(this.locators.alertBox);
    }
}