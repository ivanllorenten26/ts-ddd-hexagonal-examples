Feature: Intermediate Page

Scenario: Navigate to the next page
    Given I am on any intermediate page
    When I click on the next button
    Then I should be on the next page

Scenario: Navigate to the prev pages
    Given I am on any intermediate page
     When I click on the prev button
    Then I should be on the prev page