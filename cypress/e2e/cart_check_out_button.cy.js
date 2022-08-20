import 'cypress-real-events/support';
describe('Viewing shopping cart', () => {
  it('Adding and viewing shopping cart page', () => {
    cy.visit('/');
    cy.get('[title=Women]').first().realHover();
    cy.get('[title="Blouses"]').should('be.visible').click();
    cy.get('.category-name').should('contain', 'Blouses');

    cy.get('.product-name').should('contain', 'Blouse');
    cy.get('li').find('[title="Add to cart"]').click();
    cy.get('#layer_cart').should(
      'contain',
      'Product successfully added to your shopping cart'
    );
    cy.get('.cross').should('be.visible').click();
    cy.get('#layer_cart').should('not.be.visible');

    cy.get('[title="View my shopping cart"]').should('be.visible').realHover();
    cy.get('#button_order_cart').should('be.visible').click();
    cy.get('#cart_title').should('be.visible');
    cy.get('#summary_products_quantity')
      .should('be.visible')
      .and('have.text', '1 Product');
  });
});
