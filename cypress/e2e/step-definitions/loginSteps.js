import 'cypress-mochawesome-reporter/cucumberSupport';
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

Given("I type standard_user on the Username credential input", () => {
    loginPage.typeStandardUser();
  });
  
  When("I type Locked_Out_User on the Username credential input", () => {
    loginPage.typeLockedOutUser();
  });
  
  Then("I type secret_sauce on the password credential input", () => {
    loginPage.typeSecretSaucePassword();
  });
  
  Then("I type {string} on the Username credential input", (userName) => {
    loginPage.typeUserName(userName);
  });
  
  Then("I type {string} on the password credential input", (password) => {
    loginPage.typePassword(password);
  });
  
  Then("I type on the credential input {string} the text value {string}", (input, text) => {
    loginPage.typeOnInputByDataTest(input, text);
  });
  
  Then("I click on the login button", () => {
    loginPage.clickLoginButton();
  });
  
  Given ("I check the status for the login logo is {string}", (status) => {
    loginPage.checkLoginLogo(status);
  });
  
  Given ("I login with valid credentials for the standar_user", () => {
    loginPage.loginWithValidCredentials();
  });
  
  Given ("I login better with valid credentials for the standar_user", () => {
    loginPage.betterLoginWithValidCredentials();
  });
  
  Given ("I login and keep the sesion for the standar_user", () => {
    loginPage.loginKeepSession();
  });
  
  Given ("I navigate to the main page", () => {
    loginPage.navigateToMain();
  });
  
  
  
  
  
  
  