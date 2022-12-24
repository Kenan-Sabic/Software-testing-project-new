import { test, expect } from '@playwright/test';
import { addItem, baseLink, baseUrl, cart, clickItem, mainLink, mLocation, seeCart, vivax } from '../../pageobjects/selectors';

test('Cart test', async ({ page }) => {
  await test.step("Load the website", async () => {
    await page.goto(baseUrl);
})

await test.step("Add item to cart", async () => {
  await page.getByRole(baseLink, { name: addItem }).click();
})

await test.step("Return to home page", async () => {
  await page.locator(mLocation).getByRole(baseLink, { name: mainLink }).click();
})

await test.step("Click on item in cart", async () => {
  await page.getByRole(baseLink, { name: clickItem }).click();
  await page.locator(cart).getByRole(baseLink, { name: vivax }).click();
})
  
await test.step("Go to cart", async () => {
  await page.getByRole(baseLink, { name: clickItem }).click();
  await page.getByRole(baseLink, { name: seeCart }).click();
})
  
});