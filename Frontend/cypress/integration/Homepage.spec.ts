/// <reference types="cypress" />

/**
 * # Tests on **homepage**
 * @constructor
 */
export default function Homepage() {
    it("should display main elements of page", () => {
        cy.get('[data-cy="addWatermark"]').should("be.visible");
        cy.get('[data-cy="generateWatermark"]').should("not.exist");
        cy.get('[data-cy="fontOptions"]').should("be.visible");
        cy.get('[data-cy="dropzone"]').should("be.visible").should("have.text", "Déposer votre image ici pour ajouter vos filigranes");
    });
}
