
import {TestData} from "../fixtures/testData";
import LoginPage from "../pageObjects/Login.page";
import DashboardPage from "../pageObjects/Dashboard.page";

describe('Dashboard page test',() => {

    let testData;

    beforeEach(() => {
        cy.fixture('login').then(dataJson => {
            testData = dataJson;
        });
    });

    it('UI Test 0.0 - Validate user login functionality', () => {
        LoginPage.login(testData.email, testData.password);
    });

    it('UI Test 1.1 - Check the logo', () => {
        cy.get('#top-header > .chakra-link > svg').should('be.visible');
    })





    it('UI Test 1.2 - Check Dashboard link is visible', () => {
        cy.get('.css-ra5upo > .chakra-text').should('be.visible');
    });

    it('UI Test 1.3 - Check Projects link is visible', () => {
        cy.get('[href="/dashboard/projects"] > .chakra-text').should('be.visible');
    });

    it('UI Test 1.4 - Check portfolio link is visible', () => {
        cy.get('[href="/dashboard/portfolio"] > .chakra-text').should('be.visible');
    });

    it('UI Test 1.5 - Check the Account link is visible', () => {
        cy.get('[href="/dashboard/portfolio"] > .chakra-text').should('be.visible');
    });

    it('UI Test 1.6 - connect wallet button functionality validation', () => {
        DashboardPage.checkConnectWalletButton();
    });

    it('UI Test 1.7 - Check the connect wallet functionality', () => {
        DashboardPage.checkConnectWalletFunctionality();
    });

});
