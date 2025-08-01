import calendario from '../fixtures/calendario.json';

describe('Agendamento', () => {

    beforeEach(function () {

        cy.fixture('agendamentos').then(agendamentos => {
            this.agendamentos = agendamentos;
        })

        cy.dropCollection('agendamentos', { failSilently: 'true' }).then(result => {
            cy.log(result);
        });

        cy.intercept('GET', 'http://localhost:3333/api/calendario', {
            statusCode: 200,
            body: calendario
        }).as('getCalendario');
    });

    it('Deve fazer um novo agendamento', function () {
        const agendamento = this.agendamentos.sucesso

        cy.startPreRegistration(agendamento.usuario)
        cy.verifyPreRegistered(agendamento.usuario)

        cy.iniciarAgendamento();
        cy.escolherProfissional(agendamento.profissional);
        cy.selecionarServico(agendamento.servico.descricao);
        cy.escolherDia(agendamento.dia);
        cy.escolherHorario(agendamento.hora);
        cy.finalizarAgendamento();
        
        cy.get('h3').should('be.visible').and('have.text', 'Tudo certo por aqui! Seu horário está confirmado.')

    })

})
