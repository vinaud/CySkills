class PreReg {
    start(fullname = '', email = '') {
        cy.visit('/')
        cy.get('header nav a[href="pre-cadastro"]').click();

        cy.get('form h2')
            .should('be.visible')
            .and('have.text', 'Seus dados');

        cy.get('input[name="fullname"]').as('fullname')
        cy.get('input[name="email"]').as('email')
   
        if(fullname){
            cy.get('@fullname')
                .type(fullname);
        }
        if(email){
            cy.get('@email')
                .type(email);
        }       

        cy.contains('button[type=submit]', 'Continuar').click();
    }

    verify(firstName, email) {
        cy.get('.user-name')
            .should('be.visible')
            .and('have.text', `Olá, ${firstName}`);

        cy.get('.user-email')
            .should('be.visible')
            .and('have.text', email);
    }

    alert(fieldName, text) {
        cy.contains('label', fieldName)
            .parent()
            .find('.alert-msg')
            .should('be.visible')
            .and('have.text', text);
    }
}

export default new PreReg();