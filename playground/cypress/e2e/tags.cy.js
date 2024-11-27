describe('Tags', () => {
    beforeEach(() => {
        cy.goHome()
        cy.login('papito@cyskills.com.br', 'showtime' )
        cy.userLoggedIn()
        cy.goTo('/tags', 'Tags')
     });

     it('Should input tags in the field', () => {
       
        const tags = ['Javascript', 'Java', 'NodeJS']

        tags.forEach(tag => {
            cy.get('.new-tag').type(`${tag}{Enter}`).should('have.value', '')

            cy.wait(500)
        })

        tags.forEach(tag => {
           cy.get('.tag-input').should('contain', tag)
        })


    });

    
});