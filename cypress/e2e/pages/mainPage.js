export class MainPage{

  checkCartIconBadgeNotExist() {
    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
  }

  addFirstProductToCart() {
    cy.get('[data-test="inventory-list"]').children().first().contains('button', 'Add to cart').click();
  }

  checkCartIconBadgeContainNumber(number) {
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('contain', number);
  }
}