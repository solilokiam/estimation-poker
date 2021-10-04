describe('Poker Game', () => {
    it('should load board when entering the name', () => {
        cy.visit('/');

        cy.get('h2').contains("Let's Estimate Some Tickets");

        cy.get('#name')
            .should('be.visible')
            .type('john doe');

        cy.get('button[type="submit"]')
            .should('be.visible')
            .click();

        cy.get('.card').should('have.length', 11);

        cy.get('.card').first().click();

        cy.get('.voter').first().contains('john doe');
    });

    it('should clean the board when clean is pressed', ()=> {
        cy.visit('/');

        cy.get('h2').contains("Let's Estimate Some Tickets");

        cy.get('#name')
            .should('be.visible')
            .type('john doe');

        cy.get('button[type="submit"]')
            .should('be.visible')
            .click();

        cy.get('.card').should('have.length', 11);

        cy.get('.card').first().click();

        cy.get('button').click();

        cy.get('.voter').should('have.length', 0);
    });
});
