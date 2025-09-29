describe('Login de usuario', () => {
  it('Automatizacion login de usuario', () => {
    cy.visit('https://automationexercise.com/login')
	
	const usuario = 'andreacastro1985@gmail.com';
	const pw = '1234567890';
	
	cy.get('input[data-qa="login-email"]').type(usuario); //Completa el nombre de usuario.
	cy.get('input[data-qa="login-password"]').type(pw); //Completa la contraseña.
	cy.get('button[data-qa="login-button"]').click(); //Click en boton de Login.
	
	cy.url().should('include', 'https://automationexercise.com/');
	cy.get('i.fa.fa-user').parent().find('b').should('have.text', 'andreacastro1985');
	
  })
})