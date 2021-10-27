/// <reference types="cypress" />

/**
 * # Upload tests
 * @constructor
 */
export default function Watermark() {
    it("should display a <p> above the image when a watermark is filled", () => {
        cy.get('[data-cy="textarea-1"]').type("first text");
        cy.get('[data-cy="watermark-preview-0"]').should("be.visible").should("contain", "first text");
    });

    it("should try to remove a watermark", () => {
        cy.get('[data-cy="remove-watermark-1"]').click();
        cy.get('[data-cy="remove-watermark-1"]').should("be.visible");
        cy.get('[data-cy="watermark-preview-0"]').should("be.visible");
    });

    it("should create a new watermark block", () => {
        cy.get('[data-cy="addWatermark"]').click();
        cy.get('[data-cy="textarea-2"]').type("second text");
        cy.get('[data-cy="watermark-preview-0"]').should("be.visible");
    });

    it("should remove a watermark (the second)", () => {
        cy.get('[data-cy="remove-watermark-1"]').click();
        cy.get('[data-cy="remove-watermark-2"]').should("not.exist");
        cy.get('[data-cy="watermark-preview-1"]').should("not.exist");
    });

    it("should move the only watermark with D&D and text should not be visible", () => {
        cy.get('[data-cy="watermark-preview-0"]').trigger("mousedown").trigger("mousemove", { clientX: 3000, clientY: 0 }).trigger("mouseup");
        cy.get("article").scrollTo("topRight", 1000);

        cy.get('[data-cy="watermark-preview-0"]').trigger("mousedown").trigger("mousemove", { clientX: 2000, clientY: 0 }).trigger("mouseup");
        cy.get("article").scrollTo("topLeft");

        cy.get('[data-cy="watermark-preview-0"]').should("not.be.visible");
    });

    it("should move to the right and see watermark", () => {
        cy.get("article").scrollTo("topRight");
        cy.get('[data-cy="watermark-preview-0"]').should("be.visible");
    });

    it("should have a second <p> displayed", () => {
        cy.get('[data-cy="addWatermark"]').click();
        cy.get('[data-cy="textarea-2"]').type("second text");
        cy.get("article").scrollTo("topLeft");

        cy.get('[data-cy="watermark-preview-1"]').should("be.visible").should("contain", "second text");
    });

    it("should have a third <p> displayed", () => {
        cy.get('[data-cy="addWatermark"]').click();
        cy.get('[data-cy="textarea-3"]').type("third text");
        cy.get('[data-cy="watermark-preview-2"]').trigger("mousedown").trigger("mousemove", { clientX: 200, clientY: 200 }).trigger("mouseup");
        cy.get("article").scrollTo("topLeft");

        cy.get('[data-cy="watermark-preview-2"]').should("be.visible").should("contain", "third text");
    });
}
