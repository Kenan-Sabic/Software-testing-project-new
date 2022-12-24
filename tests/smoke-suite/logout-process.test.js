import { test, expect } from '@playwright/test';
import { accountUrl, accountUrl1, baseLink, baseName, baseTitle, baseUrl, buttonFunc, helloText, login, loginFunc, logOut, logOutText, passwordDummy, passwordHolder, userEmailDummy, userName_email } from '../../pageobjects/selectors';

// ### 1. Launch the website
// ### 2. Go to my account ("Moj račun")
// ### 3. Click and Fill both e-mail and password
// ### 4. Click on sign in ("Prijava")
// ### 5. Verify that user ends up on my account ("Moj račun") page with its username displayed

test('Login test', async ({ page }) => {
 
    await test.step("Load the website", async () => {
        await page.goto(baseUrl);
        await expect (page).toHaveTitle(baseTitle);
        
    })
    
    await test.step("Go to my account (Moj račun)", async () => {
        await page.getByRole(baseLink, { name: baseName }).click();
        await page.getByText(loginFunc).click();
    
    })

    await test.step("Click and fill both e-mail and password", async () =>{
        await page.getByLabel(userName_email).click();
        await page.getByLabel(userName_email).fill(userEmailDummy);
        await page.locator(passwordHolder).click();
        await page.locator(passwordHolder).fill(passwordDummy);
    })

    await test.step("Click on sign in (Prijava)", async() =>{
        await page.getByRole(buttonFunc, { name: login }).click();
    })
   

    await test.step("Click on logout (Odjava)", async() =>{
       await page
        .getByRole('paragraph')
        .filter({ hasText: logOutText })
        .getByRole('link', { name: logOut })
        .click();
        
    })


    //test.setTimeout(15000);

});