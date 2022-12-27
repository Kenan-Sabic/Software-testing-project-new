import { test, expect } from '@playwright/test';
import { appleName, appleServ, baseLink, baseUrl, buttonFunc, contactName, ilidza, mainLink, mapLocator, mapLocator2, mLocation, oNama, region, servisName, viewMap, zoomIn, zoomOut, popup } from '../../pageobjects/selectors';

test('Testing header and footer links', async ({ page }) => {

  await test.step("Load the website", async () => {
      await page.goto(baseUrl);
  })

  await test.step("Load the contact page", async () => {
      await page.getByRole(baseLink, { name: contactName }).click();
  })
  
  await test.step("Load the Apple Servis page", async () => {
      await page.locator(appleServ).getByRole(baseLink, { name: appleName }).click();
  })
  
  await test.step("Load the Servis page", async () => {
     await page.getByRole(baseLink, { name: servisName }).click();
  })
  
  await test.step("Load the Home page", async () => {
      await page.locator(mLocation).getByRole(baseLink, { name: mainLink }).click();
  })

  await test.step("Load the Ilidza map and interact with it", async () => {
    await page.getByRole(baseLink, { name: oNama }).click();
    await page.getByRole(baseLink, { name: ilidza }).click();
    await page.locator(mapLocator).click();
    await page.frameLocator(mapLocator2).getByRole(buttonFunc, { name: zoomIn }).click();
    await page.frameLocator(mapLocator2).getByRole(buttonFunc, { name: zoomOut }).click();
  })

await test.step("Load the larger map", async () => {
  const [page1] = await Promise.all([
    page.waitForEvent(popup),
    page.frameLocator(mapLocator2).getByRole(baseLink, { name: viewMap}).click()
  ]);
})
  
  
});