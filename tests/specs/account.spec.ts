import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { SignupPage } from '../pages/signup-page';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import testDataJson from '../data/test-data.json';

interface User {
    username: string;
    password: string;
}

interface TestData {
    users: User[];
}

const testData = testDataJson as TestData;

test.describe('Account Functionality', () => {
    let signupPage: SignupPage;
    let homePage: HomePage;
    let loginPage: LoginPage;
    test.beforeEach(({ page }) => {
        signupPage = new SignupPage(page);
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
    });

    test('should fill and submit the signup form successfully', async ({ page }) => {
        const firstName = 'John';
        const lastName = 'Doe';
        const email = `john.doe.${Date.now()}@example.com`;
        const phone = '1234567890';
        const password = 'SecurePassword123';

        await homePage.navigateToSignup();
        await signupPage.fillSignupForm(firstName, lastName, email, phone, password);
        await signupPage.registerButtonSubmit.click();

        await expect(page.getByText('Your Account Has Been Created!')).toBeVisible();
    });

    test('should login successfully with valid credentials', async ({ page }) => {
        await homePage.navigateToLogin();
        await loginPage.login(testData.users[0].username, testData.users[0].password);
        await expect(page).toHaveURL(/.*account/);
    });
});
