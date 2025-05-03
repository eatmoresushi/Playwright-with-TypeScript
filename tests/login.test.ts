import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
test.describe('Login Functionality', () => {
    let loginPage: LoginPage;
    test.beforeEach(async ({ page }) => {
        // Initialize the LoginPage class
        loginPage = new LoginPage(page);
        // Navigate to the base URL
        await page.goto('https://www.ubank.com.au/');
    });

    test('should show error message with invalid credentials', async ({ page }) => {
        const username = 'test@example.com';
        const password = '12345678';
        // Navigate to the login page
        await loginPage.navigate();
        // Perform login with invalid credentials
        await loginPage.login(username, password);
        // Check for the error message
        // const errorMessage = page.getByText('Unauthorized');
        // const errorMessage = page.getByText('Hmm, that doesn\'t look quite right. Try again or reset your password.');
        const errorMessage = page.getByText('Something seems to have gone wrong. Please try again.');
        await expect(errorMessage).toBeVisible();
    });

    test('should show error message with malformed email', async ({ page }) => {
        const username = 'testexample.com';
        await loginPage.navigate();
        await loginPage.login(username, '');
        // Check for the error message
        const errorMessage = page.getByText('Please enter a valid email or mobile number.');
        await expect(errorMessage).toBeVisible();
    });
});
