const { Given, Then, When } = require("cypress-cucumber-preprocessor/steps");

import utils from '../utilities';
import uiDownloadPage from '../elements/download-page-elements';

Given("an user is at the chrome website on platform and web_browser and location", () => {
    cy.visit(Cypress.config().baseUrl + "chrome");
  });

  When("the user clicks in the Download button in the hero section", () => {
    utils.getById(uiDownloadPage.DOWNLOAD_BUTTON).click();
  });

  When("users accepts the modal button", () => {
    //This download process not ask to click any accepts the modal button
    return true;
  });

  Then("the user is redirected to the chrome thank you page", () => {
    utils.getByClass(uiDownloadPage.THANKYOU_TEXT).contains('Thanks');
  });

  Then("the site downloads Google Chrome", () => {
    cy.wrap(sessionStorage.getItem('directDownloadUri')).should('exist');
    cy.wrap(sessionStorage.getItem('downloadUri')).should('exist');
  });


