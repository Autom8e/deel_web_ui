import {test, expect} from '@playwright/test'
import {HomePage} from "../models/HomePage";

test('add item to cart and verify without before each', async ({page}) => {
    const homePage = new HomePage(page)
    await homePage.goto()
    await homePage.addProduct('Sleeveless Dress', '3')
    await homePage.navigateCartPageFromPopup()
})


test('navigate to cart page from home page without before each', async ({page}) => {
    const homePage = new HomePage(page)
    await homePage.goto()
    await homePage.cartBtn.click()
    await expect(page).toHaveURL(/view_cart/i)
})