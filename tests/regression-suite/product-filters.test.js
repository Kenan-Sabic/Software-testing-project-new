import { test, expect } from '@playwright/test';
import { baseTitle, brand, categoryDropDown, filterBtn, filterPage, filterPageUrl, homePage, inchBtn, inchFilterPage, logoID, OS, PCPage } from '../../pageobjects/selectors';

/*
  1. Load Laptopi, PC i oprema page
  2. Test filter button between default values (0 and 5150)
  3. Test Prikazi sve kategorije dropdown menu on the previous page
  4. Test inch filter (17'') 
  5. Return to previous page 
  6. Test brand filter (Acer in our case)
  7. Return to previous page
  8. Test Operating System filter (Windows 11 in our case)
  9. Return to previous page
  10. After testing, go back to homepage by clicking on Logo of the page
*/

//Test passed in firefox, chromium and webkit
test('Product filters test', async ({ page }) => {
  test.setTimeout(100000);

  await test.step("Load the Laptopi, PC i oprema page ", async () =>{
    await page.goto(PCPage);
  })

  await page.pause();
  
  await test.step("Test filter button between default values (0 and 5150) ", async () =>{
    await page.getByRole('button', { name: filterBtn}).click();
    await expect(page).toHaveTitle(filterPage);
  })
  
  await test.step("Test Prikazi sve kategorije dropdown menu on the previous page ", async () =>{
    await page.getByText(categoryDropDown).click();
  })
 
  await test.step("Test inch filter (17'') ", async () =>{
    await page.getByRole('link', { name: inchBtn }).click();
    await expect(page).toHaveTitle(inchFilterPage);
  })
  
  await test.step("Return to previous page ", async () =>{
    await page.goto(filterPageUrl);
  })
 
  await test.step("Test brand filter (Acer in our case)", async () =>{
    await page.getByRole('link', { name: brand }).click();
    await expect(page).toHaveTitle(filterPage);
  })
 

  await test.step("Return to previous page ", async () =>{
    await page.goto(filterPageUrl);
  })

  await test.step("Test Operating System filter (Windows 11 in our case) ", async () =>{
    await page.getByRole('link', { name: OS }).click();
    await expect(page).toHaveTitle(filterPage);
  })  

  
  await test.step("Return to previous page ", async () =>{
    await page.goto(filterPageUrl);
  })

  await test.step("After testing, go back to homepage by clicking on Logo of the page ", async () =>{
    await page.locator(logoID).getByRole('link', { name: homePage }).click();
    await expect(page).toHaveTitle(baseTitle);
  })
  
});