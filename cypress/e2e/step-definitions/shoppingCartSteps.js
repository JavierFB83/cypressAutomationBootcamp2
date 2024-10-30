import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { ShoppingCart} from "../pages/shoppingCartPage"

//Instancias de clase
let shoppingCart = new ShoppingCart();


When("I check that the element inventory item does not exist",() => {
  shoppingCart.checkInventoryItemNotExist()
});

When("I check that the element inventory item exist",() => {
  shoppingCart.checkInventoryItemisVisible()
});





