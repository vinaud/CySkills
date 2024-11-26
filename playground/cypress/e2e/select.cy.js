describe('Select', () => {

    beforeEach(() => {
       cy.goHome()
       cy.login('papito@cyskills.com.br', 'showtime' )
       cy.userLoggedIn()
       cy.goTo('/select', 'Select')
    });
   
    it('Should select the framework Cypress', () => {
      cy.contains('label', 'Selecione um Framework de Testes')
      .parent()
      .find('select')
      .select('Cypress')
    });
    it('Should select the languages which use Node', () => {

       const langs = ['JavaScript', 'TypeScript']

       cy.get('input[placeholder^="Linguagens de programação"]').click()
       langs.forEach(lang => {
        cy.contains('.option-item', new RegExp("^" + lang + "$")).click()
       })

       cy.get('.language-item').should('have.length', langs.length)
       
      });
   });