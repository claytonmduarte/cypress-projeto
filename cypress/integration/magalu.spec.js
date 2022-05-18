describe(`Acesso ao site Magalu pesquisando um item e incluindo no carrinho`, () => {
    it('Teste Carrinho', () =>{
        cy.viewport(1200, 850)
        cy.visit('https://www.magazineluiza.com.br/') 
        cy.get('[data-testid="button-message-box"]').click()
        cy.url().should('contain', 'magazineluiza') 
        cy.contains('Procure no magalu').should('be.visible') 
        cy.get('[class="sc-jWaEpP fXqluz"]').should('be.visible').type("hd externo") 
        cy.get('[data-testid="search-submit"]').click() 
        cy.contains("HD Externo 1TB ADATA AHV620S-1TU31-CBK").should('be.visible') 
        cy.contains("HD Externo 1TB ADATA AHV620S-1TU31-CBK").should('be.visible').click()
        cy.contains('Adicionar à sacola').should('be.visible').click()
        cy.get('.price-warranty__btn--continue').click()
        cy.contains("HD Externo 1TB ADATA AHV620S-1TU31-CBK - USB 3.1 ").should('be.visible') 
        
    });
});