describe('Textarea', () => {

 beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.userLoggedIn()
 });

 it('Should fill the textarea field', () => {
   cy.goTo('/textarea', 'Textarea')
   cy.get('textarea[name="message"').type('Boas vindas ao Cypress Skills.. Um curso de formação completo')
 });
});

