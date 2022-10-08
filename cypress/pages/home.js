/*
Trae los objetos de la página de inicio, necesarios para moverse a la página de logueo.
*/

//Crea una clase donde cada atributo es la localización del objeto en la página.
class homeLocators{
    constructor(){
        this.btn = 'ul[id="customer_menu_top"] a';
    }
}

//Crea una clase que va a tener los accesos a los atributos de la clase anterior, para importar en el test.
export default class home{
    constructor(){
        //El constructor va a inicializar el atributo locators con una instancia de la clase homeLocators
        this.locators = new homeLocators();
    }

    //Un método get para cada objeto de homeLocatos que al que se quiera acceder.
    get_BTN(){
        return cy.get(this.locators.btn);
    }
}