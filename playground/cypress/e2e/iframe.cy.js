describe('Iframe Test Suite', () => {

    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.userLoggedIn()
        cy.goTo('/iframe', 'IFrame')
    });

    it('should interact with an iframe', () => {
       
        cy.frameLoaded('iframe'); // Ensure iframe is loaded
        cy.iframe().find('#fullname').type('Fernando Papito'); // Interact with iframe content
    });
});