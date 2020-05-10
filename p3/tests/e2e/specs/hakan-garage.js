

// Scenario:

// - Checking the home page checking 1st sentence of string and its element
// - Clicking on cars, verify if the cars page opened
// - Selecting 1st car, checking the string and its element
// - Add favorite
// - Check if it has been added to favorite
// - Remove and check if "no favorites yet" string has been appeared or not


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

    cy.visit('/car')

    cy.contains('h2', 'Cars')

    cy.contains('[data-test="car-link"]', car.name)

    cy.get('[data-test="car-link"]').should('have.length', 2)

    cy.get('[data-test="car-link"]').first().click();
    cy.contains('[data-test="car-link"]', car.name)

  })

  it('creating a direction with favorite page', () => {
    cy.visit('/cars/');
    cy.get('[data-test="add-to-favorites-button"]').click();
    cy.visit('/favorites');
    cy.contains('[data-test="favorites-cars"]', car.name);
    cy.get('[data-test="remove-from-favorites-button"]').click();
    cy.contains('No favorites yet.');
  })
}) 