describe('Drag and Drop Test', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.userLoggedIn()
        cy.goTo('/tasks', 'Task Board')
    });

    it('should perform drag and drop', () => {
        const task = 'Definir requisitos do projeto'
        const dataTransfer = new DataTransfer();

        cy.get('[data-cy="1002"]') 
            .trigger('dragstart', { dataTransfer });

        cy.contains('h4', 'Done')
            .parent()
            .trigger('drop', { dataTransfer });

        cy.contains('h4', 'Done').parent().should('contain', task);
    });
});