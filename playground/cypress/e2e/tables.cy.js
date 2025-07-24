describe('Tables', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.userLoggedIn()
        cy.goTo('/tables', 'Tables')
     });

     it('Should validate Github row', () => {
       cy.contains('table tbody tr', '1004')
       .should('be.visible')
       .and('contain', 'Github')
       .and('contain', 'papitodev')
       .and('contain', 'Ativo')
    });  

    it('Should remove one network', () => {

        const name = 'facebook'

        cy.contains('table tbody tr', '1002')
        .find('.remove-item')
        .click()

        cy.contains('button', 'Excluir')
        .click()

        cy.get('table tbody')
        .should('not.contain', name)
        
     });  

     it('Should keep an item in table after cancel exclusion', () => {

        const name = 'Youtube'

        cy.contains('table tbody tr', '1005')
        .find('.remove-item')
        .click()

        cy.contains('button', 'Cancelar')
        .click()

        cy.get('table tbody')
        .should('contain', name)
        
     });  

     it('Should validate a link', () => {

      const id = 'instapapito'

      cy.contains('table tbody tr', id)
      .contains('a', 'Visitar')
      .should('have.attr', 'href', 'https://instagram.com/instapapito')
      .and('have.attr', 'target', '_blank' )
     });  
});