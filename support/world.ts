// support/world.ts
import { setWorldConstructor, IWorldOptions, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "playwright";

export interface TestWorld extends World {
  browser: Browser;
  context: BrowserContext;
  page: Page;
}

class CustomWorld extends World implements TestWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);