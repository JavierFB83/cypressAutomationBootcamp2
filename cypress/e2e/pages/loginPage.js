import { CommonPage } from "./commonPage";
export class LoginPage extends CommonPage{

    loginFlow(userName, password) {
        cy.get('[data-test="username"]').should('have.value', '').type(userName).should('have.value', userName);
        cy.get('[data-test="password"]').should('have.value', '').type(password).should('have.value', password);
        cy.get('[data-test="login-button"]').click();
    }
}