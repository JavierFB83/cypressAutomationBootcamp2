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







