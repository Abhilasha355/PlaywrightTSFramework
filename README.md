
What is the playwright? 

What is the playwright Advantage and Limitation 

Playwright Architecture 

 Playwright Vs Cypress 

 Playwright Vs Selenium WebDriver 

 Software Requirement 

 Install NodeJS &VS Code 

Install Playwright in the VS Code 

Folder Structure 

Test Explorer 

Run Test 

Run Test in Google Chrome & Microsoft Edge Browser 

Record test in VS Code 

Generate HTML Test Report 

Record at Cursor 

Generate HTML Test Report 

Record at Cursor 

Commonly used Terminologies 

First Playwright Automation Test 

Pick Locator in VS Code 

Install Playwright from Command Prompt 

Run Test in Headless mode 

Run Test in UI Mode 

Run Specific Spec File 

 Run Test on Different Browser 

 Code Gen Record and Playtest 

Locators, Assertion, Hooks and Annotations 

Locator 

Screenshots 

Hooks 

Add Screenshots to HTML Report when Failed 

====================================================================== 

What is Playwright? 

Playwright is an open‑source automation testing tool which is used for end-to-end modern web mobile applications in headed or headless mode. 

Playwright is mainly used for: 

End‑to‑end (E2E) testing 

UI automation 

Web scraping 

Browser testing across devices and browsers 

Advantages: 

Cross‑browser support: Chromium (Chrome, Edge), Firefox, WebKit (Safari) 

Cross Platform Testing: Windows, Linux and MacOS 

 Multiple language support: JavaScript / TypeScript, Python, Java, C# 

Built‑in auto‑wait (no need for manual sleeps) 

Mobile/Web Devices-Mobile Emulator of Google Chrome for Android and Mobile Safari 

Tracing 

Reporting 

Dynamic wait and Assertion 

Faster and Reliable 

Powerful Tool-Code Gen, Playwright Inspector and Trace Viewer 

No Flaky Test 

 

 

Disadvantages /Limitations: 

 

Playwright does not have a big community compared to Selenium WebDriver 

It does not work on legacy browser such IE11 

It is not possible to test with real device mobile apps 

 

Playwright Architecture: 

 

 

Client: In the client side our automation script is written in the different languages such as JavaScript, python, C#, .NET etc. 

Server: The server communicates between client and web browser engines such as chrome, Firefox, edge, etc. Playwright uses CDP to communicate with Chromium or chrome browser, similarly playwright has implemented CDP to communicate with other browser such as Firefox web kit etc. 

WebSocket Protocol: WebSocket connection is established to the server from client by using process called Web Socket handshake, WebSocket sends response as soon as it gets request in real time. Connection will not be terminated until unless connection is closed by either client or server. 

CDP (chrome Dev Tools Protocol): 

Client and Server Communication: When test is triggered client converts automation test into JSON format and sends to server over WebSocket Protocol 

Playwright communicated all the request over single WebSocket protocol connection 

Test Failure and Flaky test flakiness is less as because executing all tests over single WebSocket connection. 

 

 

 

 

 

 

 

 

 

Playwright Vs Cypress: 

 

 

 

Playwright Vs Selenium: 

 

Software Requirement: 

Node JS 

Visual Studio Code (VS Code) 

JavaScript 

Operating System-Window/MAC/LINUX 

 

          Installing NodeJS Link: 

       Node.js — Download Node.js® 

 

        Installing Visual Studio Code Link: 

        Download Visual Studio Code - Mac, Linux, Windows 

 

 

Installing Playwright in VS code : 

Step 1: create new empty folder 

Step2: Navigate to that folder in VS code 

 

Step3: Navigate to Extension Ctrl+shift+X and Type “Playwright Test for VS Code” 

 

Step4: CTRL+Shift+P, enter “Install Playwright” 

Step 5: Select Playwright configuration and click on “OK” 

 

 

 

Step 6: Install Playwright & Select Configurations 

npm init playwright@latest 

Playwright will download the browsers needed as well as create the following files. 

node_modules- contains all .js files 

Playwright.config.js-contains configuration for running test 

Package.json- contains dependencies 

package-lock.json 

tests/ example.spec.js 

tests-examples/ demo-todo-app.spec.js 

 

 

 

Run Test:  

run test option on left side of test in file example.spec.js 

 

 

Test Explorer:  

Click on test explorer icon 

 

Run Test on Google Chrome and Microsoft Edge Browsers: 

 

 

 

 

 

Recording Test in Visual Studio Code: 

 

 

 

 

 

 

 

 

 

Generate HTML Test Report: 

 

Commonly used Terminologies in playwright Test: 

Require? 

To include a playwright module or to use a playwright module in the current JavaScript file. 

Async & await? 

Async is a function; await is valid inside async function only. 

Zero or more await expressions can be written inside the sync function. 

When each time async functions are called, it returns a new promise value. Which will be resolved with the value returned by the async function or rejected with an exception. 

Page? 

It is a browser context object, using context we can open URL & interact with browser. 

Expect? 

It is a library for JavaScript &typescript intended for use with test runners such as Jest or playwright Test. 

It lets you write better assertions for end-to-end testing or component testing 

 

First Playwright Automation Test: 

//include playwright module 

//write the test 

//go to URL 

//scripts 

//validate 

 

 

 

