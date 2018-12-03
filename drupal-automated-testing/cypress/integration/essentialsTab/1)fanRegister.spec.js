describe("Fan Registration", function() {
  beforeEach(function() {
    var test = "https://test.supapass.com/register";
    var stage = "https://staging.supapass.com/register";
    var prod = "https://supapass.com/register";
    cy.visit(stage);
  });

  it("Enter a password but leave the email field blank.", function() {
    cy.get("#edit-pass")
      .click()
      .type("test444@");
    cy.get("#edit-submit").click();
    cy.contains("Please enter a valid email address.");
  });

  it("Enter email without an @, click 'Sign up with Email", function() {
    cy.get("#edit-mail")
      .click()
      .type("test444supapass.com");
    cy.get("#edit-submit").click();
    cy.contains("Please enter a valid email address.");
  });

  it("Enter email without a .com, click 'Sign up with Email", function() {
    cy.get("#edit-mail")
      .click()
      .type("test444@supapass");
    cy.get("#edit-submit").click();
    cy.contains("Please enter a valid email address.");
  });

  it("Enter an email which has already been registered on the platform", function() {
    cy.get("#edit-mail")
      .click()
      .type("test444@example.com");
    cy.get("#edit-pass")
      .click()
      .type("password");
    cy.get("#edit-submit").click();

    cy.get('.option').click
    cy.contains("Sorry, that email address is already registered");
  });

  it("Nothing entered in the password field", function() {
    cy.get("#edit-mail")
      .click()
      .type("test444@supapass.com");
    cy.get("#edit-submit").click();
    cy.contains("Please enter a valid password of at least 6 characters.");
  });

  it('Enter a password with less than 6 characters', function(){

    cy.get("#edit-pass")
    .click()
    .type('a')

    cy.get("#edit-submit").click();
    cy.contains('Please enter a valid password of at least 6 characters.')
  })
});
