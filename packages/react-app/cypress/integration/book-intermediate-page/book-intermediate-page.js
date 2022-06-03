import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on any intermediate page", () => {
  cy.visit("/books");
  cy.get('[data-testid="next-button"]').click();
});

When("I click on the next button", () => {
  cy.get('[data-testid="next-button"]').click();
});

When("I click on the prev button", () => {
  cy.get('[data-testid="prev-button"]').click();
});

Then("I should be on the prev page", () => {
  cy.contains("The new Avengers");
});

Then("I should be on the next page", () => {
  cy.contains("Star Wars: Saga - Boba Fett");
});
