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

 

## How to run tests 
It is advisable to open project directly in Visual studio, therefore in terminal cd path will be automatically set up. 
### All tests 
If one wants to run entire smoke test suite, it can be done by following command:
```bash
npx playwright test 
```
Most tests will fail this way, because of the slow and buggy nature of the website. It is advisable to run tests individually.
### Single test 
If one wants to run single test, it can be done by following command:
```bash
npx playwright test <filename> 
```
Example for popular-purchase.test.ts:
```bash
npx playwright test search-items.test.js
```
