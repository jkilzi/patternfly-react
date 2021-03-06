describe('Area Chart Stacked Demo Test', () => {
  it('Navigate to demo section', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#stacked-area-chart-demo-nav-item-link').click();
    cy.url().should('eq', 'http://localhost:3000/stacked-area-chart-demo-nav-link');
  });

  it('Verify area chart', () => {
    cy.get('.pf-c-chart').should('exist');
  });

  it('Verify legend string', () => {
    cy.get('text').contains('Cats');
  });

  it('Verify svg width and height', () => {
    cy.get('.pf-c-chart > svg').should('have.attr', 'width', '650');
    cy.get('.pf-c-chart > svg').should('have.attr', 'height', '225');
  });
});
