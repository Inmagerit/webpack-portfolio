module.exports = {
  // Specify the folder where your test files are located
  integrationFolder: "cypress/e2e",

  // Specify the folder where Cypress will store videos of your test runs
  videosFolder: "cypress/videos",

  // Specify the folder where Cypress will store screenshots of failed tests
  screenshotsFolder: "cypress/screenshots",

  // Trash assets before runs to ensure a clean state
  trashAssetsBeforeRuns: true,

  // Default reporter for displaying test results in the console
  reporter: "spec",

  // Default environment variables (can be overridden)
  env: {
    // You can add your own environment variables here
    // Example: MY_CUSTOM_ENV_VARIABLE: 'value'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
