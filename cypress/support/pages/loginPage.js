export class LoginPage {
    
    constructor() {
        this.userLogin = '#user',
        this.passLogin = '#pass',
        this.clickLogin = '#submitForm'
    };

    typeUser(user){
        cy.get(this.userLogin).type(user);
    };
    typePass(pass){
        cy.get(this.passLogin).type(pass);
    };
    loginClick(){
        cy.get(this.clickLogin).click();
    };
}