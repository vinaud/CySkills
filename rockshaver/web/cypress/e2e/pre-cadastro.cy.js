describe('Pre Register', () => {
  it('Should Register with success', () => {

    const user ={
      fullname: 'Fernando Papito',
      email: 'papito@gmail.com'
    }

    cy.startPreRegistration(user)
    cy.verifyPreRegistered(user)
  })
  it('Should show error for invalid email', () => {

    const user ={
      fullname: 'Fernando Papito',
      email: 'papito#gmail.com'
    }

    cy.startPreRegistration(user)
    cy.alertHave('E-mail', 'O e-mail inserido é inválido.')
  })

  it('Should show error when only first name is entered', () => {

    const user ={
      fullname: 'Papito',
      email: 'papito@gmail.com'
    }

    cy.startPreRegistration(user)
    cy.alertHave('Nome Completo', 'Informe seu nome completo.')
  })

  it('Should show errors when both fields are empty', () => {

    const user ={
      fullname: '',
         email: ''
    }

    cy.startPreRegistration(user)
    cy.alertHave('Nome Completo', 'O campo nome é obrigatório.')
    cy.alertHave('E-mail', 'O campo e-mail é obrigatório.')
  })
})