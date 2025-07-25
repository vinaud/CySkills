describe('Login', () => {
  it('Should Log in with success', () => {
    cy.visit('/')

    cy.get('header nav a[href="entrar"]').click()

    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    cy.get('input[placeholder="Nome"]')
       .type('Fernando Papito')

    cy.get('input[placeholder="E-mail"]')
       .type('fernando@msn.com'),

    cy.get('input[placeholder="Whatsapp"]')
       .type('11999999999')

    cy.contains('button[type=submit]', 'Continuar').click()

    cy.get('.user-name')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('.user-email')
      .should('be.visible')
      .and('have.text', 'fernando@msn.com')

  })
})