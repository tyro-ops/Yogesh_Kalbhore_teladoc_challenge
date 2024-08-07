import { BasePage } from '../core/basePage';
import { Page } from '@playwright/test';

export class UsersPage extends BasePage {
  constructor(page: Page) {
    super(page, 'src/pageObjects/usersPage.json');
  }

  async addUser(firstName: string, lastName: string, userName: string, password: string, email: string, phone: string) {
    await this.click('addUserButton');
    await this.fill('firstNameInput', firstName);
    await this.fill('lastNameInput', lastName);
    await this.fill('userNameInput', userName);
    await this.fill('passwordInput', password);
    await this.fill('emailInput', email);
    await this.fill('phoneInput', phone);
    await this.click('saveButton');
  }

  async deleteUser(userName: string) {
    await this.page.click(`tr:has-text("${userName}") >> ${this.selectors['deleteButton']}`);
    await this.click('confirmDeleteButton');
  }

  async isUserPresent(userName: string): Promise<boolean> {
    return await this.page.isVisible(`tr:has-text("${userName}")`);
  }
}
