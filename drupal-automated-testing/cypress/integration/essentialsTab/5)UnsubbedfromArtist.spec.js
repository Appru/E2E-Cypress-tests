describe('navigate though someone not subbed 2',function(){
    beforeEach(function() {
        var test = "https://test.supapass.com/discover";
        var stage = "https://staging.supapass.com/discover";
        var prod = "https://supapass.com/discover";
        cy.visit(stage);
      });


    it('From Subscriptions select a channel you are unsubscribed to',function(){

        cy.get('[href="https://supapass.com/imogenheap"]').click()

        cy.get('.field--name-field-about-us > .field__items > .field__item').should('contain','Subscribe')


        cy.get('.leaf.active-trail > .active-trail').click()

        cy.get('.block--mbaso-ecommerce-mbaso-artists-subscription').should('be.visible')

        cy.get('#block-menu-menu-backstage-menu > .menu > :nth-child(3) > a').click()

        cy.get('.views-row-1 > .ds-1col > .field-name-body > :nth-child(1)').should('be.visible')
    })






})