import { test, expect } from '@playwright/test';
import { baseUrl, buttonFunc, closeFunc, dialogue, guestCont, hours, startChat } from '../../pageobjects/selectors';

test('Chat test', async ({ page }) => {
  await test.step("Load the website", async () => {
    await page.goto(baseUrl);
})

await test.step("Testing the chat features", async () => {
  await page.frameLocator(dialogue).getByRole(buttonFunc, { name: startChat }).click();
  await page.frameLocator(dialogue).getByRole(buttonFunc, { name: guestCont }).click();
  await page.frameLocator(dialogue).getByRole(buttonFunc, { name: hours }).click();
  await page.frameLocator(dialogue).getByRole(buttonFunc, { name: closeFunc }).click();
})
  
});