import HomePage from "../pageObjects/SignUp.page";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";
import SignUpPage from "../pageObjects/SignUp.page";
import LoginPage from "../pageObjects/Login.page";
import ForgetPasswordPage from "../pageObjects/ForgetPasswordPage";
import InvestmentsPage from "../pageObjects/Investments.page";


describe('Investments page test', () => {


    let testData;

    beforeEach(() => {
        cy.fixture('login').then(dataJson => {
            testData = dataJson;
        });
    });


    it('UI Test 1.1 - Validate investments page loads', () => {
        HomePage.getHomePage();
        InvestmentsPage.checkInvestmentsPageLoading();
        cy.url().should('include', '/investments');

    });

    it('UI Test 1.2 - Validate search functionality', () => {
        InvestmentsPage.searchForACard("Boat");
        cy.contains("Boat");
    });

    it('UI Test 1.3 - validate button click functionality', () => {
        InvestmentsPage.clickInvestingButton();
        cy.url().should('include', '/signin');
    });

})
