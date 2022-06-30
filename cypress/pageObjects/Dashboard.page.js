import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";
import {TestData} from "../fixtures/testData";

class DashboardPage {
    static emailField = '#email';
    static passwordField = '#password';
    static loginBtn = '.css-prfyaa';

    static connectWalletBtn = "//button[normalize-space()='Connect Wallet']";


    static getHomePage = () => {
        cy.visit("https://qa.futurebrightenergy.com/");
        return this;
    }

    static clickSignIn = () => {
        cy.contains("Sign in").click();
        return this;
    }

    static clickPeer = () => {
        cy.get(':nth-child(1) > .css-0 > .css-13mq7io').click();
        return this;
    }

    static enterName = () => {
        cy.get('#name').clear().type(TestData.getFullName());
        return this;
    }

    static enterEmails = (pre, suf) => {
        TestData.writeCounterFile();
        cy.readFile(Cypress.env('login_data_path')).then(data => {
            let email = TestData.generateEmailAlias(pre, data.counter, suf);
            cy.get('#email').clear().type(email);
            cy.get('#email_confirm').type(email);
        });
        return this;
    }

    static enterPasswords = () => {
        cy.get('#password').clear().type("5946644Ss@");
        cy.get('#password_confirm').clear().type("5946644Ss@");
        return this;
    }

    static enterDateOfBirth = () => {
        cy.get('#day').clear().type(TestData.getRandomDay());
        cy.get('#month').clear().type(TestData.getRandomMonth());
        cy.get('#year').clear().type(TestData.getRandomYear());
        return this;
    }

    static enterNationality = () => {
        cy.get('#nationality').clear().type("Bangladesh");
        return this;

    }

    static selectCountry = () => {
        cy.get('#country').select('Albania')
        return this;
    }

    static checkAgreementBox = () => {
        cy.get(':nth-child(1) > .chakra-checkbox__control').click();
        cy.get(':nth-child(2) > .chakra-checkbox__control').click();
        return this;
    }

    static clickSubmit = () => {
        cy.get('.css-1aw6gig').click();
        return this;
    }

    static clickVisionary = () => {
        cy.get(':nth-child(2) > .css-0 > .css-13mq7io').click();
        return this;
    }

    static enterNameOfOrganization = () => {
        cy.get('#organisation').clear().type(TestData.getFullName() + " Organization LLC");
        return this;
    }

    static enterPhoneNumber = () => {
        cy.get('#phonenumber').clear().type(TestData.getRandomPhoneNumber());
        return this;
    }

    static enterPosition = () => {
        cy.get('#position').clear().type(TestData.getRandomPosition());
        return this;
    }

    static enterEmail = (email) => {
        cy.get(this.emailField).clear().type(email);
        return this;
    }

    static enterPassword = (password) => {
        cy.get(this.passwordField).clear().type(password);
        return this;
    }

    static clickLogin = () => {
        cy.get(this.loginBtn).click();
        return this;
    }

    static checkConnectWalletButton = () => {
        cy.xpath(this.connectWalletBtn).should('be.visible');
        cy.xpath(this.connectWalletBtn).click();
        return this;
    }

    static checkConnectWalletFunctionality = () => {
        cy.get('iframe[src^="https://knightsbridge-demo.vercel.app/auth"]')
            .wait(500)
            .within($iframe => {
                const $body = $iframe.contents().find('body')

                cy.wrap($body).find('[class^="card__Card"]').click();

                // cy.readFile(Cypress.env('login_data_path')).then(data => {
                //     TestData.writeCounterFile();
                //     let email = TestData.generateEmailAlias(data.emailPrefix, data.counter, data.emailSuffix);
                //     cy.wrap($body)
                //         .find('[type="email"]')
                //         .type(email, {force: true})
                // });

                cy.wrap($body)
                    .find('[type="email"]')
                    .type('ss.unidev+1@gmail.com', {force: true})

                cy.wrap($body)
                    .find('[type="password"]')
                    .type('5946644Ss@', {force: true})

                cy.wrap($body)
                    .find('[type="submit"]')
                    .click();

                cy.wrap($body)
                    .contains("Wallet Connected");

            });
        return this;

    }



}

export default DashboardPage;
