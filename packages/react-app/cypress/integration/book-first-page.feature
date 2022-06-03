Feature: First Page

Scenario: Navigate to the second page
    Given I am on the first page
    When I click on the next button
    Then I should be on the second page

Scenario: Can't navigate to the previous page
    Given I am on the first page
    Then the previous button is disabled