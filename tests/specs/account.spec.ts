import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { SignupPage } from '../pages/signup-page';
import { HomePage } from '../pages/home-page';
import { LoginPage } from '../pages/login-page';
import { AccountPage } from '../pages/account-page';
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
    let accountPage: AccountPage;
    test.beforeEach(({ page }) => {
        signupPage = new SignupPage(page);
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        accountPage = new AccountPage(page);
    });

    test('should fill and submit the signup form successfully', async ({ newUser }) => {
        const firstName = 'John';
        const lastName = 'Doe';
        const email = `john.doe.${Date.now()}@example.com`;
        const phone = '1234567890';
        const password = 'SecurePassword123';

        await homePage.navigateToSignup();
        await signupPage.fillSignupForm(firstName, lastName, email, phone, password);
        await signupPage.registerButtonSubmit.click();

        await expect(newUser.getByText('Your Account Has Been Created!')).toBeVisible();
    });

    test('should login successfully with valid credentials', async ({ newUser }) => {
        await homePage.navigateToLogin();
        await loginPage.login(testData.users[0].username, testData.users[0].password);
        await expect(newUser).toHaveURL(/.*account/);
    });

    test('existing user should be able to update their account information', async ({ userLoggedIn }) => {
        await homePage.navigateToDashboard();
        await accountPage.navigateToEditInfo();
        await accountPage.updateFirstName(`update.${Date.now()}`);
        await expect(userLoggedIn.getByText('Success: Your account has')).toBeVisible();
    });
});
