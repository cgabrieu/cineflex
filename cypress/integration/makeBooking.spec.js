/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Make Booking', () => {
  it('should be able to access home page', () => {
    cy.visit('http://localhost:3000');

    cy.get('img').should('have.length', 20);
    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('should be able to access showtimes page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('img').first().click();

    cy.url().should('includes', 'http://localhost:3000/filme/');
  });

  it('should be able to back to home', () => {
    cy.get('svg').first().click();

    cy.url().should('equal', 'http://localhost:3000/');
  });

  it('should be able to access seats page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('img').last().click();
    cy.get('button').last().click();

    cy.url().should('includes', 'http://localhost:3000/assentos/');
  });

  /*   it('should be able to click on available seat', () => {
    cy.get('.sc-egiyK').find('dAbmzp').first().click();
  }); */
});
