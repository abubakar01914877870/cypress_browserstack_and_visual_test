Feature: E2e test - Download tests

  Scenario: Download Chrome from the hero's Homepage
    Given an user is at the chrome website on platform and web_browser and location
    When the user clicks in the Download button in the hero section
    And users accepts the modal button
    Then the user is redirected to the chrome thank you page
    And the site downloads Google Chrome