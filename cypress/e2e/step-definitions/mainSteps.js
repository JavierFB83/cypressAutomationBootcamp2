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
