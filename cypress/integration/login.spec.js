/// <reference types="cypress" />

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("a", "Login").click();
  });

  it("Requires valid username and password", () => {
    cy.get("[type=submit").click();
    cy.contains("div", "Please enter all fields");
  });

  it("Requires valid password", () => {
    cy.get("[name=username").type("joseph123");
    cy.get("[type=submit").click();
    cy.contains("div", "Please enter all fields");
  });

  it("Requires valid username", () => {
    cy.get("[name=password").type("testpassword");
    cy.get("[type=submit").click();
    cy.contains("div", "Please enter all fields");
  });

  it("checks for correct username", () => {
    cy.get("[name=username").type("test");
    cy.get("[name=password").type("testpassword");
    cy.get("[type=submit").click();
    cy.contains("div", "User does not exist");
  });

  it("checks for correct password", () => {
    cy.get("[name=username").type("joseph123");
    cy.get("[name=password").type("test");
    cy.get("[type=submit").click();
    cy.contains("div", "Invalid Credentials");
  });

  it("should log the user in", () => {
    cy.get("[name=username").type("joseph123");
    cy.get("[name=password").type("testpassword");
    cy.get("[type=submit").click();
    cy.contains("strong", "Welcome joseph123");
  });
})