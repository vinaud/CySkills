describe('Login', () => {

  beforeEach(() => {
    cy.goHome()
  });

  it('Should login with success', () => {
    cy.login('papito@cyskills.com.br', 'showtime' )
    cy.userLoggedIn()
  })

  it('Should not login with wrong password', () => {
    cy.login('papito@cyskills.com.br', 's14242424' )
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Should not login with not registered email', () => {
    cy.login('404@cyskills.com.br', 'showtime' )
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Should not login with incorrect email', () => {
    cy.login('www.com.br', 'showtime' )
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })
  it('Should not login without email', () => {
    cy.login('', 'showtime' )
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })
  it('Should not login without password', () => {
    cy.login('papito@cyskills.com.br', '' )
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  })
  it('Should not login without password and email', () => {
    cy.login('', '' )
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })
})



