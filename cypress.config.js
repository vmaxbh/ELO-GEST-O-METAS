const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    baseUrl: 'https://elogroup.dev.br/metas/#/',
    video: true,
    
  },
  
});
