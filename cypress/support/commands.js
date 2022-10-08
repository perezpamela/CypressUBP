
/**
 * Llama al servicio dinámicamente en base a los parámetros.
 * @method llamaServicio
 * @param {string} par_url recibe la última parte de la url y la concatena con el path base que tienen todas en común.
 * @param {string} par_file recibe el nombre con el que se va a guardar el archivo. Sin la extensión, solo el nombre.
 */

Cypress.Commands.add('llamaServicio', (par_url, par_file)=>{

//Se inicia haciendo una llamada al servicio con el método cy.request() al que hay que pasarle un obj con los datos.
const v_url = 'https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/'+par_url
const v_metodo = 'GET'
const v_request = {method: v_metodo, url:v_url}
//Usa el método request() y le pasa un obj con los datos del método y la url a la cual hacer el request.
//A eso le concatena el método .then() al que le pasa una función que va a comparar el código de la respuesta con 200
cy.request(v_request).then((rta)=>{ expect(rta.status).to.eq(200)
cy.log(JSON.stringify(rta)); //Equivale al console.log() de javascript

//Recibe dos parámetros, donde guardar el archivo (ruta, nombre y extensión) y qué guardar dentro del archivo.
//Por lo general, se guardan en la carpeta Fixtures. Si son muchas cosas, crear subcarpetas.
cy.writeFile('cypress/fixtures/'+par_file+'.json', rta.body); 
});//Fin de .then()

});