import { Page, Locator } from '@playwright/test';

export class SignupPage {
    readonly page: Page;
    readonly firstnameInput: Locator;
    readonly lastnameInput: Locator;
    readonly emailInput: Locator;
    readonly phoneInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly newsletterCheckbox: Locator;
    readonly privacyPolicyCheckbox: Locator;
    readonly registerButtonSubmit: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstnameInput = page.getByRole('textbox', { name: 'First Name*' });
        this.lastnameInput = page.getByRole('textbox', { name: 'Last Name*' });
        this.emailInput = page.getByRole('textbox', { name: 'E-Mail*' });
        this.phoneInput = page.getByRole('textbox', { name: 'Telephone*' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password*' })
        this.confirmPasswordInput = page.getByRole('textbox', { name: 'Password Confirm*' })
        this.newsletterCheckbox = page.getByText('No', { exact: true });
        this.privacyPolicyCheckbox = page.getByText('I have read and agree to the');
        this.registerButtonSubmit = page.getByRole('button', { name: 'Continue' });
    }

    async fillSignupForm(firstName: string, lastName: string, email: string, phone: string, password: string) {
        await this.firstnameInput.fill(firstName);
        await this.lastnameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.phoneInput.fill(phone);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.newsletterCheckbox.click();
        await this.privacyPolicyCheckbox.click();
    }
}