import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { HomePage } from '../pages/home-page';

test.describe('Search Functionality', () => {
    let homePage: HomePage;
    test.beforeEach(({ page }) => {
        homePage = new HomePage(page);
    });

    test('should search for a product and display results', async ({ userLoggedIn }) => {
        await homePage.searchForProduct('iPhone');
        await expect(userLoggedIn.getByRole('link', { name: 'iPhone', exact: true }).first()).toBeVisible();
    });
});