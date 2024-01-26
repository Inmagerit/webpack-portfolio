describe('template spec', () => {
  it('tests for buttons', () => {
    cy.visit('/index.html')

    cy.get('button').each((button) => {
      cy.wrap(button).should('be.visible').click();

  })
})
it('tests for buttons in page 2', () => {
  cy.visit('/pageTwo.html')

  cy.get('button').each((button) => {
    cy.wrap(button).should('be.visible').click();

})
})
})