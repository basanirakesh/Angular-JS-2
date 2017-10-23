import {browser, by, element, ElementFinder, protractor} from  "protractor";
import {MyDeals} from "../pages/3";

describe("3 - test suite", function () {
    var myDeals = new MyDeals();
    myDeals.dealPageUrl();
    it("3 - test case - a", function () {
        if (myDeals.panelCount.isPresent()) {
            myDeals.clickOnLockElement();
            myDeals.clickOnVoteTab();
            if(myDeals.votesCount.isPresent()) {
                myDeals.changeRequestStatusToReject();
                // TODO - except the icon to be red
                myDeals.changeRequestStatusToConsent();
                // TODO - except the icon to be green
            }
        }
    });
    browser.pause();
});

