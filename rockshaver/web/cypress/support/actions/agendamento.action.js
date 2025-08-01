
Cypress.Commands.add('iniciarAgendamento', () => {
    cy.contains('a', 'Agendar um horário').click();
});

Cypress.Commands.add('escolherProfissional', (profissional) => {
    cy.contains('span', 'Membros da Equipe').should('be.visible');
    cy.contains('div', profissional).parent().click();
});

Cypress.Commands.add('selecionarServico', (servicoDescricao) => {
    cy.contains('span', 'Serviços').should('be.visible');
    cy.contains('div', servicoDescricao).parent().click();
});

Cypress.Commands.add('escolherDia', (dia) => {
    cy.contains('span', 'Dias Disponíveis').should('be.visible');
    cy.contains('.dia-semana', dia).parent().click();
});

Cypress.Commands.add('escolherHorario', (hora) => {
    cy.contains('span', 'Horários Disponíveis').should('be.visible');
    cy.contains('.hora-opcao', hora).click();
});

Cypress.Commands.add('finalizarAgendamento', () => {
    cy.contains('button', 'Confirmar e reservar').click();
});
