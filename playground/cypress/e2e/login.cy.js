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
})



