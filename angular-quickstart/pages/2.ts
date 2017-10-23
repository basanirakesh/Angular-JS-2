import {browser, by, element, protractor} from  "protractor";
import {ElementFinder, ElementArrayFinder} from 'protractor';

class MyDeals {
    panelCount: ElementArrayFinder;
    documentCount: ElementArrayFinder;

    constructor() {
        this.panelCount = element.all(by.css('.panel-default'));
        // Getting document count
        // TODO - Change the CSS of document element
        this.documentCount = element.all(by.css(''));
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

    selectMultipleDocuments() {
        // Selecting multiple documents
        // TODO - Change the CSS of check box
        element.all(by.css('')).then(function(items) {
            items[0].click();
            items[1].click();
        });
    }

    downloadDocuments() {
        // Downloading documents
        // TODO - Change the CSS of downloading icon
        element(by.css('')).click();
    }
}
export  {MyDeals};