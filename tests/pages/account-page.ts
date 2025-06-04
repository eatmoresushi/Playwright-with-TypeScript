import { Page, Locator } from '@playwright/test';

export class AccountPage {
    readonly page: Page;
    readonly editInfoButton: Locator;
    readonly firstNameInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.editInfoButton = page.getByRole('link', { name: /Edit your account/i });
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name *' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async navigateToEditInfo() {
        await this.editInfoButton.click();
    }

    async updateFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
        await this.continueButton.click();
    }
}