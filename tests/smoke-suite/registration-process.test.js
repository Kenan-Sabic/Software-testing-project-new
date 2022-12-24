import { test, expect } from '@playwright/test';
import {baseUrl, myAccount, regBtn, regMailID, regPassID, accountTitle} from '../../pageobjects/selectors';


/* 1.Launch the website 
   2. Click on Moj račun
   3. Fill placeholders for new email and password on the right under Registracija
   4. Click Registracija button
   5. Expect 'Moj račun - univerzalno.com' page
   6. Expect 'Moj račun' heading. If there is no 'Moj račun' heading, test will fail, meaning that we tried to register with existing e-mail
   otherwise it will pass, meaning we created new account.
   */
//Test passed in chromiun, firefox and webkit(in headed mode)
//NOTE: For some reason in headless mode in webkit it fails
test('Registration process test', async ({ page }) => {
    test.setTimeout(100000);
    const locator = page.getByRole('heading', { name: 'Moj račun' });
    await test.step("Load the page", async () =>{
        await page.goto(baseUrl);
    })

    await test.step("Click on Moj račun", async () =>{
        await page.getByRole('link', { name: myAccount}).click();
    })

    await test.step("Fill placeholders for registration (e-mail and password", async () =>{
        await page.locator(regMailID).click();
        //Note: each time test is run e-mail should be changed to non-existing one
        await page.locator(regMailID).fill('dummy012245@gmail.com');
        await page.locator(regPassID).click();
        await page.locator(regPassID).fill('123456789aeBd.31!');
        await page.pause();
    })

    await test.step("Click on Registracija button to register and proceed to Moj račun page", async () =>{
        await page.getByRole('button', { name: regBtn }).click();
        await expect(page).toHaveTitle(accountTitle);
        await expect(locator).toContainText('Moj račun');
        
    })
  
  
  
});