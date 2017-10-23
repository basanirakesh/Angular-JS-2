import {browser, by, element, protractor} from  "protractor";
import {ElementFinder, ElementArrayFinder} from 'protractor';

class MyDeals {
    panelCount: ElementArrayFinder;
    downloadingImage: ElementFinder;
    tableHeadCount: ElementArrayFinder;
    voteLink: ElementFinder;
    voteGrid: ElementFinder;
    tableGrid: ElementFinder;
    tableAscending: ElementFinder;
    tableDescending: ElementFinder;
    checkPopup: ElementArrayFinder;

    constructor() {
        this.panelCount = element.all(by.css('.panel-default'));
        this.downloadingImage = element(by.id('downloadGridDocBtn-Img'));
        this.tableHeadCount = element.all(by.css('th'));
        this.voteLink = element(by.linkText('Voting'));
        this.voteGrid = element(by.className('k-grid-norecords-template'));
        this.tableGrid = element(by.css('.k-grid-content'));
        this.tableAscending = element(by.css('[aria-sort="ascending"]'));
        this.tableDescending = element(by.css('[aria-sort="descending"]'));
        this.checkPopup = element.all(by.className('k-dialog'));
    }

    dealPageUrl() {
        browser.get('');
    }

    browserWaitForElements(element, text: string, nSecs: number) {
        let expectedConditions = protractor.ExpectedConditions;
        let timeoutMS = nSecs;
        let timeoutMsg = text;
        browser.wait(expectedConditions.visibilityOf(element), timeoutMS, timeoutMsg);
    }

    getWarningElement(): ElementFinder {
        return element.all(by.css('.fa-exclamation-triangle')).first();

        /*var warningDealIconElement = null;
        this.panelCount.then(function (arrayOfElements) {
                for (let i = 0; i < arrayOfElements.length; i++) {
                    let panel = this.panelCount.get(i);
                    var warningDealIconElement = panel.element(by.css('.fa-exclamation-triangle'));
                    warningDealIconElement.isPresent().then(present => {
                        if (present) {
                            return warningDealIconElement;
                        }
                    });
                }
            }
        );
        return warningDealIconElement;*/
    }

    getCancelButton(): ElementFinder {
        return element.all(by.cssContainingText('.btn', 'Cancel')).filter(function (elements, index) {
            return elements.isDisplayed().then(function (isDisplayed) {
                if(isDisplayed) {
                    return true;
                }
            });
        }).first();

        /*var cancelButton = null;
        this.panelCount.then(function (arrayOfElements) {
                for (let x = 0; x < arrayOfElements.length; x++) {
                    var tempCancelButton = this.checkPopup.get(x).element(by.cssContainingText('.btn', 'Cancel'));
                    tempCancelButton.isDisplayed().then(function (isDisplayed) {
                            if (isDisplayed) {
                                return tempCancelButton;
                            }
                        }
                    );
                }
            }
        );
        return cancelButton;*/
    }

    getPrivateButton(): ElementFinder {
        return element.all(by.cssContainingText('.btn', 'Private')).filter(function (elements, index) {
            return elements.isDisplayed().then(function (isDisplayed) {
                if(isDisplayed) {
                    return true;
                }
            });
        }).first();

        /*var privateButton = null;
        this.panelCount.then(function (arrayOfElements) {
                for (let x = 0; x < arrayOfElements.length; x++) {
                    var tempPrivateButton = this.checkPopup.get(x).element(by.cssContainingText('.btn', 'Private'));
                    tempPrivateButton.isDisplayed().then(function (isDisplayed) {
                            if (isDisplayed) {
                                return tempPrivateButton;
                            }
                        }
                    );
                }
            }
        );
        return privateButton;*/
    }

    getPublicButton(): ElementFinder {
        return element.all(by.cssContainingText('.btn', 'Public')).filter(function (elements, index) {
            return elements.isDisplayed().then(function (isDisplayed) {
                if(isDisplayed) {
                    return true;
                }
            });
        }).first();

        /*var publicButton = null;
        this.panelCount.then(function (arrayOfElements) {
                for (let x = 0; x < arrayOfElements.length; x++) {
                    var tempPublicButton = this.checkPopup.get(x).element(by.cssContainingText('.btn', 'Cancel'));
                    tempPublicButton.isDisplayed().then(function (isDisplayed) {
                            if (isDisplayed) {
                                return tempPublicButton;
                            }
                        }
                    );
                }
            }
        );
        return publicButton;*/
    }
}
export  {MyDeals};