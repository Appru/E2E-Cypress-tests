describe("Once you are subbed to an artist", function() {
  beforeEach(function() {
    var test = "https://test.supapass.com/activity";
    var stage = "https://staging.supapass.com/login";
    var prod = "https://supapass.com/login";
    cy.visit(stage
    );
  });

  it("navigate to artits", function() {

    cy.get("#edit-mail")
    .click()
    .type("test22@supapass.com");

  cy.get("#edit-pass")
    .click()
    .type("password");
  cy.get("#edit-submit").click();
    ///i guess change this when the op address changes
    cy.get(".nav-primary__link--last").click();

    cy.get("#edit-mail")
      .click()
      .type("test22@example.com");
    cy.get("#edit-pass")
      .click()
      .type("password");

    cy.get("#edit-submit").click();
    //////////////////////////////////////////////////
    cy.get(".menu-mlid-4960 > .active-trail").click();
    cy.get(".artist-name").click();

    cy.url().should("contain", "leddra");
  });



  it("Click on the Stream link", function(){
    cy.get("#edit-mail")
    .click()
    .type("test22@supapass.com");

  cy.get("#edit-pass")
    .click()
    .type("password");
  cy.get("#edit-submit").click();

    cy.get('.first > .active-trail').click()

    cy.get('.odd > .track-download').should('be.visible')
    cy.get(':nth-child(1) > .view > .view-content > .views-table > tbody > .odd > .track-cover-art').should('be.visible')
    cy.get('.view-footer > h3').should('be.visible')

    ///check if the content actually works manually lol
    ////////////////////////////////////////////////


  })

  it("click the VIP tab and comment", function (){
    cy.get("#edit-mail")
    .click()
    .type("test2@supapass.com");

  cy.get("#edit-pass")
    .click()
    .type("password123");
  cy.get("#edit-submit").click();

    cy.get('#block-menu-menu-backstage-menu > .menu > :nth-child(2) > a').click()

    //clicking the blog links
    //cy.get('.blog > .no-ajaxy').click()

    cy.get('#comments-button-99491 > .comments-loaded').click()
    cy.get('#edit-comment-body-und-0-value--2').click().type('test')
    cy.get('#edit-submit--2').click()

    cy.get('#comment-wrapper-1571 > .ds-2col > .group-right > .links > .comment-reply > .use-ajax').click()
    cy.get('#edit-comment-body-und-0-value--3').click().type('test reply')
    cy.get('#edit-submit--3').click()

    //delete buttons

    cy.get('#comment-wrapper-1571 > :nth-child(2) > .group-right > .links > .comment-delete > .use-ajax').click()

    cy.get('#comment-wrapper-1572 > .ds-2col > .group-right > .links > .comment-delete > .use-ajax').click()







  })
});
