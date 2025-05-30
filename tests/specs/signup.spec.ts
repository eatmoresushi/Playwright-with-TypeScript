import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { SignupPage } from '../pages/SignupPage';

test.describe('Signup Functionality', () => {
    let signupPage: SignupPage;
    test.beforeEach(async ({ page }) => {
        signupPage = new SignupPage(page);
        await signupPage.navigateToSignup();
    });

    test('should fill and submit the signup form successfully', async ({ page }) => {
        const firstName = 'John';
        const lastName = 'Doe';
        const email = `john.doe.${Date.now()}@example.com`;
        const phone = '1234567890';
        const password = 'SecurePassword123';

        await signupPage.fillSignupForm(firstName, lastName, email, phone, password);
        await signupPage.registerButtonSubmit.click();

        // Verify successful signup
        await expect(page.getByText('Your Account Has Been Created!')).toBeVisible();
    });

});
