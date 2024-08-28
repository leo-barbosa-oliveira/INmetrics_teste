describe('Test Cases para el modulo de monitoristas', () => {
      beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visit('https://advantageonlineshopping.com/#/').wait(1500);
        cy.viewport(1280, 720) // Largura de 1280px e altura de 720px
      });
    
      it('Buscar 1° item e adicionar ao carrinho', () => {
        cy.get(':nth-child(4) > .img').click();
        cy.get('#autoComplete').type('headphone')
        cy.get('[href="#/product/15"] > img').click()
        cy.get('.fixedBtn > .roboto-medium').click()
        cy.get('a > .roboto-medium').click()
      });

      it('Buscar 2° item e adicionar ao carrinho', () => {
        cy.get(':nth-child(4) > .img').click();
        cy.get('#autoComplete').type('Mice')
        cy.contains('HP Z4000').click()
        cy.get('.fixedBtn > .roboto-medium').click()
        cy.get('a > .roboto-medium').click()
      });

      it('Adicionar 2 itens ao carrinho e validar que apareçam corretamente na tela de pagamento', () => {
        cy.get(':nth-child(4) > .img').click();
        cy.get('#autoComplete').type('headphone')
        cy.get('[href="#/product/15"] > img').click()
        cy.get('.fixedBtn > .roboto-medium').click()
        cy.get('a > .roboto-medium').click()

        cy.get(':nth-child(4) > .img').click();
        cy.get('#autoComplete').type('Mice')
        cy.contains('HP Z4000').click()
        cy.get('.fixedBtn > .roboto-medium').click()
        cy.get('a > .roboto-medium').click()

        cy.get('#menuCart').click()
        cy.contains('HP Z4000').should('be.visible')
        cy.contains('BEATS STUDIO 2').should('be.visible')
      });
    });