import { TodoListPage } from "../../support/pages/todolistPage";
import { LoginPage, loginPage } from "../../support/pages/loginPage";

describe('Actividad complementaria 6', () => { 
    let datosFixture;
    const todolistPage = new TodoListPage();
    const loginPage = new LoginPage();

        before("Datos Fixture", () => {
            cy.fixture("Actividad6").then(data => {
                datosFixture = data
            })
        })
        
         beforeEach("Actividad complementaria 6", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.typeUser(datosFixture.username); 
            loginPage.typePass(datosFixture.password); 
            loginPage.loginClick(); 
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            cy.get(todolistPage.all).should('exist');
            todolistPage.validateComplete().should('exist'); 
            cy.get(todolistPage.active).should('exist'); 
            todolistPage.validateRemoveAll().should('exist'); 
        });
     });