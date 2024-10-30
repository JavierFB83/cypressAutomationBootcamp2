export class ShoppingCart{

  checkInventoryItemNotExist() {
    cy.get('[data-test="inventory-item"]').should('not.exist')
  }

  checkInventoryItemisVisible() {
    cy.get('[data-test="inventory-item"]').should('be.visible')
  }
}