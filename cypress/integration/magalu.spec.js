describe(`Acesso ao site Magalu pesquisando um item e incluindo no carrinho`, () => {
    it('Teste Carrinho', () =>{
        cy.viewport(1200, 850)
        cy.visit('https://www.magazineluiza.com.br/') 
        cy.wait(2000)
        cy.get('[data-testid="button-message-box"]').click()
        cy.wait(2000)
        cy.url().should('contain', 'magazineluiza') 
        cy.contains('Procure no magalu').should('be.visible') 
        cy.get('[class="sc-jWaEpP fXqluz"]').should('be.visible').type("hd externo") 
        cy.wait(2000)
        cy.get('[data-testid="search-submit"]').click() 
        cy.wait(2000)
        cy.contains("HD Externo 1TB ADATA AHV620S-1TU31-CBK").should('be.visible') 
        cy.wait(2000)
        cy.contains("HD Externo 1TB ADATA AHV620S-1TU31-CBK").should('be.visible').click()
        cy.wait(2000)
        cy.contains('Adicionar à sacola').should('be.visible').click()
        cy.wait(2000)
    });
});