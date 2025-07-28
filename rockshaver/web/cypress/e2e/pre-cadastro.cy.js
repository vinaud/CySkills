import preRegPage from "../support/pages/pre-reg.page"

describe('Pre Register', () => {
  it('Should Register with success', () => {
    
    preRegPage.go()
    preRegPage.fillForm('Fernando Papito', 'papito@gmail.com')
    preRegPage.submit()

    preRegPage.verifyPreReg('Fernando', 'papito@gmail.com')
  })

  it('Should show error for invalid email', () => {
    preRegPage.go()
    preRegPage.fillForm('Fernando Papito', 'invalid mail')
    preRegPage.submit()

    preRegPage.alertHave('E-mail', 'O e-mail inserido é inválido')
    
  })

  it('Should show error when only first name is entered', () => {
    preRegPage.go()
    preRegPage.fillForm('Papito', 'papito@gmail.com')
    preRegPage.submit()

    preRegPage.alertHave('Nome Completo', 'Informe seu nome completo.')
  })

  it('Should show errors when both fields are empty', () => {
    preRegPage.go()
    preRegPage.submit()

   preRegPage.alertHave('Nome Completo', 'O campo nome é obrigatório')
   preRegPage.alertHave('E-mail', 'O campo e-mail é obrigatório')
  })
})