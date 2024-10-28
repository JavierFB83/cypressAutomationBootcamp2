export class CommonPage{

    visitLink(url) {
      cy.visit(url);
    }

    // Sin parametrizar
    checkUrlContent(url) {
      cy.url().should('include', url);
    }

    checkUrlNotContent(url) {
        cy.url().should('not.include', url);
    }

    // Parametrizada tanto en el contenido como en el status de ese contenido 
    checkUrl(includeProperty, endpoint) {
        cy.url().should(includeProperty, endpoint);
    }

    typeOnInputByDataTest(inputDataTest, inputValue) {
        cy.get(`[data-test="${inputDataTest}"]`).clear().type(inputValue);
    }

    checkValueOnInputByDataTest(inputDataTest, inputValue) {
        cy.get(`[data-test="${inputDataTest}"]`).should('have.value', inputValue);
    }

    clickButtonByDataTest(buttonName) {
    cy.get(`[data-test="${buttonName}"]`).should('be.visible').click();
    }
}