import "cypress-iframe";
import "cypress-xpath";
import "cypress-localstorage-commands";

class InvestmentsPage {
    static InvestingButton = "//span[.='Investing']/ancestor::button";
    static NFTCollectionLink = "//a[.='NFT Collection']";
    static button = "//main//div[1]//a[1]";
    static solarBtn = "//button[.='Solar']";
    static WindBtn = "//button[.='Wind']";
    static bioMassBtn = "//button[.='Biomass']";
    static hydroPowerBtn = "//button[.='Hydropower']";

    static checkInvestmentsPageLoading = () => {
        cy.xpath(this.InvestingButton).click();
        cy.xpath(this.NFTCollectionLink).click();
        return this;

    }

    static searchForACard = (cardName) => {
        cy.get('.chakra-input').clear().type(cardName);
        return this;
    }

    static clickInvestingButton = () => {
        cy.xpath(this.button).click();
        return this;
    }

    static checkFilters = () => {
        cy.xpath(this.solarBtn).click();
        cy.xpath(this.WindBtn).click();
        cy.xpath(this.bioMassBtn).click();
        cy.xpath(this.hydroPowerBtn).click();
        return this;
    }

}

export default InvestmentsPage;
