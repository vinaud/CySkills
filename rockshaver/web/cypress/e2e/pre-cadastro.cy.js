describe('Pre Register', () => {
  it('Should Register with success', () => {
    cy.visit('/')

    cy.get('header nav a[href="pre-cadastro"]').click()

    cy.get('form h2')
      .should('be.visible')
      .and('have.text', 'Seus dados')

    cy.get('input[placeholder="John Doe"]')
       .type('Fernando Papito')

    cy.get('input[placeholder="john.doe@rockshaver.com"]')
       .type('fernando@msn.com'),

    cy.contains('button[type=submit]', 'Continuar').click()

    cy.get('.user-name')
      .should('be.visible')
      .and('have.text', 'Olá, Fernando')

    cy.get('.user-email')
      .should('be.visible')
      .and('have.text', 'fernando@msn.com')

  })
})