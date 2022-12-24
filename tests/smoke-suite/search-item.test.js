import { test, expect } from '@playwright/test';
import {baseUrl,searchBar, searchTerm,searchTitle, productTitle, 
    shopTitle, productName} from '../../pageobjects/selectors';




/* 1.Launch the website 
   2. Click on the search bar 
   3. Enter "Samsung" into the search
   4. Hit enter to search
   5. Click on "Samsung Galaxy A04 64GB (4GB RAM)" which should be first result
   6. Click on "dodaj u korpu"
   7. Click on "Back to shopping"
   */

   
   
test('Search test and add to cart test', async ({ page }) => {
    test.setTimeout(100000)
    await test.step("Load the page", async () =>{

        await page.goto(baseUrl);


    })

    await test.step("Click search bar", async () =>{

        await page.getByLabel(searchBar).click();

        
    })
    await test.step("Enter the search term", async () =>{

        await page.getByLabel(searchBar).fill(searchTerm);

        
    })
    await test.step("Hit enter to search", async () =>{

        await page.getByLabel(searchBar).press('Enter');

        
    })
    await test.step("Load the search results page and click on the selected product", async () =>{
        await expect(page).toHaveTitle(searchTitle);
        await page.getByRole('link', { name: productName }).click();

        
    })
    await test.step("Load the product page and add to cart ", async () =>{
        await expect(page).toHaveTitle(productTitle);
        await page.getByRole('button', { name: 'Dodaj u korpu' }).click();

        
    })
    await test.step("return to browsing items", async () =>{
        await page.getByRole('link', { name: 'Back to Shopping' }).click();
       
        
    })

 await test.step('Go back to shop', async () =>{


     await expect(page).toHaveTitle(shopTitle);


 })


 
 

});