/* eslint-disable no-undef */
describe("EVAX", () => {
  it.only("vaccinationCenter", () => {
    cy.visit("/inscription");
    cy.wait(2000);
    cy.get('.formulaire > :nth-child(2)').type("Bejaoui Aymen")
    cy.wait(2000);
    cy.get('.formulaire > :nth-child(4)').type("3333333")
    cy.wait(2000);
    cy.get('.ant-input-number-input').type("2014785")
    cy.wait(2000);
    cy.get('.ant-btn').click()
    cy.wait(2000);
    cy.get('.formulaire > :nth-child(2)').type("aymen@gmail.tn")
    cy.wait(2000);
    cy.get('.formulaire > :nth-child(4)').type("aaa")
    cy.wait(2000);
    cy.get('[ant-click-animating-without-extra-node="false"]').click()
    cy.wait(2000);
    cy.get('.steps-action > :nth-child(1)').click()

    cy.visit("/vaccin");
    cy.wait(2000);
   
    cy.get('[href="/addVaccin"] > .ant-btn').click()
    cy.wait(2000);
    cy.get('.ant-input').type("vaccin1") ;
      cy.wait(2000);
    cy.get('.addForm > .ant-btn').click() 
      cy.wait(2000);
    cy.visit("/vaccinationCenter");
    cy.wait(2000);
   
    cy.get('[href="/addCenter"] > .ant-btn > span').click();
    cy.get('.addForm > :nth-child(2)').clear().type("centre 1")
    cy.wait(2000);
   cy.get('#rc_select_0')
    cy.get('.addForm > :nth-child(8)').clear().type("Responsable 1")
    cy.wait(2000);
    cy.get('[placeholder="Entrer capacité du centre pour chaque 1/2 heure"]').clear().type("30")
    cy.wait(3000);
    cy.get('.addForm > .ant-btn').click();
    cy.wait(2000);
    cy.visit("/inscription");
    cy.wait(2000);
  });
});
