import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.univerzalno.com/');
  await page.getByRole('link', { name: '| v Moj račun' }).click();
  await page.locator('#reg_email').click();
  await page.locator('#reg_email').fill('ramsi');
  await page.locator('#reg_password').click();
  await page.locator('#reg_password').fill('caminaminaee');
  await page.getByRole('button', { name: 'Registracija' }).click();
});