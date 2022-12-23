import { test, expect } from '@playwright/test';
import {baseUrl, baseTitle, featuredItemName, addToCart, backToShopping, shopUrl} from '../../pageobjects/selectors';


/* 1.Launch the website 
   2. Scroll down the website
   3. Click on 210,00 KM 230,00 KM Xiaomi Redmi 9A Sport 32GB (2GB RAM) item
   4. Load product page 
   5. Click go to cart ("dodaj u korpu")
   6. Click on "Back to shopping"
   7. Return to shop page
   */

//Test passed in webkit, chromium and firefox
test('Featured item test', async ({ page }) => {
    test.setTimeout(100000);
    await test.step("Load the page", async () =>{
        await page.goto(baseUrl);
    })


    await test.step("Load the search results page and click on the featured product", async () =>{
        await expect(page).toHaveTitle(baseTitle);
        await page.getByRole('link', { name: featuredItemName }).click();
        
        
    })
    await test.step("Load the product page and add to cart ", async () =>{
        await page.getByRole('button', { name: addToCart }).click();

        
    })
    await test.step("Return to browsing items", async () =>{
        await page.getByRole('link', { name: backToShopping }).click();
        await expect(page).toHaveTitle(shopUrl);
           
    })


});


