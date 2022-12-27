
/*
1. Go to univerzalno.com
2. go to moj racun
3. enter valid login info
4. go to account details
5. change password */




import { test, expect } from '@playwright/test';
import { accountUrl, passwordDummy, userEmailDummy } from '../../pageobjects/selectors';


test('test', async ({ page }) => {
  test.setTimeout(100000)
await test.step("Step1" , async()=>{

  await page.goto(accountUrl);




})
await test.step("Step1" , async()=>{

  await page.getByLabel('Korisničko ime ili email adresa *').click();

  await page.getByLabel('Korisničko ime ili email adresa *').fill(userEmailDummy);

  
})
await test.step("Step1" , async()=>{

  await page.locator('#password').click();

  await page.locator('#password').fill(passwordDummy);


  
})
await test.step("Step1" , async()=>{


  await page.getByRole('button', { name: 'Prijava' }).click();
  
})
await test.step("Step1" , async()=>{

  await page.getByRole('link', { name: ' Detalji računa' }).click();



  
})
await test.step("Step1" , async()=>{

  await page.getByLabel('Trenutna šifra (ako ne želite mijenjati ostavite prazno)').click();

  await page.getByLabel('Trenutna šifra (ako ne želite mijenjati ostavite prazno)').fill(passwordDummy);

  
})
await test.step("Step1" , async()=>{

  await page.getByLabel('Nova šifra (ako ne želite mijenjati ostavite prazno)').click();

  await page.getByLabel('Nova šifra (ako ne želite mijenjati ostavite prazno)').fill(passwordDummy);

  await page.getByLabel('Potvrdite novu šifru').click();

  await page.getByLabel('Potvrdite novu šifru').fill(passwordDummy);

  
})
await test.step("Step1" , async()=>{

  await page.getByRole('button', { name: 'Spremi promjene' }).click();

  
})


 


  
 

 

 

});