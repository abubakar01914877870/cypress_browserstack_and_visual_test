const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');

module.exports = defineConfig({
  watchForFileChanges: true,
  experimentalWebKitSupport: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterConfig.json",
  },

  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      getCompareSnapshotsPlugin(on, config);
    },
    specPattern: "{**/e2e/*.feature,**/Visual test/**.spec.js}",
    baseUrl: "https://www.google.com/",
    excludeSpecPattern: ["*.js"],
  },
});
