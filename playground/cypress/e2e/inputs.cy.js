describe('input Fields', () => {

 beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.userLoggedIn()
 });

 it('Should fill the text field', () => {
    cy.goTo('/input-fields', 'Input Fields')
    cy.get('[data-cy="fullname"]').type('Vinaud')
    cy.get('[data-cy="email"]').type('vinaud@cyskills.com.br')
    cy.get('[data-cy="number"]').type('123456')
    cy.get('[data-cy="date"]').type('2024-10-10')
 });
});