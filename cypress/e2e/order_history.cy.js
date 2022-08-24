describe('User order history', () => {
  it('Login and open order history', () => {
    cy.login('test456123@email23.com', '123456');
    cy.get('[title="Orders"]').should('be.visible').click();
    cy.url().should('contain', 'controller=history');
    cy.get('.first_item ').find('.color-myaccount').first().click();
    cy.get('#block-order-detail').should('exist');
  });
});
