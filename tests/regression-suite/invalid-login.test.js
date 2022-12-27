import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step("Go to univerzalno.com", async () => {
    await page.goto('https://www.univerzalno.com/');
})
  
await test.step("Open my account", async () => {
  await page.getByRole('link', { name: '| v Moj račun' }).click();
})

await test.step("Type in email and password", async () => {
  await page.getByLabel('Korisničko ime ili email adresa *').click();
  await page.getByLabel('Korisničko ime ili email adresa *').fill('Ismaraganovic69@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('caminaminaee');
  await page.getByRole('button', { name: 'Prijava' }).click();
  await expect(page.getByRole('alert')).toHaveText('Nepoznata email adresa. Provjerite ponovo ili probajte sa vašim korisničkim imenom.');
})

  
});