import 'cypress-mochawesome-reporter/cucumberSupport';
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CommonPage} from "../pages/commonPage"

//Instancias de clase
let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
    commonPage.visitLink(url);
});

Given("I check that the url contains {string}", (url) => {
    commonPage.checkUrlContent(url);
});

Given("I check that the url does not contain {string}", (url) => {
    commonPage.checkUrlNotContent(url);
});

When("I check that the url {string} the endpoint {string}",(includeProperty, endpoint) => {
    commonPage.checkUrl(includeProperty, endpoint);
});

When("I type in the input {string} the value {string}",(inputDataTest, inputValue) => {
    commonPage.typeOnInputByDataTest(inputDataTest, inputValue);
});

When("I click on the button {string}",(buttonName) => {
    commonPage.clickButtonByDataTest(buttonName)
});

When("I check that the value in the input {string} should be {string}",(inputDataTest, inputValue) => {
    commonPage.checkValueOnInputByDataTest(inputDataTest, inputValue)
});

When("I check that the element {string} should {string}",(elementDataTest, status) => {
    commonPage.checkStatusOnElementByDataTest(elementDataTest, status)
});

When("I check that the element {string} should {string} the content {string}",(elementDataTest, statusContent, content) => {
    commonPage.checkElementContent(elementDataTest, statusContent, content)
});

// New steps

When("I check that the page should {string} the text {string}", (status, text) => {
    commonPage.checkBodyText(status, text);
    // Status accept the values: contain , not.contain
  })
  
  Given("I check that the url value contain the text {string}", (urlValue) => {
    commonPage.checkUrlValue(urlValue);
  })
  
  Then("I check that the url value not contain the text {string}", (urlValue) => {
    commonPage.checkUrlNotValue(urlValue);
  })
  
  When("I check that the url value {string} is {string}", (urlValue, status) => {
    commonPage.checkUrlValueStatus(status, urlValue)
    // status value must be : include or not include
  })
  
  When("I check that the status is {string} with the  url value {string}", (status, urlValue) => {
    commonPage.checkUrlValueStatus(status, urlValue)
    // status value must be : include or not include
  })
  
  Given("I check that the element with data test {string} should have the status {string}", (elementDataTest, status) => {
    commonPage.checkElementStateByDataTest(elementDataTest, status);
  })
  
  When("I check that the element with class {string} should have the content {string}", (className, content) => {
    commonPage.checkContentByClass(className, content);
  })
  
  Given("I check that the element with data test {string} should have the value {string}", (elementDataTest, value) => {
    commonPage.checkElementValueByDataTest(elementDataTest, value);
  })
  
  Given ("I visit my url", () => {
    commonPage.visitBaseUrl()
  })
  
  Given ("I visit the saucedemo web page", () => {
    commonPage.visitSauceDemo()
  })
  
  Given ("If the button {string} exist i click on it", (button) => {
  commonPage.clickButtonIfExist(button)
  })
  
  Then ('I click on the button named {string} and wait for api call {string}', (buttonName, apiCall) => {
    commonPage.clickButtonByNameWaitCookies(buttonName, apiCall)
  })
  
  Then ('I click on the button named {string}', (buttonName) => {
    commonPage.clickButtonByName(buttonName)
  })
  
  Then ('I click on the button named {string} with a timeout of {int} miliseconds', (buttonName, timeoutParameter) => {
    commonPage.clickButtonByNameWithTimeout(buttonName, timeoutParameter)
  })
  
  Then ('I wait {int} miliseconds', (seconds) => {
    commonPage.waitXSeconds(seconds)
  })

  Then ('I intercept the api call {string} with the alias {string}', (apiCall, aliasApiCall) => {
    commonPage.interceptApiCallAddAlias(apiCall, aliasApiCall)
  })
  
  Then ('I wait maximum of {int} miliseconds for the api call with the alias {string}', (time, aliasApiCall) => {
    commonPage.waitApiCallByAlias(time, aliasApiCall)
  })
  
  // Steps para test de accesibilidad
  Then ('I test the accesibility in all the screen', () => {
    commonPage.testAccesibilityInScreen()
  })
  
  Then ('I test the accesibility on the element with locator {string}', (elementLocator) => {
    commonPage.testAccesibilityOnElement(elementLocator)
  })
  
  
  





