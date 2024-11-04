import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage} from "../pages/mainPage"

//Instancias de clase
let mainPage = new MainPage();


When("I check that the shopping cart icon badge does not exist",() => {
  mainPage.checkCartIconBadgeNotExist()
});

When("I add to the cart the first product in the list",() => {
  mainPage.addFirstProductToCart()
});

When("I check that the shopping cart icon contains the number {int}",(number) => {
  mainPage.checkCartIconBadgeContainNumber(number)
});

Given("I click on the shopping cart button", () => {
  mainPage.clickOnShoppigCart();
});

Given("I click on the title name for the product named {string}", (productName) => {
  mainPage.clickOnProductName(productName);
});

Given("I click on the image for the product named {string}", (productName) => {
  mainPage.clickOnProductImage(productName);
});

Given("I click on the add to cart button for the product named {string}", (productName) => {
  mainPage.clickOnAddToCart(productName);
});

Given("I check that the price for the product {string} is {string}", (productName, productPrice) => {
  mainPage.checkPrice(productName, productPrice);
});

Given("I verify footers text", () => {
  mainPage.checkFooter();
});

Given("I check linkedin url", () => {
  mainPage.checkLinkedin();
});

Given("I check facebook url", () => {
  mainPage.checkFacebook();
});

Given("I check twitter url", () => {
  mainPage.checkTwitter();
});


Given("I check that the active sorts option is {string}", (activeSortingOption) => {
  mainPage.checkActiveSortingOption(activeSortingOption);
});

Given("I check that the first product of the list contain {string}", (productContent) => {
  mainPage.checkFirstProductContent(productContent);
});

Given("I check that the last product of the list contain {string}", (productContent) => {
  mainPage.checkLastProductContent(productContent);
});

Given("I select the option {string} from the sorting dropdown", (productContent) => {
  mainPage.selectSortingOption(productContent);
});
