/// <reference types="cypress"/>
import dados_formulario from '../factories/dados_formulario';
import CarrinhoPage from '../pages/CarrinhoPage.cy';
import HomePage from '../pages/HomePage.cy';
import ProdutoPage from '../pages/ProdutoPage.cy';
import '../support/index'


describe('Funcionalidade Fluxo de Compra de Produto', () => {
    const homePage = new HomePage
    const produtoPage = new ProdutoPage
    const carrinhoPage = new CarrinhoPage
    
    //Hooks beforeEach - é executado antes de cada teste
    beforeEach(() => {
        cy.visit('https://otel-demo.field-eng.grafana.net/')
        // cy.viewport('max')
    });

     //Hooks beforeEach - é executado antes de cada teste
     afterEach(() => {
        cy.screenshot()
    });

    it('O site deve estar online para acesso', () => {
        cy.title().should('eq', 'OTel demo') 
    });


    it('Deve acessar a página de produtos', () => {
        homePage.accessarProdutos()
        cy.contains('h1', 'Hot Products').should('be.visible') //validando se a descrição da página de produtos está visível
    });

    it('Deve adicionar produtos ao carrinho', () => {
        homePage.accessarProdutos()
        cy.contains('h1', 'Hot Products').should('be.visible') //validando se a descrição da página de produtos está visível

        //Selecionando a moeda para pagamento desejada
        homePage.selecionarMoeda()
        //Selecionando 3 produtos diferentes
        produtoPage.adicionarProdutos()
        
    });

    it.only('Deve preencher o formulário e confirmar o pagamento', () => {
        homePage.accessarProdutos()
        produtoPage.adicionarUmProduto()
        carrinhoPage.preencherFormulario()
        carrinhoPage.confirmarPedido()
        
        //Validando mensagem de sucesso
        cy.contains('h1', 'Your order is complete!').should('be.visible')
    });

    it('Deve alterar a moeda', () => {
        homePage.accessarProdutos()
        produtoPage.adicionarUmProduto()
        carrinhoPage.alterarMoeda()
    });
});