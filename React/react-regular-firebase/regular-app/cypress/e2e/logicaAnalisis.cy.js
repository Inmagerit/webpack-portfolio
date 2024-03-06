describe('Registration Form', () => {
  it('should fill the form and register successfully', () => {
    // Visit the root of your app (replace '/' with the path to your registration page if needed)
    cy.visit('/');

    // Fill in the email and password inputs
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('password123');

    // Click the register button
    cy.get('[data-cy=register-button]').click();

    // Assert that the success message is visible
    cy.get('[data-cy=success-message]').should('be.visible');
  });

  it('should handle registration error', () => {
    // Visit the root of your app (replace '/' with the path to your registration page if needed)
    cy.visit('C:/Users/Oscar/Desktop/Carrera IT/Portfolio Web/Webpacks/Portfolio definitivo/react-regular/regular-app/src/App.js');

    // Fill in the email and password inputs
    cy.get('[data-cy=email-input]').type('test@example.com');
    cy.get('[data-cy=password-input]').type('incorrectpassword');

    // Click the register button
    cy.get('[data-cy=register-button]').click();

    // Assert that the error message is visible
    cy.get('[data-cy=error-message]').should('be.visible');
  });
});
