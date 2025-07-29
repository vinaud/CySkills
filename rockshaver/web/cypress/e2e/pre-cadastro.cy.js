import preRegPage from "../support/pages/pre-reg.page"
import homePage from "../support/pages/home.page"

import prereg from "../support/actions/prereg"

describe('Pre Register', () => {
  it('Should Register with success', () => {
    
   // homePage.go()
   // homePage.header.goToPreReg()
   // preRegPage.fillForm('Fernando Papito', 'papito@gmail.com')
   // preRegPage.submit()
   //
   // homePage.header.verifyPreReg('Fernando', 'papito@gmail.com')

   prereg.start('Fernando Papito', 'papito@gmail.com')
   prereg.verify('Fernando', 'papito@gmail.com')
  })

  it('Should show error for invalid email', () => {
    prereg.start('Papito Fernando', 'www.com')
    prereg.alert('E-mail', 'O e-mail inserido é inválido.') 
    
  })

  it('Should show error when only first name is entered', () => {
    prereg.start('Papito', 'papito#gmail.com')
    prereg.alert('Nome Completo', 'Informe seu nome completo.') 
  })

  it('Should show errors when both fields are empty', () => {
   prereg.start()
   prereg.alert('Nome Completo', 'O campo nome é obrigatório.')
   prereg.alert('E-mail', 'O campo e-mail é obrigatório.')  
  })
})