describe("Fan Registration", function() {
  function login(username, password) {
    var test = "https://test.supapass.com/login";
    var stage = "https://staging.supapass.com/login";
    var prod = "https://supapass.com/login";
    cy.visit(stage);

    
  }

  it("navigate to discover section", function() {
    login();

    cy.get("#edit-mail")
      .click()
      .type("test22@supapass.com");

    cy.get("#edit-pass")
      .click()
      .type("password");
    cy.get("#edit-submit").click();

    cy.url().should("contain", "/activity");
    cy.get(".first > .no-ajaxy").click();
    cy.url().should("contain", "/discover");
  });

  it("Click on an artists profile photo", function() {
    cy.get('[href="https://staging.supapass.com/imogenheap"] > .artist-list__overlay').click();

    cy.get(
      "#block-mbaso-ecommerce-mbaso-artists-subscribe-button > .block__content > .btn"
    ).should("be.visible");
  });

  it("Select the Stream page", function() {
    cy.get("#block-menu-menu-backstage-menu > .menu > .first > a").click();
    cy.url().should("contain", "/stream");
    cy.get(
      ":nth-child(1) > .view > .view-content > .views-table > tbody > .odd > .track-info"
    ).should("be.visible");
  });

  it('select the VIP pagee', function(){

    cy.get('#block-menu-menu-backstage-menu > .menu > :nth-child(2) > a')
        .click()

    cy.get('.block--mbaso-ecommerce-mbaso-artists-subscription')
        .should('be.visible')

    cy.url().should('contain','/vip')



    
})


it('Select the Buzz page', function(){

cy.get('.leaf.active-trail > .active-trail').click()
cy.url().should('contain', '/buzz')

})

});
