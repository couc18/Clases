//todos los selectores deben ser modificados y utilizar una expresion diferente ya sea con
//css selector o con un metodo de cypress

/// <reference types="cypress" />
describe("Actividad complementaria 2", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementaria 2', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get(`[cy-get="user"]`).type(`pushingit${numero}`); 
        cy.get('[name="user"]').clear()
        cy.get(`#user`).type(`pushingit${numero}`);
        cy.get('[for="pass"]').siblings().type('123456!');
        cy.get('.chakra-radio__input').check({force:true})
        cy.get('#day').select('20')
        cy.get('select[name="month"]').select('September')
        cy.get('.chakra-select').last().select(10)
        cy.contains("button", "Register").click()
        cy.wait(5000)
    });
});