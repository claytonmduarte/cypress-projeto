describe(`Acessos em e-commerce `, () => {
    
    it('Acesso ao site Netshoes', ()=>{
        cy.visit('https://www.netshoes.com.br')
    })

    it('Acesso ao site Kabum', ()=>{
        cy.visit('https://www.kabum.com.br')
    })
   });

describe(`Acesso ao site Magalu pesquisando um item e incluindo no carrinho`, () => {
    it(`===== PASSOS:
        1. Acessar a Home do Portal Magazine Luiza;
        2. No camo de pesquisa informa "hd externo" e clica no botão de pesquisar "Lupa"
        3. Exibir produtos de acordo com a pesquisa;
        4. Validar se o produto foi exibido;
        5. Clicar no item pesquisado;
        6. Clica no botão para "Adicionar à sacola"`, () =>{
        cy.visit('https://www.magazineluiza.com.br/') 
        cy.url().should('contain', 'magazineluiza') 
        cy.wait(1000)
        cy.contains('Procure no magalu').should('be.visible') 
        cy.get('[class="sc-jWaEpP fXqluz"]').should('be.visible').type("hd externo") 
        cy.get('[data-testid="search-submit"]').click() 
        cy.contains("HD Externo 1TB Toshiba Canvio Basics").should('be.visible') 
        cy.get(':nth-child(1) > [data-testid="product-card-container"] > .sc-jSYIrd > [data-testid="image"]').should('be.visible').click()
        cy.wait(1000)
        //cy.get('body > div.wrapper__main > div.wrapper__content.js-wrapper-content > div.wrapper__control > div.wrapper-product__content.wrapper-product__box-prime > div.wrapper-product__informations.js-block-product > button.button__buy.button__buy-product-detail.js-add-cart-button.js-main-add-cart-button.js-add-box-prime > span').click()
        cy.contains('Adicionar à sacola').should('be.visible').click()
    });
});