import { test, expect } from '@playwright/test';
import { baseName, baseUrl, invalidRegEmail, invalidRegPass } from '../../pageobjects/selectors';

/* 
1. go to main page
2. go to moj racun
3.enter invalid email
3.enter password
4. press registration button */


test('test', async ({ page }) => {

  await test.step("Go to main page " , async()=>{

    await page.goto(baseUrl);


  })
  await test.step("Go to moj racun " , async()=>{


  await page.getByRole('link', { name: baseName }).click();


  })
  await test.step("Enter email" , async()=>{


    await page.locator('#reg_email').click();
    await page.locator('#reg_email').fill(invalidRegEmail);

  })
  await test.step("Enter password" , async()=>{

    await page.locator('#reg_password').click();
  await page.locator('#reg_password').fill(invalidRegPass);


  })
  await test.step("Hit register button" , async()=>{

    await page.getByRole('button', { name: 'Registracija' }).click();


  })


  
 
});