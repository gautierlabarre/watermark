/// <reference types="cypress" />

/**
 * # Upload tests
 * @constructor
 */
export default function Upload() {
        //! Does not work on firefox !
        it("should upload a picture and display an image", () => {
            //@ts-ignore
            cy.get('[data-cy="dropzone"]').attachFile("test.jpg", { subjectType: "drag-n-drop" });
            cy.get('[data-cy="uploadedImage"]').should("be.visible");
        });

        it("should remove the preview", () => {
            cy.get('[data-cy="remove-preview"]').click();
            cy.get('[data-cy="uploadedImage"]').should("not.exist");
        });

        //! Does not work on firefox !
        it("should upload a picture and display an image", () => {
            //@ts-ignore
            cy.get('[data-cy="dropzone"]').attachFile("test.jpg", { subjectType: "drag-n-drop" });
            cy.get('[data-cy="uploadedImage"]').should("be.visible");
        });
    
}
