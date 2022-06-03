import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the first page", () => {
  cy.visit("/books");
});

When("I click on the next button", () => {
  cy.get('[data-testid="next-button"]').click();
});

Then("I should be on the second page", () => {
  cy.contains("The Sandman");
});

Then("the previous button is disabled", () => {
  cy.get('[data-testid="prev-button"]').should("be.disabled");
});
