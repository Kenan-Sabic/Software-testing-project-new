
/*
1. Go to univerzalno.com
2. go to moj racun
3. enter valid login info
4. go to account details
5. change password */




import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  test.setTimeout(100000)
  await page.goto('https://www.univerzalno.com/moj-racun/');
  await page.getByLabel('Korisničko ime ili email adresa *').click();
  await page.getByLabel('Korisničko ime ili email adresa *').fill('kenansabipsn@gmail.com');
  await page.locator('#password').click();
  await page.locator('#password').fill('YYMk7GL8jcjmkn4');
  await page.getByRole('button', { name: 'Prijava' }).click();
  await page.getByRole('link', { name: ' Detalji računa' }).click();
  await page.getByLabel('Trenutna šifra (ako ne želite mijenjati ostavite prazno)').click();
  await page.getByLabel('Trenutna šifra (ako ne želite mijenjati ostavite prazno)').fill('YYMk7GL8jcjmkn4');
  await page.getByLabel('Nova šifra (ako ne želite mijenjati ostavite prazno)').click();
  await page.getByLabel('Nova šifra (ako ne želite mijenjati ostavite prazno)').fill('YYMk7GL8jcjmkn4');
  await page.getByLabel('Potvrdite novu šifru').click();
  await page.getByLabel('Potvrdite novu šifru').fill('YYMk7GL8jcjmkn4');
  await page.getByRole('button', { name: 'Spremi promjene' }).click();

});