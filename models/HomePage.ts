import {expect, Locator, Page} from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly viewCardBtnOnPopup: Locator;
    readonly cartBtn: Locator;


    constructor(page: Page) {
        this.page = page;
        this.viewCardBtnOnPopup = page.getByRole('link', {name: 'View Cart'})
        this.cartBtn  = page.getByRole('link', {name: 'Cart'})
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/')
    }

    async addProduct(productName: string, productId: string) {
        await this.page.getByText(productName).first().hover()
        await this.page.locator('(//a[@data-product-id=' + productId + '])[1]').click()
        await expect(this.page.locator('.modal-content')).toContainText('Your product has been added to cart.')
    }

    async navigateCartPageFromPopup() {
        await this.viewCardBtnOnPopup.click()
        await expect(this.page).toHaveURL(/view_cart/i);
    }
}
