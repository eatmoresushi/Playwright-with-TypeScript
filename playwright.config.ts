import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: 'html',
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        baseURL: 'https://www.ubank.com.au/',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
});
