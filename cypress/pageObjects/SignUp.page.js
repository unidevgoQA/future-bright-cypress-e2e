import "cypress-iframe";
import "cypress-localstorage-commands";
import "cypress-xpath";
import {TestData} from "../fixtures/testData";

class SignUpPage {


    static signUpBtn = "//a[normalize-space()='Sign up']";
    static yesPleaseBtn = "//a[normalize-space()='Yes, please!']";
    static noThanksBtn = "//a[normalize-space()='No, thanks']";
    static peerOption = "(//h3[.='Select your role']/ancestor::div/child::div/div/div)[1]/label/div";
    static visionaryOption = "(//h3[.='Select your role']/ancestor::div/child::div/div/div)[2]/label/div";


    static getHomePage = () => {
        cy.visit(Cypress.env('base_url'));
        cy.window().then((win) => {
            win.sessionStorage.clear()
            win.localStorage.clear()
        });
        cy.reload();
        return this;
    }

    static clickSignUp = () => {
        cy.contains("Sign up").click();
        return this;
    }

    static clickNoSignUp = () => {
        cy.get('.css-h2t2bd').click();
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

    static peerSurvey = () => {

        cy.xpath(this.signUpBtn).click();
        cy.xpath(this.yesPleaseBtn).click();
        cy.xpath(this.peerOption).click();

        cy.get('#hs-form-iframe-0')
            .wait(500)
            .within($iframe => {
                const $body = $iframe.contents().find('body')
                cy.readFile(Cypress.env('login_data_path')).then(data => {
                    TestData.writeCounterFile();
                    let email = TestData.generateEmailAlias(data.emailPrefix, data.counter, data.emailSuffix);
                    cy.wrap($body)
                        .find('[type="email"]')
                        .type(email, {force: true})
                });

                cy.wrap($body).
                    find('input[id^="firstname"]').type(TestData.getFullName(), {force: true})


                cy.wrap($body).
                    find('input[value="Environmentalist"]').click({force: true})

                cy.wrap($body).
                    find('input[value="Less than 1 year"]').click({force: true})

                cy.wrap($body).
                    find('input[value="I am investing for fun – I don’t have a goal"]').click({force: true})

                cy.wrap($body).
                    find('input[value="Low Risk"]').click({force: true})

                cy.wrap($body).
                    find('input[value="Submit"]').click({force: true})

            });
        cy.contains("Sign up");
        return this;

    }

    static visionarySurvey = () => {

        cy.xpath(this.signUpBtn).click();
        cy.xpath(this.yesPleaseBtn).click();
        cy.xpath(this.visionaryOption).click();

        cy.get('#hs-form-iframe-0')
            .wait(500)
            .within($iframe => {
                const $body = $iframe.contents().find('body')
                cy.readFile(Cypress.env('login_data_path')).then(data => {
                    TestData.writeCounterFile();
                    let email = TestData.generateEmailAlias(data.emailPrefix, data.counter, data.emailSuffix);
                    cy.wrap($body)
                        .find('[type="email"]').eq(1)
                        .type(email, {force: true})
                });

                // cy.wrap($body).
                // find('input[id^="firstname"]').type(TestData.getFullName(), {force: true})


                // cy.wrap($body).
                // xpath("//input[starts-with(@id,'company-')]").type(TestData.getFullName() + " Organization LLC", {force: true})

                // cy.wrap($body).
                // find('input[id^="address"]').type("st 09, Dhaka", {force: true})
                //
                // cy.wrap($body).
                //     find('select[id*="industry"]').select('Accounting', {force: true})
                //
                //
                // cy.wrap($body).
                //     find('input[id*="website"]').select('google.com', {force: true})
                //
                // cy.wrap($body).
                //     find('input[id^="current_monthly_energy_bill"]').type("2500")
                //
                //
                // cy.wrap($body).
                // find('input[value="Submit"]').click({force: true})

            });
        // cy.contains("Sign Up");
        // return this;

    }
}



export default SignUpPage;
