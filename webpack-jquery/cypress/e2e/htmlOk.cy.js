describe('Checks html loads', () => {
  it('check all html elements exist', () => {
    cy.visit('/src/index.html')
    
    cy.get('*').should('exist')
  })
})