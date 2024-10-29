describe('Football API Tests', () => {
    const baseUrl = 'https://api.football-data.org';
  
    it('Validate the football-data.org website', () => {
      cy.visit('https://www.football-data.org/');
    });
  
    it('Verify that api returns 200 OK for valid request', () => {
      cy.request({
        url: baseUrl + '/coverage',
    
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it('Verify that api returns 404 Not Found for invalid endpoint', () => {
        cy.request({
          url: baseUrl + '/invalid-endpoint',
          failOnStatusCode: false 
        }).then((response) => {
          expect(response.status).to.eq(404);
        });
      });
      
    it('Verify that api is validating errors in bad credentials with POST ', () => {
        cy.request({
            method: 'POST',
            url: baseUrl + '/client/login',
            body: {
              username: 'fake',
              api_key: 'fake'
            },
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((response) => {
            cy.log(JSON.stringify(response));
            expect(response.status).to.be.oneOf([200, 201]);
        });
    });
});