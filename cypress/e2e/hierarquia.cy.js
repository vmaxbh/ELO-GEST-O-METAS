describe('Confirmação de Hierarquia CEO', () => {
    beforeEach(() => {
        cy.loginCEO()
        cy.desdobramentoFuncional()
    });

    it('Confirmação de componentes CEO', () => {
        cy.confirmExistenciaComponentesCEO()
        cy.validHierarquiaComponentesCEO()
    });
});

describe.only('Confirmação de Hierarquia Diretor de TI', () => {
    beforeEach(() => {
        cy.loginDiretordeTI()
        cy.desdobramentoFuncional()
    });

    it('Confirmação de componentes Diretor de TI', () => {
        cy.confirmExistenciaComponentesDiretordeTI()
        cy.validHierarquiaComponentesDiretordeTI()
        cy.validacaoLiderancaDiretordeTI()
    });
});