export class Waits {
    // Waits for the given selector to be visible.
    static waitUntilVisible(selector) {
        return cy.get(selector).should('be.visible');
    }

    // Waits for the given selector to be clickable
    static waitForSelectorClickable(selector) {
        return cy.get(selector).then(($btn) => {
            if ($btn.is(":enabled")) {
                cy.wrap($btn).click() //Button is enabled
            } else {
                //Button is disabled
            }
        });

    }

   static wait(seconds=3) {
        return cy.wait(seconds * 1000);
    }
}
