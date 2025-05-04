import { Page, Locator} from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly headerMenu: Locator;
    constructor(page: Page) {
        this.page = page;
        this.headerMenu = page.getByRole('banner').getByRole('link');
    }
}