describe(`Pesquise de produto e inclusão do carrinho de compras`, () => {
    it(`
    ===== PASSOS:
    1. Acessar a Home do Portal Magazine Luiza;
    2. Realizar a pesquisa pelo item "Micro-ondas Consul 32L Espelhado";
    3. Clicar no botão "Lupa" para iniciar a pesquisa pelo item;
    4. Exibir produtos de acordo com a pesquisa;
    5. Validar se o produto foi exibido;
    6. Clicar no item pesquisado.

    `, () => {
    cy.visit('https://www.magazineluiza.com.br/') 
    cy.url().should('contain', 'magazineluiza') 
    cy.wait(1000)
    cy.contains('Procure no magalu').should('be.visible') 
    cy.wait(1000)
    cy.get('[class="sc-jWaEpP fXqluz"]').should('be.visible').type("hd externo") 
    cy.wait(1000)
    cy.get('[data-testid="search-submit"]').click() 
    cy.wait(1000)
    cy.contains("HD Externo 1TB Toshiba Canvio Basics").should('be.visible') 
    cy.wait(5000)
    cy.get(':nth-child(1) > [data-testid="product-card-container"] > .sc-jSYIrd > [data-testid="image"]').should('be.visible').click()
    cy.wait(5000)
    //cy.get('.wrapper-product__informations > .button__buy').click().should('contain.text', 'Adicionar')
 
        

    });
    });