describe('Se testean los servicios de la API', () => {
    /*
    beforeEach(()=>{ //No hace falta la página porque estamos testeando la llamada al servicio y no la ui
        cy.visit("url de inicio");
    })//fin del beforeEach
    */

    it('TEST de SERVICIOS shows y sedes', () =>{
        
        cy.llamaServicio('inicio','inicio');
        cy.llamaServicio('puntosdeventas','sedes');


    })//Fin de la tarea B


})//Fin del descibe()