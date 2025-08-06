const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseurl: 'https://br.search.yahoo.com/?fr2=p:fprd,mkt:br',
    testIsolation: false
  },
});
