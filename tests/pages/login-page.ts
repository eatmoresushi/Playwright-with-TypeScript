import { Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(email: string, password: string) {
        const emailInput = this.page.getByRole('textbox', { name: 'E-Mail Address' });
        const passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        const loginButton = this.page.getByRole('button', { name: 'Login' });

        await emailInput.fill(email);
        await passwordInput.fill(password);
        await loginButton.click();
    }
}