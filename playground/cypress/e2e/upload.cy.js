describe('Upload', () => {
    beforeEach(() => {
        cy.goHome()
        cy.doLogin()
        cy.userLoggedIn()
        cy.goTo('/upload', 'Upload')
     });

     it('Should attach a file', () => {
        cy.get('input[name="doc"]').selectFile('cypress/fixtures/doc.pdf')
        .then(element => {
            expect(element[0].files[0].name).to.equal('doc.pdf')                
        })
    });

    it('Should attach an image', () => {
        cy.get('input[name="photo"]').selectFile('cypress/fixtures/liga.jpg')
        .then(element => {
            expect(element[0].files[0].name).to.equal('liga.jpg')  
        })

        cy.get('#image-upload').find('img').should('be.visible').and('have.attr', 'src').and('include', 'blob')
    });
});