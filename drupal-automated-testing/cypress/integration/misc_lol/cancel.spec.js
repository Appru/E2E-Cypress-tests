describe("cancel subs", function() {
  it("^^", function() {
    cy.visit("https://supapass.com/login");
    cy.get("input[type=text]").type("jem@supapass.com");

    cy.get("input[type=password]")
      .type("1million")
      .should("have.value", "1million");

    cy.contains("Login with Email").click();

    cy.visit("https://supapass.com/admin/mbaso/subscriptions?uid=FAC&uid_1=&active=All&payment_type=All&territory=All&period_month=All&field_subscription_status_value=All&id=&field_subscription_id_value=&report_type_override=&&order=active&sort=desc");

    for( var i= 3; i< 50; i++ ){

    
    cy.get(':nth-child('+i+') > .views-field-id').click()

    cy.get('#edit-cancelled-date-datepicker-popup-0').click()

    cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()

    cy.get('#edit-submit').click()

    cy.visit("https://supapass.com/admin/mbaso/subscriptions?uid=FAC&uid_1=&active=All&payment_type=All&territory=All&period_month=All&field_subscription_status_value=All&id=&field_subscription_id_value=&report_type_override=&&order=payment_type&sort=asc");
    }
  });
});
