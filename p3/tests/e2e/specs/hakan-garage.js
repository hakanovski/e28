// Scenario:

// - Checking the home page checking 1st sentence of string and its element
// - Clicking on cars page and chec king for h2 element -- Cars and list them
// - Checking the 1st car --> "'Ferrari 488 Spider 2018'"
// - Verifying the number of elements on the page, in this case there are 5 cars
// - Clicking on 1st Car Ferrari 448 Spider
// - Adding it to the favorites
// - Go to favorites page and checking if Ferrari has been added or not
// - Removing Ferrari from favorite list
// - Verifying if Ferrari has been removed or not


describe('hakan-garage', () => {
  it('Browsing the main page', () => {
    cy.visit('/')
    cy.contains('p', 'I am a car enthusiast and I wanted to create a page for my passion.')
  })

  let cars = {
    name: 'Ferrari 488 Spider 2018',
    id: 1
  }

  it('listing all cars', () => {

    cy.visit('/car');

    cy.contains('h2', 'Cars');

    cy.contains('[data-test="car-link"]', cars.name);

    // https://docs.cypress.io/guides/references/assertions.html#Sinon-Chai
    cy.get('[data-test="car-link"]').should('have.length', 5);
    // Clicking on Ferrari 488 Spider
    // https://docs.cypress.io/api/commands/click.html#Syntax
    cy.get('[data-test="car-link"]').contains('Ferrari 488 Spider 2018').click();


    // Clicking on Add to Favorites button
    cy.get('[data-test="button-test"]').contains('Add to Favorites').click();

    // Going to Favorites page and check if Ferrari has been added or not
    cy.visit('/favorites');
    cy.contains('Ferrari 488 Spider 2018');

    // Remove Ferrari from favorites list
    cy.get('[data-test="remove-test"]').contains('Remove').click();

    // Verify if the car has been removed from favorite list
    cy.contains('No favorites yet.');

  })
  
}) 