Cypress.Commands.add('desdobramentoFuncional', () => {
    cy.get(':nth-child(2) > .app-welcome-card-content > .app-welcome-card-content-action > .mdc-button > .mdc-button__label').click()
    cy.get('.mat-mdc-select-min-line').should('contain', 'Minha Área')
});