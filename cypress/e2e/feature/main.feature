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
