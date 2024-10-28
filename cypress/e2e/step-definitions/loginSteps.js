import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { LoginPage} from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

When("I login with the username {string} and password {string}",(userName, password) => {
    loginPage.loginFlow(userName, password)
});

When("I login with valid credentials",() => {
    loginPage.checkUrl('not.include', 'inventory');
    loginPage.checkValueOnInputByDataTest("username", "");
    loginPage.typeOnInputByDataTest("username", "standard_user");
    loginPage.checkValueOnInputByDataTest("username", "standard_user");
    loginPage.checkValueOnInputByDataTest("password", "");
    loginPage.typeOnInputByDataTest("password", "secret_sauce");
    loginPage.checkValueOnInputByDataTest("password", "secret_sauce");
    loginPage.clickButtonByDataTest('login-button');
    loginPage.checkUrl('include', 'inventory');
    /* Aunque todas estas funciones pertenecen a commonPage, como esa clase se está extendiendo en "loginPage"
      podemos acceder a estas funciones desde aquí, se podrian llamar tanto usando loginPage. como commonPage. */
});