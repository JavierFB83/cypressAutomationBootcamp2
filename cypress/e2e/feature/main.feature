Feature: Main test suite

    Background: Login
    Given I visit "https://www.saucedemo.com/"
    And I check that the url "not.include" the endpoint "inventory"
    When I login with valid credentials
    Then I check that the url "include" the endpoint "inventory"

    Scenario: Add a product to the cart from main page
    Given I check that the shopping cart icon badge does not exist
    And I click on the button "shopping-cart-link"
    And I check that the url "include" the endpoint "cart"
    And I check that the element inventory item does not exist
    And I click on the button "continue-shopping"
    And I check that the url "include" the endpoint "inventory"
    When I add to the cart the first product in the list
    And I check that the shopping cart icon contains the number 1
    And I click on the button "shopping-cart-link"
    And I check that the url "include" the endpoint "cart"
    Then I check that the element inventory item exist

#Escenario anterior pero usando mejores prácticas "pasos parametrizados"
    Scenario: Better practice Add a product to the cart from main page
    Given I check that the element "shopping-cart-badge" should "not.exist"
    And I click on the button "shopping-cart-link"
    And I check that the url "include" the endpoint "cart"
    And I check that the element "inventory-item" should "not.exist"
    And I click on the button "continue-shopping"
    And I check that the url "include" the endpoint "inventory"
    When I add to the cart the first product in the list
    And I check that the element "shopping-cart-badge" should "be.visible"
    And I check that the element "shopping-cart-badge" should "contain" the content "1"
    And I click on the button "shopping-cart-link"
    And I check that the url "include" the endpoint "cart"
    Then I check that the element "inventory-item" should "be.visible"

 Scenario: Verify Main page content
      Given I check that the element with data test "shopping-cart-link" should have the status "be.visible"
      When I check that the element with data test "inventory-list" should have the status "be.visible"
      And I check that the element with data test "product-sort-container" should have the status "be.visible"
      And I verify footers text
      And I check linkedin url
      And I check facebook url
      Then I check twitter url

Scenario: Verify sorting by price
    Given I check that the price for the product "Sauce Labs Onesie" is "7.99"
    And I check that the price for the product "Sauce Labs Fleece Jacket" is "49.99"
    And I check that the active sorts option is "Name (A to Z)"
    And I check that the first product of the list contain "Sauce Labs Backpack"
    And I check that the first product of the list contain "29.99"
    And I check that the last product of the list contain "Test.allTheThings() T-Shirt (Red)"
    And I check that the last product of the list contain "15.99"
    When I select the option "Price (low to high)" from the sorting dropdown
    And I check that the first product of the list contain "Sauce Labs Onesie"
    Then I check that the first product of the list contain "7.99"
    And I check that the last product of the list contain "Sauce Labs Fleece Jacket"
    Then I check that the last product of the list contain "49.99"
    When I select the option "Price (high to low)" from the sorting dropdown
    And I check that the first product of the list contain "Sauce Labs Fleece Jacket"
    Then I check that the first product of the list contain "49.99"
    And I check that the last product of the list contain "Sauce Labs Onesie"
    Then I check that the last product of the list contain "7.99"
    And I check that the first product of the list contain "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office."
    