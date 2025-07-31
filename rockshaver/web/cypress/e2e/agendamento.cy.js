describe('Agendamento', () => {
    it('Deve fazer um novo agendamento', () => {
        const user = {
            nome: 'Papito Fernando',
            email: 'papito@yahoo.com'
        }

        cy.startPreRegistration(user)
        cy.verifyPreRegistered(user)

        cy.contains('a', 'Agendar um horário').click()
        cy.contains('span', 'Membros da Equipe').should('be.visible')

        cy.contains('div', 'Tina')
        .parent()
        .click()

        cy.contains('span', 'Serviços').should('be.visible')
        
        cy.contains('div', 'Combo').parent().click()

        cy.contains('span', 'Dias Disponíveis').should('be.visible')
        cy.contains('span', 'Horários Disponíveis').should('be.visible')

        cy.contains('.dia-semana', '1').parent().click()

        cy.contains('.hora-opcao', '11:00').click()

        cy.contains('button', 'Confirmar e reservar').click()

        cy.get('h3').should('be.visible').and('have.text', 'Tudo certo por aqui! Seu horário está confirmado.')
        
    })

})
