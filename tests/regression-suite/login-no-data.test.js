import { test, expect } from '@playwright/test';
import { accountUrl, baseUrl, loginBtn, myAccount } from '../../pageobjects/selectors';

/* 
    1. Load the page
    2. Click on Moj račun
    3. Click on Login button to sign in without data
    4. Expect alert
*/

//Test passed in webkit, chromium, firefox
test('test', async ({ page }) => {
    test.setTimeout(100000);
   
    await test.step("Load the page", async () =>{
        await page.goto(baseUrl);
    })

    await test.step("Click on Moj račun", async () =>{
        await page.getByRole('link', { name: myAccount}).click();
    })

    await test.step("Click on Login button to sign in without data", async () =>{
        await page.getByRole('button', { name: loginBtn }).click();
        await expect(page).toHaveTitle(accountUrl);
        await expect(page.getByRole('alert')).toHaveText('Greška Korisničko ime je obavezno');
        
    })

});

