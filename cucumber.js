// cucumber.js
module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["support/**/*.ts", "features/step_definitions/**/*.ts"],
    publishQuiet: true,
    format: [
      "progress",
      "@cucumber/pretty-formatter"
      // Or JSON for reports: "json:reports/cucumber-report.json"
    ],
    paths: ["features/**/*.feature"],
    parallel: 2,           // increase for more parallelism
    tags: "not @ignore"    // run all except @ignore
  }
};