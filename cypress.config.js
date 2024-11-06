const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      return config;
    },
    specPattern: ['**/*.feature','**/apiTest/*/*.js'],
    chromeWebSecurity: false,
    failOnStatusCode: false,
    numTestsKeptInMemory: 3,
    defaultCommandTimeout: 10000,
    env: {
      snapshotOnly: true,
      requestMode: true
    },
  },

});