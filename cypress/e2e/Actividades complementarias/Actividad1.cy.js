/// <reference types="cypress" />
describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type(`Carlosouc${numero}`);
        cy.get('#user').clear();
        cy.get('#user').type(`Carlosouc${numero}`);
        cy.get('#pass').type("12345678!", {log:false});
        cy.get("[value='Male']").check({force:true});
        cy.get('#day').select("15");
        cy.get('#month').select("June");
        cy.get('#year').select(88)
        cy.get('#submitForm').click();

    });
});