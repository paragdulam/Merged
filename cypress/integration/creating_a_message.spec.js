
describe('Creating a message', () => {
    it('Displaying a message in the list', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="messageText"]').type('New message');

        cy.get('[data-testid="sendButton"]').click();

        cy.get('[data-testId="messageText"]').should('have.value','');

        cy.contains('New message');
    });
});