describe("getting data", function() {
  it("^^", function() {
    cy.visit("https://supapass.com/login");
    cy.get("input[type=text]").type("jem@supapass.com");

    cy.get("input[type=password]")
      .type("1million")
      .should("have.value", "1million");

    cy.contains("Login with Email").click();

    cy.visit("https://supapass.com/admin/mbaso/people");


    var listOfNames=[
        12139,
        12141,
        12143,
        12147,
        12149,
        12189,
        12190,
        12196,
        12202,
        12203,
        12208,
        2116,
        2385,
        7294,
        8546,
        8570,
        8922,
        8933,
        9671,
        9731,
        9744,
        9770,
        9781,
        9787,
        9890,
        9891,
    ]
    listOfNames.forEach(function(element){
    cy.visit("https://supapass.com/admin/mbaso/people");

    cy.get("#edit-uid-raw").type(element);
    cy.get('#edit-submit-admin-people').click();
    cy.screenshot('this'+element);

    });

  });
});
