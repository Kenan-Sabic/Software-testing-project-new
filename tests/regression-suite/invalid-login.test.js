import { test, expect } from '@playwright/test';
import { baseName, baseUrl, invalidLoginEmail , invalidLoginPassword } from '../../pageobjects/selectors';


/* Test steps
1. Go to univerzalno.com
2. Go to moj racun
3. Enter email
4. Enter Password
5. Click the login button
6. Witness the results 
7. ~
*/

test('test', async ({ page }) => {

 await test.step ("Load website" , async ()=>{

  await page.goto(baseUrl);

  
 })
 await test.step ("Go to moj racun" , async ()=>{

  await page.getByRole('link', { name: baseName }).click();
  

  
 })
 await test.step ("Enter email" , async ()=>{

  await page.getByLabel('Korisničko ime ili email adresa *').click();

  await page.getByLabel('Korisničko ime ili email adresa *').fill(invalidLoginEmail);


  
 })
 await test.step ("enter password" , async ()=>{

    
  await page.locator('#password').click();

  await page.locator('#password').fill(invalidLoginPassword);

  
 })
 await test.step ("click login button" , async ()=>{


  await page.getByRole('button', { name: 'Prijava' }).click();
  
 })
  

  


  
});