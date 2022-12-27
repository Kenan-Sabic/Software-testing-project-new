import { test, expect } from '@playwright/test';
import { baseLink, baseUrl, buttonFunc, combobox, divMain, filterLoc, filterName, filterText, order, phones, productCat, question, samsung, samsungLink, search, sixteen, tablist } from '../../pageobjects/selectors';

test('Search test', async ({ page }) => {
  await test.step("Load the website", async () => {
    await page.goto(baseUrl);
})

  await test.step("Search for Samsung phone", async () => {
    await page.getByLabel(search).click();
    await page.getByLabel(search).fill(samsung);
    await page.locator('form').filter({ hasText: filterName }).locator(productCat).selectOption(phones);
    await page.getByRole(buttonFunc, { name: question }).click();
  })
  
  await test.step("Test sorting features", async () => {
    await page.getByRole(tablist).getByRole(baseLink, { name: 'B' }).click();
    await page.locator('#main div').filter({ hasText: 'FiltersRezultati pretrage: “Samsung” Prikaži 16Prikaži 32Prikaži All Relevantnos' }).locator('select[name="ppp"]').selectOption('16');
    await page.goto(samsungLink);
    await page.getByRole(combobox, { name: order }).selectOption('date');
  })
 
});