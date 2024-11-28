describe('CEP', () => {
    beforeEach(() => {
      cy.goHome()
      cy.doLogin()
      cy.userLoggedIn()
      cy.goTo('/cep', 'CEP (API dos Correios)')
     });

     it('Should get the address from the Correios API', () => {
       cy.get('input[name="cep"]').type('04534011')
       cy.contains('button', 'Cadastrar').click()
       cy.get('input[name="logradouro"]', {timeout: 7000}).should('have.value', 'Rua Joaquim Floriano')
       cy.get('input[name="cidade"]', {timeout: 7000}).should('have.value', 'São Paulo')
       cy.get('input[name="estado"]', {timeout: 7000}).should('have.value', 'SP')
    });  
});