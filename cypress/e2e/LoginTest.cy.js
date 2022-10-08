/// <reference types="cypress" />

import home from '../pages/home.js'
import login from '../pages/login.js'
import failedLogin from '../pages/failLogin.js'
import datos from '../fixtures/users.json'




describe('TEST de logueo', () => {
  beforeEach(() => {cy.visit('https://automationteststore.com')})
  it('Logueo correcto', () => {
    const hm = new home();
    const lgn = new login();
    
    hm.get_BTN().click();
    lgn.get_username().type(datos.users[0].user);
    lgn.get_password().type(datos.users[0].password);
    lgn.get_loginBTN().click();
  }) //Fin de Logueo Correcto

  it('Logueo Incorrecto', () =>{
    const hm = new home();
    const lgn = new login();
    const f_lgn = new failedLogin();
    
    hm.get_BTN().click();
    lgn.get_username().type('Hola');
    lgn.get_password().type('Mundo');
    lgn.get_loginBTN().click();
    f_lgn.get_alertBox().should('contain.text', 'Error');
    f_lgn.get_alertBox().should('have.css', 'color','rgb(169, 68, 66)');
    f_lgn.get_alertBox().should('have.css', 'padding','15px');


  })//Fin Logueo Incorrecto


 

    
  })