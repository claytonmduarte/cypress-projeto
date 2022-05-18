describe(`Acessos em e-commerce `, () => {
    
    it('Acesso ao site netshoes', ()=>{
        cy.visit('https://www.netshoes.com.br')
    })

    it('Acesso ao site Kabum', ()=>{
        cy.visit('https://www.kabum.com.br')
    })
});