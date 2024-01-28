const { defineConfig } = require("cypress");
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  filePreprocessor: webpack(),
  experimentalModuleVariables: true,
  moduleFileExtensions: ["js", "mjs"],
});
