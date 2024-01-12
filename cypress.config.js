const { defineConfig } = require("cypress");
const moment = require('moment');

const dateTime = moment().format('YYYYMMDD_HHmmss');

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    baseUrl: 'https://elogroup.dev.br/metas/#/',
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: `cypress/reports/${dateTime}`,
    quiet: true,
    overwrite: false,
    html: true,
    json: false
  },
  screenshotsFolder: `cypress/reports/${dateTime}/evidências`,
    
    
  },
  
});
