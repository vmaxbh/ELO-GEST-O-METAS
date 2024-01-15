Cypress.Commands.add('loginCEO', (username = Cypress.env('USERNAME-CEO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginVicePresitente', (username = Cypress.env('USERNAME-VICEPRESIDENTE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorCRA', (username = Cypress.env('USERNAME-DIRETORCRA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdmissãoaoDesligamento', (username = Cypress.env('USERNAME-DIRETORADMISSAOAODESLIGAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdjdeServicosFinanceiros', (username = Cypress.env('USERNAME-DIRETORADJDESERVICOSFINANCEIROS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdjdeFechamentoAoReporte', (username = Cypress.env('USERNAME-DIRETORADJDEFECHAMENTOAOREPORTE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorJuridico', (username = Cypress.env('USERNAME-DIRETOR-A-JURIDICO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeMarketing', (username = Cypress.env('USERNAME-DIRETOR-A-DEMARKETING'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeTI', (username = Cypress.env('USERNAME-DIRETOR-A-DETI'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorEAD', (username = Cypress.env('USERNAME-DIRETOREAD'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeOperacoesAcademicas', (username = Cypress.env('USERNAME-DIRETORDEOPERACOESACADEMICAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeProgramasEstudantis', (username = Cypress.env('USERNAME-DIRETORDEPROGRAMASESTUDANTIS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeRegulacao', (username = Cypress.env('USERNAME-DIRETORDEREGULACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdjdeRegulacaoPesquisaeExtensao', (username = Cypress.env('USERNAME-DIRETORADJDEREGULACAOPESQUISAEEXTENSAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCFO', (username = Cypress.env('USERNAME-CFO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretoraAdministrativa', (username = Cypress.env('USERNAME-DIRETORAADMINISTRATIVA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeRecursosHumanos', (username = Cypress.env('USERNAME-DIRETOR-A-DERECURSOSHUMANOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeProcessamento', (username = Cypress.env('USERNAME-GERENTEDEPROCESSAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeAtendimento', (username = Cypress.env('USERNAME-GERENTEDEATENDIMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteA', (username = Cypress.env('USERNAME-GERENTEA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteB', (username = Cypress.env('USERNAME-GERENTEB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeRecursosFinanceiros', (username = Cypress.env('USERNAME-GERENTEDERECURSOSFINANCEIROS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('GerentedeTesouraria', (username = Cypress.env('USERNAME-GERENTEDETESOURARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeFaturamentoAoRecebimento', (username = Cypress.env('USERNAME-GERENTEDEFATURAMENTOAORECEBIMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeNegociacaoFinanceira', (username = Cypress.env('USERNAME-GERENTEDENEGOCIACAOFINANCEIRA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteAdministrativoCorporativo', (username = Cypress.env('USERNAME-GERENTEADMINISTRATIVOCORPORATIVO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeManutencao', (username = Cypress.env('USERNAME-GERENTEDEMANUTENCAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteJuridicoA', (username = Cypress.env('USERNAME-GERENTEJURIDICOA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteJuridicoB', (username = Cypress.env('USERNAME-GERENTEJURIDICOB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeRecursosHumanosA', (username = Cypress.env('USERNAME-GERENTEDERECURSOSHUMANOSA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeRecursosHumanosB', (username = Cypress.env('USERNAME-GERENTEDERECURSOSHUMANOSB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteComercial', (username = Cypress.env('USERNAME-GERENTECOMERCIAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeTelevendas', (username = Cypress.env('USERNAME-GERENTEDETELEVENDAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeMarketing', (username = Cypress.env('USERNAME-GERENTEDEMARKETING'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeIntegracao', (username = Cypress.env('USERNAME-GERENTEDEINTEGRACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteAdjuntodeIntegracao', (username = Cypress.env('USERNAME-GERENTEADJUNTODEINTEGRACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeNegocios', (username = Cypress.env('USERNAME-GERENTEDENEGOCIOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteAdjdeNegocios', (username = Cypress.env('USERNAME-GERENTEADJDENEGOCIOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeServicos', (username = Cypress.env('USERNAME-GERENTEDESERVIÇOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteCX', (username = Cypress.env('USERNAME-GERENTECX'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteEAD', (username = Cypress.env('USERNAME-GERENTEEAD'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeDesignInstrucional', (username = Cypress.env('USERNAME-GERENTEDEDESIGNINSTRUCIONAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeOperacoes', (username = Cypress.env('USERNAME-GERENTEDEOPERACOES'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMatricula', (username = Cypress.env('USERNAME-COORDENADORDEMATRICULA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadoradeProcessamento', (username = Cypress.env('USERNAME-COORDENADORADEPROCESSAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorAdmissaodePessoal', (username = Cypress.env('USERNAME-COORDENADORADMISSAODEPESSOAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadoradeCompras', (username = Cypress.env('USERNAME-COORDENADORADECOMPRAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeContasaPagar', (username = Cypress.env('USERNAME-COORDENADOR-A-DECONTASAPAGAR'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorBacOfficeTesouraria', (username = Cypress.env('USERNAME-COORDENADOR-A-BACKOFFICETESOURARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorFiscal', (username = Cypress.env('USERNAME-COORDENADOR-A-FISCAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorContabilA', (username = Cypress.env('USERNAME-COORDENADOR-A-CONTABILA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorContabilB', (username = Cypress.env('USERNAME-COORDENADOR-A-CONTABILB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeControladoria', (username = Cypress.env('USERNAME-COORDENADOR-A-DECONTROLADORIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeFaturamento', (username = Cypress.env('USERNAME-COORDENADOR-A-DEFATURAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeContasaReceber', (username = Cypress.env('USERNAME-COORDENADOR-A-DECONTASARECEBER'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeControledeCredito', (username = Cypress.env('USERNAME-COORDENADOR-A-DECONTROLEDECREDITO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordePAS', (username = Cypress.env('USERNAME-COORDENADOR-A-DEP.A.S'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorJuridico', (username = Cypress.env('USERNAME-COORDENADOR-A-JURIDICO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorRemuneracaoeBeneficios', (username = Cypress.env('USERNAME-COORDENADOR-A-REMUNERACAOEBENEFICIOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeViagens', (username = Cypress.env('USERNAME-COORDENADOR-A-DEVIAGENS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorPlanejVendas', (username = Cypress.env('USERNAME-COORDENADOR-A-PLANEJVENDAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingA', (username = Cypress.env('USERNAME-COORDENADOR-A-DEMARKETINGA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingB', (username = Cypress.env('USERNAME-COORDENADOR-A-DEMARKETINGB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingC', (username = Cypress.env('USERNAME-COORDENADOR-A-DEMARKETINGC'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingD', (username = Cypress.env('USERNAME-COORDENADOR-A-DEMARKETINGD'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeCompliance', (username = Cypress.env('USERNAME-COORDENADOR-A-DECOMPLIANCE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordePerformance', (username = Cypress.env('USERNAME-COORDENADORDEPERFORMANCE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisoraFolhaeRemuneracao', (username = Cypress.env('USERNAME-SUPERVISORAFOLHAEREMUNERACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorAdmissãoeDesligamento', (username = Cypress.env('USERNAME-SUPERVISORADMISSÃOEDESLIGAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordaTesouraria', (username = Cypress.env('USERNAME-SUPERVISOR-A-DATESOURARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeConciliacao', (username = Cypress.env('USERNAME-SUPERVISOR-A-DECONCILIACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorFaturamento', (username = Cypress.env('USERNAME-SUPERVISOR-A-FATURAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeControledeCredito', (username = Cypress.env('USERNAME-SUPERVISOR-A-DECONTROLEDECREDITO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorAcademico', (username = Cypress.env('USERNAME-SUPERVISOR-A-ACADEMICO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorAdministrativoFinanceiro', (username = Cypress.env('USERNAME-SUPERVISOR-A-ADMINISTRATIVOFINANCEIRO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeSeguranca', (username = Cypress.env('USERNAME-SUPERVISOR-A-DESEGURANCA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeViagens', (username = Cypress.env('USERNAME-SUPERVISOR-A-DEVIAGENS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorComercial', (username = Cypress.env('USERNAME-SUPERVISOR-A-COMERCIAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretoradaSecretaria', (username = Cypress.env('USERNAME-DIRETORADASECRETARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeTI', (username = Cypress.env('USERNAME-GERENTEDETI'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});