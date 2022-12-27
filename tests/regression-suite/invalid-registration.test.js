import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step("Go to univerzalno.com", async () => {
    await page.goto('https://www.univerzalno.com/');
})

await test.step("Go to my account", async () => {
  await page.getByRole('link', { name: '| v Moj račun' }).click();
})
 
await test.step("Enter email and password", async () => {
  await page.locator('#reg_email').click();
  await page.locator('#reg_email').fill('ramsi');
  await page.locator('#reg_password').click();
  await page.locator('#reg_password').fill('caminaminaee');
  await page.getByRole('button', { name: 'Registracija' }).click();
})

  
});