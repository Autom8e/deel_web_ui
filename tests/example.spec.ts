// import {test, expect} from '@playwright/test';
//
// test('has title', async ({page}) => {
//     await page.goto('https://playwright.dev/');
//
//     // Expect a title "to contain" a substring.
//     await expect(page).toHaveTitle(/Playwright/);
// });
//
// test('get started link', async ({page}) => {
//     await page.goto('https://playwright.dev/');
//
//     // Click the get started link.
//     await page.getByRole('link', {name: 'Get started'}).click();
//
//     // Expects page to have a heading with the name of Installation.
//     await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
// });
//
// test.beforeEach(async ({page}) => {
//     await page.goto('https://www.google.com');
// })
//
// test('description of the test', {
//     tag: '@first tag'
// }, async ({page}) => {
//     await page.goto('https://www.google.com');
//     const searchField = page.getByRole('combobox', { name: /ara/i });
//     await searchField.fill('first test case with tag')
//     await searchField.press('Enter')
//     await page.waitForTimeout(4000)
// })