# Test automatization for Univerzalno.com
 

In this repository, automatization smoke test suite can be found. 
Smoke and regression test suite is created for the following website: https://www.univerzalno.com/
Website is an online store for selling technology

 

## Technologies

 

### Visual Studio - IDE 
To install Visual Studio use following [website](https://visualstudio.microsoft.com/)

 

### Node.js and node package manager (npm)
To install Node.js use following [website](https://nodejs.org/en/)
To install node package manager, in project terminal write:
```bash
npm install
```


### Playwright 
To install Playwright use the following npm command in project terminal
```bash
npm install playwright@latest
```
alternatively you may use the VSCode extension: [website](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)


 

## How to run tests 
It is advisable to open project directly in Visual studio, therefore in terminal cd path will be automatically set up. 
### All tests 
If one wants to run entire test suite, it can be done by following command:
```bash
npx playwright test 
```
### Test suites
If one wants to run a specific set of tests , it can be done by the following command:
```bash
npx playwright test tests/<directory-name>/
```
Most tests will fail this way, because of the slow and buggy nature of the website. It is advisable to run tests individually.
### Single test 
If one wants to run single test, it can be done by following command:
```bash
npx playwright test <filename> 
```
Example for search-items.js:
```bash
npx playwright test search-items.test.js
```
Note: some tests need to run in headed mode in order to test the site properly. If a test fails try adding --headed to the command, like this:
```bash
npx playwright test search-items.test.js --headed
```
