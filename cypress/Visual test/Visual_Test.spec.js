
//const compareSnapshotCommand = require('cypress-image-diff-js/command');
// for Cypress v12.17.3 and older
// const compareSnapshotCommand = require('cypress-image-diff-js');
// compareSnapshotCommand();


describe('My Visual Test', () => {
  it('my visual test for web page', () => {
    // Load test data from JSON file
    cy.fixture('./visual_test_pages.json').then((pages) => {
      pages.forEach((page, index) => {
       cy.visit(page['url']);

       cy.compareSnapshot({
        name: page['name'],
        testThreshold: 0.4
        });
      });

      

    });
  });
});
