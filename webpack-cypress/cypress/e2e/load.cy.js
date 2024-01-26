describe('template spec', () => {
  it('Checks all elements are loaded', () => {
    cy.visit('/index.html');

    cy.get('*').should('exist');
   
  });
  it('Checks all elements are loaded', () => {
    cy.visit('/pageTwo.html');

    cy.get('*').should('exist');
   
  });

});
