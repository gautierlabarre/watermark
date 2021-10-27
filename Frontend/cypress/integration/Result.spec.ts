/// <reference types="cypress" />

/**
 * # Result display
 * @constructor
 */
export default function Result() {
    it("should generate image with 2 watermarks", () => {
        cy.get('[data-cy="generateWatermark"]').click();
        cy.wait('@add-watermark')
        cy.get('[data-cy="finalResult"]').should('be.visible')
        cy.get('[data-cy="finalResultImage"]').should('be.visible')
    });
}
