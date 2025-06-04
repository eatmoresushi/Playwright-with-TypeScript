import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly myAccountButton: Locator;
    readonly registerButton: Locator;
    readonly loginButton: Locator;
    readonly dashboardButton: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.myAccountButton = page.getByRole('button', { name: /My account/i });
        this.registerButton = page.getByRole('link', { name: 'Register' });
        this.loginButton = page.getByRole('link', { name: 'Login' });
        this.dashboardButton = page.getByRole('link', { name: 'Dashboard' });
        this.searchInput = page.getByRole('textbox', { name: 'Search For Products' })
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async navigateToSignup() {
        await this.myAccountButton.hover();
        await this.registerButton.click();
    }

    async navigateToLogin() {
        await this.myAccountButton.hover();
        await this.loginButton.click();
    }

    async navigateToDashboard() {
        await this.myAccountButton.hover();
        await this.dashboardButton.click();
    }

    async searchForProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }
}