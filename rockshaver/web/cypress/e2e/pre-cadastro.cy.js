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

  it('Should show error for invalid email', () => {
    cy.visit('/')

    cy.get('header nav a[href="pre-cadastro"]').click()

    cy.get('input[placeholder="John Doe"]')
      .type('Teste Usuario')

    cy.get('input[placeholder="john.doe@rockshaver.com"]')
      .type('email-invalido')

    cy.contains('button[type=submit]', 'Continuar').click()

    cy.contains('O e-mail inserido é inválido').should('be.visible')
  })

  it('Should show error when only first name is entered', () => {
    cy.visit('/')

    cy.get('header nav a[href="pre-cadastro"]').click()

    cy.get('input[placeholder="John Doe"]')
      .type('Fernando')

    cy.get('input[placeholder="john.doe@rockshaver.com"]')
      .type('fernando@msn.com')

    cy.contains('button[type=submit]', 'Continuar').click()

    cy.contains('label', 'Nome Completo')
      .parent()
      .find('.alert-msg')
      .should('be.visible')
      .and('include.text', 'Informe seu nome completo')
  })

  it('Should show errors when both fields are empty', () => {
    cy.visit('/')

    cy.get('header nav a[href="pre-cadastro"]').click()

    cy.contains('button[type=submit]', 'Continuar').click()

    cy.contains('label', 'Nome Completo')
    .parent()
    .find('.alert-msg')
    .should('be.visible')
    .and('include.text', 'O campo nome é obrigatório')

    cy.contains('label', 'E-mail')
    .parent()
    .find('.alert-msg')
    .should('be.visible')
    .and('include.text', 'O campo e-mail é obrigatório')
  })
})