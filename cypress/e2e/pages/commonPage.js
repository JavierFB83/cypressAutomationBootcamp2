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

    //Se puede usar para comprobar si cualquier elemento con data-test existe, es visible o no.
    checkStatusOnElementByDataTest(elementDataTest, status) {
        cy.get(`[data-test="${elementDataTest}"]`).should(status);
    }

    // Este step nos sirve para comprobar si un elemento contiene o no contiene una string
    checkElementContent(elementDataTest, statusContent, content) {
        cy.get(`[data-test="${elementDataTest}"]`).should(statusContent, content);
      }
}