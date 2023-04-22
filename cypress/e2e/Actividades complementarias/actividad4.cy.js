/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    let datosDeInicio

    //inicializa el fixture
    before('Traer fixture', () => {
        cy.fixture('actividad4').then((data) => {
            datosDeInicio = data
        })
    })

    beforeEach('Login', () => {
        cy.visit('/');
        cy.get('span#registertoggle').dblclick()
    })

    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datosDeInicio.username);
        cy.get('#pass').type(datosDeInicio.password); 
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datosDeInicio.mensajeError)
    });
});