
describe('check links', () => {
    it('check link one', () => {
      cy.visit('/index.html'); 
  
      cy.get('#botonUno').click();
      
      
      cy.contains('Second page').should('exist');
    });
      it('check link two', () => {
      cy.visit('/pageTwo.html'); 
  
      cy.get('#botonDos').click();
      

      cy.contains('Hello world').should('exist'); 
    });
  });
  
  
  
  
  