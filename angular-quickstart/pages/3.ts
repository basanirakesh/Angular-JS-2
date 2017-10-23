import {browser, by, element, protractor} from  "protractor";
import {ElementFinder, ElementArrayFinder} from 'protractor';

class MyDeals {
    panelCount: ElementArrayFinder;
    votesCount: ElementArrayFinder;

    constructor() {
        this.panelCount = element.all(by.css('.panel-default'));
        // TODO - change the css to vote row css
        this.votesCount = element.all(by.css(''));
    }

    dealPageUrl() {
        // TODO - change the url to deal page url
        browser.get('');
    }

    browserWaitForElements(element, text: string, nSecs: number) {
        let expectedConditions = protractor.ExpectedConditions;
        let timeoutMS = nSecs;
        let timeoutMsg = text;
        browser.wait(expectedConditions.visibilityOf(element), timeoutMS, timeoutMsg);
    }

    clickOnLockElement() {
        // Getting lock deal
        // TODO - Change the CSS of lock deal icon
        element.all(by.css('')).first().click();
    }

    clickOnVoteTab() {
        // TODO - change the CSS to vote tab css
        element(by.css('')).click();
    }

    changeRequestStatusToReject() {
        // TODO - change the value
        element(by.cssContainingText('option', 'Reject')).click();
    }

    changeRequestStatusToConsent() {
        // TODO - change the value
        element(by.cssContainingText('option', 'Consent')).click();
    }
}
export  {MyDeals};