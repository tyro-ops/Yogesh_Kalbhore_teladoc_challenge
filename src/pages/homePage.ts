import { BasePage } from '../core/basePage';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page, 'src/pageObjects/homePage.json');
  }

  async navigateToUsersPage() {
    await this.click('usersPageLink');
  }
}
