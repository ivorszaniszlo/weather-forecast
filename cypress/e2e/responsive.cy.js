describe('Responsive Tests', () => {
    const url = 'http://localhost:3000'; // url to test
  
    it('should display correctly on mobile (iPhone 6)', () => {
      cy.viewport('iphone-6'); // Mobil 
      cy.visit(url);
      cy.get('h1').should('be.visible'); // Check header visibility
    });
  
    it('should display correctly on tablet (iPad)', () => {
      cy.viewport('ipad-2'); // Tablet 
      cy.visit(url);
      cy.get('h1').should('be.visible');
    });
  
    it('should display correctly on desktop (1280x720)', () => {
      cy.viewport(1280, 720); // Desktop 
      cy.visit(url);
      cy.get('h1').should('be.visible');
    });
  });
  