describe('Pre Register', () => {
  it('Should Register with success', () => {
   cy.startPreRegistration('Fernando Papito', 'papito@gmail.com')
   cy.verifyPreRegistered('Fernando', 'papito@gmail.com')
  })
  it('Should show error for invalid email', () => {
    cy.startPreRegistration('Papito Fernando', 'www.com')
    cy.alertHave('E-mail', 'O e-mail inserido é inválido.') 
  })

  it('Should show error when only first name is entered', () => {
    cy.startPreRegistration('Papito', 'papito#gmail.com')
    cy.alertHave('Nome Completo', 'Informe seu nome completo.') 
  })

  it('Should show errors when both fields are empty', () => {
    cy.startPreRegistration()
    cy.alertHave('Nome Completo', 'O campo nome é obrigatório.')
    cy.alertHave('E-mail', 'O campo e-mail é obrigatório.')  
  })
})