Feature: Login test suite

    Background: Login
    Given I visit "https://www.saucedemo.com/"

    Scenario: Login happy path
    Given I check that the url "not.include" the endpoint "inventory"
    # When I login with the username "standard_user" and password "secret_sauce"
    # And I check that the value in the input "username" should be ""
    # And I type in the input "username" the value "standard_user"
    # And I check that the value in the input "password" should be ""
    # And I type in the input "password" the value "secret_sauce"
    # When I click on the button "login-button"
    When I login with valid credentials
    Then I check that the url "include" the endpoint "inventory"