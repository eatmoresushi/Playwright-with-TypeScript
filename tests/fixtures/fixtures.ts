import { test as base } from '@playwright/test';

export const test = base.extend({
    // Override the default page fixture to always go to home page
    page: async ({ page }, use) => {
        // Now just navigate to relative path
        await page.goto('/');
        await use(page);
    }
});