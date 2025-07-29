import preRegPage from "../support/pages/pre-reg.page"
import homePage from "../support/pages/home.page"

describe('Pre Register', () => {
  it('Should Register with success', () => {
    
    homePage.go()
    homePage.header.goToPreReg()
    preRegPage.fillForm('Fernando Papito', 'papito@gmail.com')
    preRegPage.submit()

    homePage.header.verifyPreReg('Fernando', 'papito@gmail.com')
  })

  it('Should show error for invalid email', () => {
    homePage.go()
    homePage.header.goToPreReg()
    preRegPage.fillForm('Fernando Papito', 'invalid mail')
    preRegPage.submit()

    preRegPage.alertHave('E-mail', 'O e-mail inserido é inválido')
    
  })

  it('Should show error when only first name is entered', () => {
    homePage.go()
    homePage.header.goToPreReg()
    preRegPage.fillForm('Papito', 'papito@gmail.com')
    preRegPage.submit()

    preRegPage.alertHave('Nome Completo', 'Informe seu nome completo.')
  })

  it('Should show errors when both fields are empty', () => {
    homePage.go()
    homePage.header.goToPreReg()
    preRegPage.submit()

   preRegPage.alertHave('Nome Completo', 'O campo nome é obrigatório')
   preRegPage.alertHave('E-mail', 'O campo e-mail é obrigatório')
  })
})