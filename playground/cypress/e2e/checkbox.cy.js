describe('Checkbox', () => {

 beforeEach(() => {
    cy.goHome()
    cy.login('papito@cyskills.com.br', 'showtime' )
    cy.userLoggedIn()
    cy.goTo('/checkbox', 'Checkbox')
 });

 it('Should select the languages wich use Node', () => {
   cy.get('label[for="javascript"]').click()
   cy.get('label[for="typescript"]').click()
 });

 it('Should select all language options', () => {

  const langs = ['javascript', 'python', 'rust', 'go', 'typescript']

  langs.forEach(lang =>{
    cy.get(`label[for="${lang}"]`).click()
  })

 });

});

