import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.univerzalno.com/');
  await page.getByRole('link', { name: '| v Moj račun' }).click();
  await page.getByLabel('Korisničko ime ili email adresa *').click();
  await page.getByLabel('Korisničko ime ili email adresa *').fill('Ismaraganovic69@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('caminaminaee');
  await page.getByRole('button', { name: 'Prijava' }).click();
});