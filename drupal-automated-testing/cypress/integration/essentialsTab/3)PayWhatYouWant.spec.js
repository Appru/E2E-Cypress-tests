describe("Subscribe to an Artist - Pay What You Want - monthly", function() {
  beforeEach(function() {
    var test = "https://test.supapass.com/leddra/subscribe";
    var stage = "https://staging.supapass.com/leddra/subscribe";
    var prod = "https://supapass.com/leddra/subscribe";
    cy.visit(stage);
  });

  it("Select the £1 monthly radio button", function() {
    cy.get(":nth-child(2) > .form-item > .option").click();
    cy.get(".form-item-standard-amount").should("contain", "£1");
  });

  it("enter amount less than 0 and press direct debit ", function() {
    cy.get(":nth-child(2) > .form-item > .option").click();
    cy.get("#edit-standard-amount")
      .click()
      .clear()
      .type("0");

    cy.get("#edit-new-billing-commerce-customer-address-und-0-name-line")
      .click()
      .type("John Watson");
    cy.get(
      "#edit-new-billing-commerce-customer-address-und-0-thoroughfare"
    ).type("32 Edward Street");
    cy.get("#edit-new-billing-commerce-customer-address-und-0-premise").type(
      "Camborne"
    );
    cy.get("#edit-new-billing-commerce-customer-address-und-0-locality").type(
      "Cornwall"
    );
    cy.get(
      "#edit-new-billing-commerce-customer-address-und-0-postal-code"
    ).type("TR14 8PA");

    cy.get("#edit-button").click();

    cy.get(".messages").should(
      "contain",
      "Monthly amount is too low. It must be at least £1.00."
    );
  });

  it("enter amount less than 0 and press credit card", function() {
    cy.get(":nth-child(2) > .form-item > .option").click();
    cy.get("#edit-standard-amount")
      .click()
      .clear()
      .type("0");

    cy.get("#edit-new-billing-commerce-customer-address-und-0-name-line")
      .click()
      .type("John Watson");
    cy.get(
      "#edit-new-billing-commerce-customer-address-und-0-thoroughfare"
    ).type("32 Edward Street");
    cy.get("#edit-new-billing-commerce-customer-address-und-0-premise").type(
      "Camborne"
    );
    cy.get("#edit-new-billing-commerce-customer-address-und-0-locality").type(
      "Cornwall"
    );
    cy.get(
      "#edit-new-billing-commerce-customer-address-und-0-postal-code"
    ).type("TR14 8PA");

    cy.get("#edit-button--2").click();

    cy.get(".messages").should(
      "contain",
      "Monthly amount is too low. It must be at least £1.00."
    );
  });
});
