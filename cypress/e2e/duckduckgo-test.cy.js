describe('First test for Torc evaluation', () => {
  const criteria = 'The dev-friendly football API';
  const expectedUrl = 'https://www.football-data.org/';

  it('Validate if the first link opened in duckduck search is https://www.football-data.org', () => {
    cy.visit('https://duckduckgo.com')
    cy.get('#searchbox_input').type(criteria);
    cy.get('[type="submit"]').click();
    cy.get('[data-testid="result-title-a"]').first().should('be.visible').click();
    cy.url({ timeout: 10000 }).should('include', expectedUrl);
  })
})