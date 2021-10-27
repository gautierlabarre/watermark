/// <reference types="cypress" />
import FontChange from "./FontChange.spec";
import Homepage from "./Homepage.spec";
import Result from "./Result.spec";
import Upload from "./Upload.spec";
import Watermark from "./Watermark.spec";


context('Homepage', () => {
    beforeEach(() => {
        cy.intercept("POST", "**/add-watermark").as('add-watermark')

    })
    before(() => {
        cy.visit("/");
    })
    describe("Check homepage", Homepage.bind(this))
    describe("Check Upload", Upload.bind(this))
    describe("Check Watermark", Watermark.bind(this))
    describe("Check Font change", FontChange.bind(this))
    describe("Check Result", Result.bind(this))
});
