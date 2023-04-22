describe("Actividad complementaria 3", () =>{

    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath('//span[starts-with(text(), "Inici")]').dblclick()
        cy.xpath('//div//child::input[@name="user"]').type(`pushingit`);
        cy.xpath('//label//following-sibling::input[@type="password"]').type('123456!');
        cy.xpath('//button[text()="Log in"]').click()
        cy.xpath('//p//child::a[@id="todolistlink"]').click()
        cy.xpath('//button//preceding-sibling::input[@cy-get="task"]').type("tarea 1")
        cy.xpath('//button[contains(@type, "subm")]').click()
        cy.xpath('//p[text()="tarea 1"]').click()
    });
});

