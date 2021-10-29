/// <reference types="cypress" />
import FontColor from '../../src/Enums/fontColor.enum';
import FontSize from '../../src/Enums/fontSize.enum';

/**
 * # Tests on **homepage**
 * @constructor
 */
export default function FontChange() {
    it('should change the font to small', () => {
        cy.get('[data-cy="fontSizeOptions"]').select('Petit');
        cy.get('[data-cy="watermark-preview-1"]').should('be.visible').should('have.class', FontSize.SMALL);
    });

    it('should change the font to big', () => {
        cy.get('[data-cy="fontSizeOptions"]').select('Gros');
        cy.get('[data-cy="watermark-preview-1"]').should('be.visible').should('have.class', FontSize.BIG);
    });

    it('should change the font to huge', () => {
        cy.get('[data-cy="fontSizeOptions"]').select('Enorme');
        cy.get('[data-cy="watermark-preview-1"]').should('be.visible').should('have.class', FontSize.HUGE);
    });

    it('should change the font to massive', () => {
        cy.get('[data-cy="fontSizeOptions"]').select('Gigantesque');
        cy.get('[data-cy="watermark-preview-1"]').should('be.visible').should('have.class', FontSize.MASSIVE);
    });

    it('should change the font to white', () => {
        cy.get('[data-cy="fontWhite"]').click();
        cy.get('[data-cy="watermark-preview-1"]').should('be.visible').should('have.class', FontColor.WHITE);
    });

    it('should change the font to black', () => {
        cy.get('[data-cy="fontBlack"]').click();
        cy.get('[data-cy="watermark-preview-1"]').should('be.visible').should('have.class', FontColor.BLACK);
    });
}
