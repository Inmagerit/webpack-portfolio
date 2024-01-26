describe('Checks html loads', () => {
    it('check all html elements exist', () => {
      cy.visit('/src/index.html')
      
      cy.get('button')
      .should('exist')
      .should('be.visible')
      .each(($button) => {
        cy.wrap($button).click({ multiple: true })})
      });
      
    })
  