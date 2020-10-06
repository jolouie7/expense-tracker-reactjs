describe("register", () => {
  beforeEach(() => {
    // Send a delete request to the server to delete the previously created user
    
    cy.visit("/");
    cy.contains("a", "Register").click();
  });

  it("Requires all fields to be filled out", () => {
    cy.get("[type=submit").click();
    cy.contains("div", "Please enter all fields");
  });
})