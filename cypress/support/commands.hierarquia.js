Cypress.Commands.add('confirmExistenciaComponentesCEO', () => {
    cy.get('#card-2 > .mat-mdc-card-content').should('exist').log('Existe Card do CEO')
    cy.get('#card-3').should('exist').log('Exist Card do Vice Presidente')
});
Cypress.Commands.add('validHierarquiaComponentesCEO', () => {
    cy.contains('body', 'Jânyo Diniz').then((result) => {
        const hasName = result.length > 0;
        cy.contains('body', 'Joaldo Diniz').then((result2) => {
          const hasOtherName = result2.length > 0;
          if (hasName && hasOtherName) {
            cy.log('Contain Janio Diniz e Joaldo Diniz no componente.')
          } else {
            cy.log('Não Contain os nomes aguardados no componente')
          }
        });
       });
});

Cypress.Commands.add('confirmExistenciaComponentesDiretordeTI', () => {
    cy.get('#card-68 > .mat-mdc-card-content').should('exist').log('Existe card do Diretor de TI')
    cy.get('#card-139').should('exist').log('Existe Card do Gerente de TI')
});
Cypress.Commands.add('validHierarquiaComponentesDiretordeTI', () => {
    cy.contains('body', 'Jose Alberto da Silva').then((result) => {
        const hasName = result.length > 0;
        cy.contains('body', 'Bruno Amorim').then((result2) => {
          const hasOtherName = result2.length > 0;
          if (hasName && hasOtherName) {
            cy.log('Contain Jose Alberto da Silva e Bruno Amorim no componente.')
          } else {
            cy.log('Não Contain os nomes aguardados no componente')
          }
        });
       });
});
Cypress.Commands.add('validacaoLiderancaDiretordeTI', () => {
    cy.get('.app-person-card-actions > :nth-child(1) > .mdc-button > .mdc-button__label').click()
    cy.get('#card-2 > .mat-mdc-card-content').invoke('text').then((text) => {
        const regex = /\d/; // Expressão regular para verificar se o texto contém números
        if (!regex.test(text)) {
            cy.log('Compontente não contem resultados!')         
        } else {
            assert(false, 'Texto contém números')
            cy.log('Compontente mostra resultados não esperados!')        
        }
       });
       
       cy.get('#card-3 > .mat-mdc-card-content').invoke('text').then((text) => {
        const regex = /\d/; // Expressão regular para verificar se o texto contém números
        if (!regex.test(text)) {
            cy.log('Compontente não contem resultados!')
        } else {
            assert(false, 'Texto contém números')
            cy.log('Compontente mostra resultados não esperados!')
        }
       });
    
});

