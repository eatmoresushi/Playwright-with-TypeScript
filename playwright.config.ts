import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: 'html',
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        baseURL: 'https://ecommerce-playground.lambdatest.io/',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});
