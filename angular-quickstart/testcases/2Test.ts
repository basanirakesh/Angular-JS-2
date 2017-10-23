import {browser, by, element, ElementFinder, protractor} from  "protractor";
import {MyDeals} from "../pages/2";

describe("2 - test suite", function () {
    var myDeals = new MyDeals();
    myDeals.dealPageUrl();
    it("2 - test case - a", function () {
        if (myDeals.panelCount.isPresent()) {
            myDeals.clickOnLockElement();
            if (myDeals.documentCount.isPresent()) {
                myDeals.selectMultipleDocuments();
                myDeals.downloadDocuments();
                //TODO - expect statement to verify that documents are downloaded
            }
        }
    });
    browser.pause();
});

