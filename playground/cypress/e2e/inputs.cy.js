describe('input Fields', () => {

 beforeEach(() => {
    cy.goHome()
    cy.login('papito@cyskills.com.br', 'showtime' )
    cy.userLoggedIn()
 });

 it('Should fill the text field', () => {
    cy.get('nav a[href="/input-fields"]').click()
    cy.contains('h2', 'Input Fields').should('be.visible')
    cy.get('[data-cy="fullname"]').type('Vinaud')
    cy.get('[data-cy="email"]').type('vinaud@cyskills.com.br')
    cy.get('[data-cy="number"]').type('123456')
    cy.get('[data-cy="date"]').type('2024-10-10')
 });
});