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
        
    })

})
