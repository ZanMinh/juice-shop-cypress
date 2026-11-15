Cypress.Commands.add('dismissWelcomeBanner', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.close-dialog').length > 0) {
      cy.get('.close-dialog').click({ force: true });
    }
    if ($body.find('.cc-dismiss').length > 0) {
      cy.get('.cc-dismiss').click({ force: true });
    }
  });
});