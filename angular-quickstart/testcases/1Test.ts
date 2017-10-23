import {browser, by, element, ElementFinder, protractor} from  "protractor";
import {MyDeals} from "../pages/1";

describe("1 - test suite", function () {
    var myDeals = new MyDeals();
    myDeals.dealPageUrl();
    it("1 - test case - a", function () {
        myDeals.panelCount.isPresent().then(present => {
            if (present) {
                let warningDealElement = myDeals.getWarningElement();
                warningDealElement.click().then(function () {
                    let cancelButton = myDeals.getCancelButton();
                    cancelButton.click();
                    expect(warningDealElement.isPresent()).toBe(true);
                });
            }
        });
    });

    it("1 - test case - b", function () {
        myDeals.panelCount.isPresent().then(present => {
            if (present) {
                ElementFinder
                var warningDealElement = myDeals.getWarningElement();
                warningDealElement.click().then(function () {
                    let privateButton = myDeals.getPrivateButton();
                    privateButton.click();
                    expect(warningDealElement.isPresent()).toBe(false);
                });
            }
        });
    });

    it("1 - test case - c", function () {
        myDeals.panelCount.isPresent().then(present => {
            if (present) {
                let warningDealElement = myDeals.getWarningElement();
                warningDealElement.click().then(function () {
                    let publicButton = myDeals.getPublicButton();
                    publicButton.click();
                    expect(warningDealElement.isPresent()).toBe(false);
                });
            }
        });
    });
    browser.pause();
});

