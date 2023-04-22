export class TodoListPage{
    
    constructor() { 
        this.all = '#all',
        this.completed = '#completed',
        this.active = '#active',
        this.removeAll = '#removeAll'
    }

    validateAll(){
        return cy.get(this.all)
    }
    validateComplete(){
        return cy.get(this.completed)
    }
    validateActive(){
        return cy.get(this.active)
    }
    validateRemoveAll(){
        return cy.get(this.removeAll)
    }
}