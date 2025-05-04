import { Page, Locator} from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly loginButton: Locator;
    readonly usernameInput: Locator;
    readonly nextButton: Locator;
    readonly passwordInput: Locator;
    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.getByRole('link', { name: 'Log in' });
        this.usernameInput = page.getByRole('textbox', { name: 'What\'s your username?' });
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.passwordInput = page.getByRole('textbox', { name: 'What\'s your password?' });
    }

    async navigate() {
        await this.loginButton.click();
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.nextButton.click();
        // await this.passwordInput.fill(password);
    }
}