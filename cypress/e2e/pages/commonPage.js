export class CommonPage{

    visitLink(url) {
      cy.visit(url, {failOnStatusCode: false});
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

    checkBodyText(status, text) {
        cy.get('body').should(status, text);
    }
  
    clickButtonIfExist(button) {
    let buttonByDataTest = `[data-test="${button}"]`
        cy.get('body').then((body) => {
            if (body.find("buttonByDataTest")) {
        cy.get(buttonByDataTest).click();
        }
    });
    } 
  
      /*
  Aqui he dejado 2 funciones sin parametrizar (checkUrlValue y checkUrlNotValue)
  que comprueban si una url contiene un texto o no, esto se podría parametrizar
  pero así tambien estaría bien
  */
    checkUrlValue(urlValue) {
        cy.url().should('include', urlValue);
    }

    checkUrlNotValue(urlValue) {
        cy.url().should('not.include', urlValue);
    }

    checkUrlValueStatus(status, urlValue) {
        cy.url().should(status, urlValue)
    }

    checkElementStateByDataTest (elementName, status) {
        cy.get(`[data-test="${elementName}"]`).should(status);
    }

    checkContentByClass (className, content) {
        cy.get(className).should('contain', content);
    }

    checkElementValueByDataTest (elementName, value) {
        cy.get(`[data-test="${elementName}"]`).should('have.value', value);
    }  



    clickButtonByName (buttonName) {
        cy.contains('button', buttonName).click();
    }

    clickButtonByNameWithTimeout (buttonName, timeoutParameter) {
        cy.contains('button', buttonName, {timeout:timeoutParameter}).click();
    }

    waitXSeconds (seconds) {
        cy.wait(seconds);
    }

    /// Función para testear accesibilidad
    testAccesibilityInScreen () {
        cy.injectAxe();
        cy.checkA11y();
    }

    testAccesibilityOnElement (elementLocator) {
        cy.injectAxe();
        cy.checkA11y(elementLocator)
    }


    interceptApiCallCookiesHbo () {
        cy.intercept('**/ot_guard_logo.svg').as('hboCookies');
    }

    interceptApiCallAddAlias (apiCall, alias) {
        cy.intercept(apiCall).as(alias);
    }
  
    waitApiCallByAlias(time, aliasApiCall) {
    cy.wait('@'+ aliasApiCall, {timeout: time});
    }


    clickButtonByNameWaitCookies (buttonName, apiCall) {
        cy.intercept(apiCall).as('cookiesLoad');
        cy.wait('@cookiesLoad', {timeout: 4000});
        cy.contains(buttonName).click();
    }
}