import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Functionality', () => {
    let homePage: HomePage;
    test.beforeEach(async ({ page }) => {
        // Initialize the HomePage class
        homePage = new HomePage(page);
        // Navigate to the base URL
        await page.goto('https://www.ubank.com.au/');
    });

    test('header menu should contains following options', async ({ page }) => {
        await expect(homePage.headerMenu.first()).toHaveAccessibleName('Return to homepage');
        await expect(homePage.headerMenu.filter({ hasText: /^(?!\s*$).+/ })).toHaveText([
            'Everyday money',
            'Home loans',
            'Our banking app',
            'Why us',
            'Get help',
            'Log in',
        ]);
    });
});