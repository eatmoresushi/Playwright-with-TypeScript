import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly myAccountButton: Locator;
    readonly registerButton: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountButton = page.getByRole('button', { name: /My account/i });
        this.registerButton = page.getByRole('link', { name: 'Register' });
        this.loginButton = page.getByRole('link', { name: 'Login' });
    }

    async navigateToSignup() {
        await this.myAccountButton.hover();
        await this.registerButton.click();
    }

    async navigateToLogin() {
        await this.myAccountButton.hover();
        await this.loginButton.click();
    }
}