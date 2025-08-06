describe('Consultar e acesso a Pacto solucoes', () => {
  it('Acessar navegador', () => {
    cy.visit('https://br.search.yahoo.com/?fr2=p:fprd,mkt:br')
  })

  it('Pesquisar por Pacto Soluções',() => {
    cy.get('#yschsp').type('Pacto Soluções')
  
  })
  it('Executar busca',() => {
    cy.get('#yschsp').type('{enter}');
  })
  it('Validar link apresentado',() => {
    cy.get('#web > .reg > :nth-child(1) > .dd > .compTitle > .title > .fz-20')
    .should('have.attr', 'href')
    .and('include', 'sistemapacto.com.br');

  })
  
})