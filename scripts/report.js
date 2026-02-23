// scripts/report.js
const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',          // folder where cucumber.json is stored
  reportPath: 'reports/html',  // output html report path
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest'
    },
    device: 'Local Test Machine',
    platform: {
      name: 'windows',
      version: '11'
    }
  }
});