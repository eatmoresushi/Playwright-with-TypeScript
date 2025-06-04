import { test as base, expect, Page } from '@playwright/test';
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

type MyFixtures = {
    newUser: Page;
    userLoggedIn: Page;
};

export const test = base.extend<MyFixtures>({
    // Fixture for navigating to the base URL
    newUser: async ({ page }, use) => {
        await page.goto('/');
        await use(page);
    },

    // Fixture for logging in
    userLoggedIn: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await page.goto('/index.php?route=account/login');
        await loginPage.login(testData.users[0].username, testData.users[0].password);
        await expect(page).toHaveURL(/.*account/);
        await page.goto('/');
        await use(page);
    },
});