test ('Validate Dashboard Page', async ({page }) => {  

  

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  

  

await page.getByRole('textbox', { name: 'Username' }).click();  

  

await page.getByRole('textbox', { name: 'Username' }).fill('Admin');  

  

await page.getByRole('textbox', { name: 'Username' }).press('Tab');  

  

await page.getByRole('textbox', { name: 'Password' }).fill('admin123');  

  

await page.getByRole('button', { name: 'Login' }).click();  

  

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');  

  

await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();    

  

}); 

 

 

 

 

 

Pick locator in Playwright: 

 

 

 

 

Install playwright using command prompt: 

 

Step 1: Enter ‘npm init playwright@latest’ 

Step 2: Select Playwright configurations. 

 

 

 

 

Run Test in Headless mode : 

Step 1: Enter ‘npx playwright test –headless' 

 

 

 

Run test in UI mode from CMD: 

Step 1: Enter ‘npx playwright test –headed' 

 

 

 

Run  Specific Playwright Spec File: 

Step 1: Enter ‘npx playwright test –-headed demo.spec.js' 

 

 

 

 

 

 

 

Run test on different  Browser: 

Step 1: Enter ‘npx playwright test –project=chromiun' 

 

 

 

Record Test Using CodeGen: 

Step 1: Enter ‘npx playwright codegen' 

Step2:Open Playwright inspector tool window 

Step3:Open a Browser with   

 

Locator, Assertion, Hooks, Annotations & Actions: 

Locator- Identify Web Element 

1.By Role 

Example: await page.getByRole(‘link’, {name: 'value’}). click (); 

2. By Label 

Example: Await page.getByLabel(value, {exact: true}). fill(‘value’); 

3.By Alt Text 

Example: await page.getByAlttext(‘text’). click (); 

4.By Test Id 

Example: Await page.getByTestId(‘value’). fill (‘tester talk’); 

5.By Text 

Example: await page.getByRole(‘link’, {name: 'value’}). click (); 

6.By Title 

Example: Await page.getByTitle(‘cypress by testers talk’). click (); 

7.Xpath 

Example:await page.locator(“xpath=//*[@attr=’value’]”).click(); 

8.CSS Selector 

Example: await page.locator(“css=/*[@attr=’value’]”). click (); 

9.By Placeholder 

await page.ByPlaceholder(’value’). click (); 

 

 

 

 

Screenshots: 

 

1.Element Screenshot 

2.Page Screenshot 

3.Full Page Screenshot 

 

//Inclue playwright module 

import { test, expect } from '@playwright/test'; 

 

//write a test 

test('take screenshot', async ({ page }) => { 

  //go to the url 

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 

  await page.locator("input[placeholder='Username']").fill('Admin'); 

  //element screenshot 

  await page.locator("input[placeholder='Username']").screenshot({path:'./screenshot/element.png'}); 

  await page.waitForTimeout(5000); 

  await page.getByRole('textbox', { name: 'Username' }).press('Tab'); 

  await page.getByRole('textbox', { name: 'Password' }).fill('admin123'); 

  await page.getByRole('textbox', { name: 'Password' }).press('Tab'); 

  //page screenshot 

  await page.screenshot({path:'./screenshot/page.png'}); 

  //full page screenshot 

  await page.screenshot({path:'./screenshot/fullpage.png',fullPage:true}); 

  await page.getByRole('button', { name: 'Login' }).click(); 

  await page.waitForTimeout(5000); 

  }); 

 

 

 

 

Add Screenshots to HTML Report when Test Failed: 

 

 

 

Hooks: 

Block of code executing before your tests, or after executing the tests 

1)BeforeEach() 

2)BeforeAll() 

3)AfterEach() 

4)AfterAll() 

//Inclue playwright module 

import { test, expect } from '@playwright/test'; 

 

test.beforeEach('run before each test', async({page})=>{ 

    console.log('running before each test......'); 

 //go to the url 

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 

}) 

 

 

test.beforeAll('run before all test', async({})=>{ 

    console.log('running before all test......'); 

  

}) 

 

test.afterEach('run After each test', async({page})=>{ 

    console.log('running After each test......'); 

  

}) 

 

test.afterAll('run after all test', async({})=>{ 

    console.log('running after all test......'); 

  

}) 

 

 

 

 

 

 

 

------------------------------------------------------------------------------------------------------------------ Dropdown List, Frames & Date Picker: 

Dropdown List: 

1)Value 

2)Visible Text 

 

 

 

 

 

 

Mouse Clicks, Keyboards Actions, Drag and Drop: 

 

 

 

Assertions-Hard and Soft Assertions: 

(Actions | Playwright) 

 

1)URL-toHaveURL() 

2)title-toHaveTitle() 

3)text-toHavetext() 

4)Editable-oBeEditable() 

5)Visible-toBeVisisble() 

6)Enable-toBeEnabled() 

7)Disabled-toBeDisabled() 

8)Empty-toBeEmpty() 

9)Count-toHaveCount() 

 

 

Watch Mode: 

Run this cmd: npx playwright test - -ui 

Click on the watch it will display the status whether is run or not. 

Test Traces, Actions metadata, Console, Log, Network: 

 

 

 

 

=========================================================================Playwright doc link: 

Actions | Playwright 

 

Repo Link: 

https://github.com/Abhilasha355/PlaywrightTSFramework.git 

 

 

 

 

 

 

 

 

 

 

 

 

 

 