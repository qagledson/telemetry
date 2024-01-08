import '../factories/dados_formulario'
class CarrinhoPage {
    preencherFormulario() {      
            /*-- Preenchimento do formulário de pagamento --*/
            cy.get('input[name="email"]').clear().type('joaodostestes@example.com')
            cy.get('input[name="streetAddress"]').clear().type('Avenida Santos Dumont')
            cy.get('input[name="zipCode"]').clear().type('60150900')
            cy.get('input[name="city"]').clear().type('Fortaleza')
            cy.get('input[name="state"]').clear().type('CE')
            cy.get('input[name="country"]').clear().type('Brasil')
            cy.get('input[name="creditCardNumber"]').clear().type('4432-8015-6152-0454')
            cy.get('select[id="credit_card_expiration_month"]').select("May");
            cy.get('select[id="credit_card_expiration_year"]').select("2031");
            cy.get('input[name="creditCardCvv"]').clear().type('222')
            
    }

    confirmarPedido(){
        cy.contains('button', "Place Order").click()
    }

    alterarMoeda(){
        //Selecionando a moeda para pagamento desejada
        const moeda = 'EUR'
        cy.get('select[name="currency_code"]').should('be.visible').select(moeda);
    }

}

export default CarrinhoPage;