// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('startPreRegistration', (user) => {
    cy.visit('/')
    cy.get('header nav a[href="pre-cadastro"]').click();

    cy.get('form h2')
        .should('be.visible')
        .and('have.text', 'Seus dados');

    cy.get('input[name="fullname"]').as('fullname')
    cy.get('input[name="email"]').as('email')

    if (user.nome) {
        cy.get('@fullname')
            .type(user.nome);
    }
    if (user.email) {
        cy.get('@email')
            .type(user.email);
    }

    cy.contains('button[type=submit]', 'Continuar').click();
})

Cypress.Commands.add('verifyPreRegistered', (user) => {
    cy.get('.user-name')
        .should('be.visible')
        .and('have.text', `Olá, ${user.nome.split(' ')[0]}`);

    cy.get('.user-email')
        .should('be.visible')
        .and('have.text', user.email);

    cy.window().then((win) => {
        const userKey =  win.localStorage.getItem('usuario')
        expect(userKey).to.be.equal(JSON.stringify(user))
        });
        
})

Cypress.Commands.add('alertHave', (fieldName, text) => {
    cy.contains('label', fieldName)
        .parent()
        .find('.alert-msg')
        .should('be.visible')
        .and('have.text', text);
})