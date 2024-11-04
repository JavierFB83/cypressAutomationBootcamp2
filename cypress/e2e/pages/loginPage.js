import { CommonPage } from "./commonPage";

export class LoginPage extends CommonPage{
// Al extender CommonPage todas las funciones existentes allí sin accesibles tanto desde loginPage como desde loginSteps

loginFlow(userName, password) {
    cy.get('[data-test="username"]').should('have.value', '').type(userName).should('have.value', userName);
    cy.get('[data-test="password"]').should('have.value', '').type(password).should('have.value', password);
    cy.get('[data-test="login-button"]').click();
}

// Function non parameterized
  typeStandardUser() {
    cy.get('[data-test="username"]').should('be.empty').type('standard_user').should('have.value', 'standard_user');
  }

  typeLockedOutUser() {
    cy.get('[data-test="username"]').should('be.empty').type('locked_out_user').should('have.value', 'locked_out_user');
  }

  typePerformanceGlitchUser() {
    cy.get('[data-test="username"]').should('be.empty').type('performance_glitch_user').should('have.value', 'performance_glitch_user');
  }

  typeErrorUser() {
    cy.get('[data-test="username"]').should('be.empty').type('error_user').should('have.value', 'error_user');
  }


  typeSecretSaucePassword () {
    cy.get('[data-test="password"]').should('be.empty').type('secret_sauce').should('have.value', 'secret_sauce');
  }

  //-----------------------------------------------------------------------//

  // Functions parameterized
  typeUserName (userName) {
    cy.get('[data-test="username"]', {timeout:8000}).should('be.empty').type(userName).should('have.value', userName);
  }

  typePassword (password) {
    cy.get('[data-test="password"]').should('be.empty').type(password).should('have.value', password);
  }

  typeOnInputByDataTest (dataTest, Text) {
    cy.get('[data-test='+dataTest+']').should('be.empty').type(Text).should('have.value', Text)
  }

  clickLoginButton () {
    cy.get('[data-test="login-button"]').click();
  }

  checkLoginLogo (status) {
    cy.get('.login_logo').should(status);
  }

  loginWithValidCredentials(){
    this.typeStandardUser();
    this.typeSecretSaucePassword();
    this.clickLoginButton();
  }

  betterLoginWithValidCredentials(){
    this.typeOnInputByDataTest('username', 'standard_user');
    this.typeOnInputByDataTest('password', 'secret_sauce');
    this.clickLoginButton();
  }

  loginKeepSession() {
    cy.session('loginSession', () => {
      cy.visit("https://www.saucedemo.com/");; // Visita la URL de inicio de sesión
      this.typeOnInputByDataTest('username', 'standard_user');
      this.typeOnInputByDataTest('password', 'secret_sauce');
      this.clickLoginButton();
      cy.url().should('eq', 'https://www.saucedemo.com/inventory.html'); // Verifica que se redirige a la página correcta
    });
    cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
    cy.url().should('include', '/inventory.html');
  }
  
  navigateToMain() {
    cy.visit('https://www.saucedemo.com/inventory.html', { failOnStatusCode: false });
    cy.url().should('include', '/inventory.html');
  }
}