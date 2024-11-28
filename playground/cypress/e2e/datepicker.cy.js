describe('Date Picker', () => {
    beforeEach(() => {
      cy.goHome()
      cy.doLogin()
      cy.userLoggedIn()
      cy.goTo('/date-picker', 'Date Picker')
     });

     it('Should select a date to input', () => {
       cy.get('input[placeholder="Escolha uma data"][readonly]').click()
       cy.get('select[aria-label="Month"]').select('Dezembro')
       cy.get('input[aria-label="Year"]').type('2024')
       cy.get('span[aria-label="Dezembro 27, 2024"]').click()
    });  
});