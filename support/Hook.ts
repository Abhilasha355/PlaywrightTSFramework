// support/hooks.ts
import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
// import type { TestWorld } from "./world";

setDefaultTimeout(60_000);

Before(async function () {
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (, scenario) {
  if (scenario.result?.status === "FAILED") {
    const screenshot = await this.page.screenshot({ fullPage: true });
    // Attach screenshot to Cucumber report if using compatible formatter
    this.attach(screenshot, "image/png");
  }
  await this.context?.close();
  await this.browser?.close();
});