import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { LoginPage} from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

When("I login with the username {string} and password {string}",(userName, password) => {
    loginPage.loginFlow(userName, password)
});

When("I login with valid credentials",() => {
    loginPage.checkValueOnInputByDataTest("username", "");
    loginPage.typeOnInputByDataTest("username", "standard_user");
    loginPage.checkValueOnInputByDataTest("username", "standard_user");
    loginPage.checkValueOnInputByDataTest("password", "");
    loginPage.typeOnInputByDataTest("password", "secret_sauce");
    loginPage.checkValueOnInputByDataTest("password", "secret_sauce");
    loginPage.clickButtonByDataTest('login-button');
});