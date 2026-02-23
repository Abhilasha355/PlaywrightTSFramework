// cucumber.js
module.exports = {
  default: {
    require: ["support/**/*.ts", "features/step_definitions/**/*.ts"],
    requireModule: ["ts-node/register"],
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