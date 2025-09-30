describe('Test de API con Echo Server', () => {
  
  it('GET', () => {
    cy.request({
		method: 'GET', 
	    url: 'https://postman-echo.com/get?test=challenge',
	    failOnStatusCode: false
	}).then((response) => {
	  try{
        if (response.status !== 200) {
            cy.log(`Status code inesperado: ${response.status}`);
        }
        if (response.duration > 3000) {
            cy.log(`Tiempo de respuesta mayor al esperado: ${response.duration}ms`);
        }
        expect(response.body).to.have.property('args'); //Argumentos correctos.
        expect(response.body.args).to.deep.equal({ test: 'challenge' });
        expect(response.body).to.have.property('url').and.to.be.a('string');
		expect(response.headers).to.have.property('content-type'); //Contenido.
		expect(response.headers).to.have.property('content-type');
        expect(response.headers['content-type']).to.include('application/json');
        expect(response.headers).to.have.property('server');
        expect(response.headers).to.have.property('date');
	} catch (error) {
		console.error('Error:', {error: error.message, response});
	throw error;
    } 
	cy.log('El GET funciono correctamente.');
    });
	
	cy.request({
        method: 'GET',
        url: 'https://postman-echo.com/status/404', // Endpoint para 404
        failOnStatusCode: false // No marca el test como fallido automáticamente y sigue adelante.
    }).then((response) => {
        expect(response.status).to.eq(404);
        });
  });

  it('POST', () => {
    cy.request({
	    method: 'POST', 
		url: 'https://postman-echo.com/post', 
		body: { name: 'Castro Andrea', age: 40 },
		failOnStatusCode: false
    }).then((response) => {
        if (response.status !== 200) {
            cy.log(`Status code inesperado: ${response.status}`);
        }
        if (response.duration > 3000) {
            cy.log(`Tiempo de respuesta mayor al esperado: ${response.duration}ms`);
        }		
		expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('name', 'Castro Andrea'); //Nombre esperado.
        expect(response.body.data).to.have.property('age', 40); //Edad esperada.
        expect(response.headers).to.have.property('content-type'); //Contenido.
		expect(response.headers['content-type']).to.include('application/json');
		expect(response.body).to.have.property('url', 'https://postman-echo.com/post');
		cy.log('El POST funciono correctamente.');
		
		
      });
  });

});


