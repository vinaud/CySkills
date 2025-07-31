const { defineConfig } = require("cypress");
const { configurePlugin } = require ('cypress-mongodb');

module.exports = defineConfig({
  env: {
    mongodb: {
      uri: 'mongodb://cypress:skills@localhost:27017',
      database: 'rockshaver',
      collection: 'collection_name'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on);
    },
    baseUrl: "http://localhost:3000",
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
