describe('Creacion de usuario', () => {
  it('Automatizacion para la creacion de un usuario', () => {
    cy.visit('https://automationexercise.com/login')
	
	
	//Definicion de variables
	const numeroRandom = Math.floor(Math.random() * 1000); //Genera un numero al azar entre 0 y 1000 y lo redondea para abajo para asignarlo a usuario e email.
	const usuario = `UsuarioTesting${numeroRandom}`; 
	const email = `mail${numeroRandom}@gmail.com`;
	const genero = Math.random() < 0.5;
	const pw = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!';
	const newsletterOptIn = Math.random() < 0.5;
	
	cy.get('input[data-qa="signup-name"]').type(usuario); //Completa el nombre de usuario.
	cy.get('input[data-qa="signup-email"]').type(email); //Completa el mail de registro.
	cy.get('button[data-qa="signup-button"]').click(); //Click en boton de signup.
	
	//Chequea que se redireccione a la pagina de signup y que contenga el header correspondiente de forma visible.
	cy.url().should('include', '/signup');
	cy.contains('h2', 'Enter Account Information').should('be.visible');
	
	//Valida el genero de acuerdo al booleano de genero, true or false.
	if(genero) {
		cy.get('#id_gender1').check();
	} else {
		cy.get('#id_gender2').check();
	}

  //Crea una contraseña de 8 caracteres al azar entre mayusculas, minusculas, numeros y !
  cy.get('input[data-qa="password"]').type(Array.from({length: 8}, () => pw[Math.floor(Math.random() * pw.length)]).join('')); //Completa la contraseña en base al array con 8 caracteres y los une como String.
  cy.get('#days').select('1'); //Selecciona el dia 1.
  cy.get('#months').select('July'); //Selecciona el mes de Julio.
  cy.get('#years').select('1985'); //Selecciona el año 1985.
  
  //Marca el newsletter y ofertas solo si el random de OptIn sale true.
  if(newsletterOptIn) {
	
	cy.get('#newsletter').check();
    cy.get('#optin').check();
  }
 
  cy.get('#first_name').type('Andrea'); //Completa el Nombre.
  cy.get('#last_name').type('Castro'); //Completa el apellido.
  cy.get('#address1').type('Calle Falsa 123'); //Completa la direccion.
  cy.get('#country').select('New Zealand'); //Elegi el pais del drop-down.
  cy.get('#state').type('Wellington'); //Completa el estado.
  cy.get('#city').type('Wellington'); //Completa la ciudad.
  cy.get('#zipcode').type('33411'); //Completa el codigo postal.
  cy.get('#mobile_number').type('+641234567'); //Completa el numero de telefono.
  cy.get('button[data-qa="create-account"]').click();  //Hace click en el boton de crear cuenta.
  
  //Valida que cambie correctamente de url a la de la cuenta creada y cierra el flow de creacion.
  cy.url().should('include', '/account_created');
  cy.contains('h2', 'Account Created!');
  cy.get('a[data-qa="continue-button"]').click(); //Hace click en el boton de continuar.
  
	
  })
})