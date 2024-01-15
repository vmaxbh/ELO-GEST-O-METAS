Cypress.Commands.add('loginCEO', (username = Cypress.env('USERNAME_CEO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginVicePresitente', (username = Cypress.env('USERNAME_VICEPRESIDENTE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorCRA', (username = Cypress.env('USERNAME_DIRETORCRA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdmissãoaoDesligamento', (username = Cypress.env('USERNAME_DIRETORADMISSAOAODESLIGAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdjdeServicosFinanceiros', (username = Cypress.env('USERNAME_DIRETORADJDESERVICOSFINANCEIROS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdjdeFechamentoAoReporte', (username = Cypress.env('USERNAME_DIRETORADJDEFECHAMENTOAOREPORTE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorJuridico', (username = Cypress.env('USERNAME_DIRETOR_A_JURIDICO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeMarketing', (username = Cypress.env('USERNAME_DIRETOR_A_DEMARKETING'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeTI', (username = Cypress.env('USERNAME_DIRETOR_A_DETI'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorEAD', (username = Cypress.env('USERNAME_DIRETOREAD'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeOperacoesAcademicas', (username = Cypress.env('USERNAME_DIRETORDEOPERACOESACADEMICAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeProgramasEstudantis', (username = Cypress.env('USERNAME_DIRETORDEPROGRAMASESTUDANTIS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeRegulacao', (username = Cypress.env('USERNAME_DIRETORDEREGULACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretorAdjdeRegulacaoPesquisaeExtensao', (username = Cypress.env('USERNAME_DIRETORADJDEREGULACAOPESQUISAEEXTENSAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCFO', (username = Cypress.env('USERNAME_CFO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretoraAdministrativa', (username = Cypress.env('USERNAME_DIRETORAADMINISTRATIVA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretordeRecursosHumanos', (username = Cypress.env('USERNAME_DIRETOR_A_DERECURSOSHUMANOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeProcessamento', (username = Cypress.env('USERNAME_GERENTEDEPROCESSAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeAtendimento', (username = Cypress.env('USERNAME_GERENTEDEATENDIMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteA', (username = Cypress.env('USERNAME_GERENTEA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteB', (username = Cypress.env('USERNAME_GERENTEB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeRecursosFinanceiros', (username = Cypress.env('USERNAME_GERENTEDERECURSOSFINANCEIROS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('GerentedeTesouraria', (username = Cypress.env('USERNAME_GERENTEDETESOURARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeFaturamentoAoRecebimento', (username = Cypress.env('USERNAME_GERENTEDEFATURAMENTOAORECEBIMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeNegociacaoFinanceira', (username = Cypress.env('USERNAME_GERENTEDENEGOCIACAOFINANCEIRA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteAdministrativoCorporativo', (username = Cypress.env('USERNAME_GERENTEADMINISTRATIVOCORPORATIVO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeManutencao', (username = Cypress.env('USERNAME_GERENTEDEMANUTENCAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteJuridicoA', (username = Cypress.env('USERNAME_GERENTEJURIDICOA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteJuridicoB', (username = Cypress.env('USERNAME_GERENTEJURIDICOB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeRecursosHumanosA', (username = Cypress.env('USERNAME_GERENTEDERECURSOSHUMANOSA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeRecursosHumanosB', (username = Cypress.env('USERNAME_GERENTEDERECURSOSHUMANOSB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteComercial', (username = Cypress.env('USERNAME_GERENTECOMERCIAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeTelevendas', (username = Cypress.env('USERNAME_GERENTEDETELEVENDAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeMarketing', (username = Cypress.env('USERNAME_GERENTEDEMARKETING'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeIntegracao', (username = Cypress.env('USERNAME_GERENTEDEINTEGRACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteAdjuntodeIntegracao', (username = Cypress.env('USERNAME_GERENTEADJUNTODEINTEGRACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeNegocios', (username = Cypress.env('USERNAME_GERENTEDENEGOCIOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteAdjdeNegocios', (username = Cypress.env('USERNAME_GERENTEADJDENEGOCIOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeServicos', (username = Cypress.env('USERNAME_GERENTEDESERVICOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteCX', (username = Cypress.env('USERNAME_GERENTECX'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerenteEAD', (username = Cypress.env('USERNAME_GERENTEEAD'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeDesignInstrucional', (username = Cypress.env('USERNAME_GERENTEDEDESIGNINSTRUCIONAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeOperacoes', (username = Cypress.env('USERNAME_GERENTEDEOPERACOES'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMatricula', (username = Cypress.env('USERNAME_COORDENADORDEMATRICULA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadoradeProcessamento', (username = Cypress.env('USERNAME_COORDENADORADEPROCESSAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorAdmissaodePessoal', (username = Cypress.env('USERNAME_COORDENADORADMISSAODEPESSOAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadoradeCompras', (username = Cypress.env('USERNAME_COORDENADORADECOMPRAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeContasaPagar', (username = Cypress.env('USERNAME_COORDENADOR_A_DECONTASAPAGAR'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorBacOfficeTesouraria', (username = Cypress.env('USERNAME_COORDENADOR_A_BACKOFFICETESOURARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorFiscal', (username = Cypress.env('USERNAME_COORDENADOR_A_FISCAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorContabilA', (username = Cypress.env('USERNAME_COORDENADOR_A_CONTABILA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorContabilB', (username = Cypress.env('USERNAME_COORDENADOR_A_CONTABILB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeControladoria', (username = Cypress.env('USERNAME_COORDENADOR_A_DECONTROLADORIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeFaturamento', (username = Cypress.env('USERNAME_COORDENADOR_A_DEFATURAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeContasaReceber', (username = Cypress.env('USERNAME_COORDENADOR_A_DECONTASARECEBER'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeControledeCredito', (username = Cypress.env('USERNAME_COORDENADOR_A_DECONTROLEDECREDITO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordePAS', (username = Cypress.env('USERNAME_COORDENADOR_A_DEPAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorJuridico', (username = Cypress.env('USERNAME_COORDENADOR_A_JURIDICO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorRemuneracaoeBeneficios', (username = Cypress.env('USERNAME_COORDENADOR_A_REMUNERACAOEBENEFICIOS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeViagens', (username = Cypress.env('USERNAME_COORDENADOR_A_DEVIAGENS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadorPlanejVendas', (username = Cypress.env('USERNAME_COORDENADOR_A_PLANEJVENDAS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingA', (username = Cypress.env('USERNAME_COORDENADOR_A_DEMARKETINGA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingB', (username = Cypress.env('USERNAME_COORDENADOR_A_DEMARKETINGB'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingC', (username = Cypress.env('USERNAME_COORDENADOR_A_DEMARKETINGC'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeMarketingD', (username = Cypress.env('USERNAME_COORDENADOR_A_DE_MARKETINGD'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordeCompliance', (username = Cypress.env('USERNAME_COORDENADOR_A_DECOMPLIANCE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginCoordenadordePerformance', (username = Cypress.env('USERNAME_COORDENADORDEPERFORMANCE'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisoraFolhaeRemuneracao', (username = Cypress.env('USERNAME_SUPERVISORAFOLHAEREMUNERACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorAdmissãoeDesligamento', (username = Cypress.env('USERNAME_SUPERVISORADMISSAOEDESLIGAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordaTesouraria', (username = Cypress.env('USERNAME_SUPERVISOR_A_DATESOURARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeConciliacao', (username = Cypress.env('USERNAME_SUPERVISOR_A_DECONCILIACAO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorFaturamento', (username = Cypress.env('USERNAME_SUPERVISOR_A_FATURAMENTO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeControledeCredito', (username = Cypress.env('USERNAME_SUPERVISOR_A_DECONTROLEDECREDITO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorAcademico', (username = Cypress.env('USERNAME_SUPERVISOR_A_ACADEMICO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorAdministrativoFinanceiro', (username = Cypress.env('USERNAME_SUPERVISOR_A_ADMINISTRATIVOFINANCEIRO'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeSeguranca', (username = Cypress.env('USERNAME_SUPERVISOR_A_DESEGURANCA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisordeViagens', (username = Cypress.env('USERNAME_SUPERVISOR_A_DEVIAGENS'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginSupervisorComercial', (username = Cypress.env('USERNAME_SUPERVISOR_A_COMERCIAL'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginDiretoradaSecretaria', (username = Cypress.env('USERNAME_DIRETORADASECRETARIA'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});

Cypress.Commands.add('loginGerentedeTI', (username = Cypress.env('USERNAME_GERENTEDETI'), password = Cypress.env('PASSWORD')) => {
    cy.visit('/')
    cy.get('.mat-mdc-form-field-infix').type(username)
    cy.contains('Prosseguir').click()
    cy.get('#mat-input-1').type(password, {log: false})
    cy.contains('Entrar').click()
    cy.get('.app-home-layout-mobile > :nth-child(1) > .mat-toolbar > .mat-toolbar-row > .app-title').should('contain', 'Gestão de Indicadores e Iniciativas')
    
});