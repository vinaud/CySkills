describe('Radio', () => {

    beforeEach(() => {
       cy.goHome()
       cy.login('papito@cyskills.com.br', 'showtime' )
       cy.userLoggedIn()
       cy.goTo('/radio', 'Radio Buttons')
    });
   
    it('Should select the framework Cypress', () => {
      cy.contains('label', 'Cypress').click()
    });
   });
   
   