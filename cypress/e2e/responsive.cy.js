describe('Responsive Tests', () => {
  const baseUrl = Cypress.config('baseUrl'); // Read baseUrl from config

  it('should display correctly on mobile (iPhone 6)', () => {
    cy.viewport('iphone-6'); // Mobile 
    cy.visit(baseUrl);
    cy.get('h1').should('be.visible'); // Check header visibility
  });

  it('should display correctly on tablet (iPad)', () => {
    cy.viewport('ipad-2'); // Tablet 
    cy.visit(baseUrl);
    cy.get('h1').should('be.visible');
  });

  it('should display correctly on desktop (1280x720)', () => {
    cy.viewport(1280, 720); // Desktop 
    cy.visit(baseUrl);
    cy.get('h1').should('be.visible');
  });
});
