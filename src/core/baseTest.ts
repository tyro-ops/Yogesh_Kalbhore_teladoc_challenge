import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { UsersPage } from '../pages/usersPage';

type Pages = {
  homePage: HomePage;
  usersPage: UsersPage;
};

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  usersPage: async ({ page }, use) => {
    await use(new UsersPage(page));
  }
});

export { expect };
