Feature: Accesibility tests

  Background: Visit and login with valid credencials
    Given I visit "https://www.saucedemo.com/"
    When I login better with valid credentials for the standar_user
    Then I check that the page should "contain" the text "Products"
    
    Scenario: Test the accesibility in all the screen
      Then I test the accesibility in all the screen

    Scenario: Test the accesibility on the element "Acceso"
      Then I test the accesibility on the element with locator "[data-test='inventory-item-sauce-labs-backpack-img']"

    Scenario: Test the accesibility on the element "Acceso"
      Then I test the accesibility on the element with locator "[data-test='product-sort-container']"
