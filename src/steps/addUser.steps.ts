import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { UsersPage } from '../pages/usersPage';
import { loadJson } from '../core/jsonLoader';

let page: Page;
let homePage: HomePage;
let usersPage: UsersPage;
const testData = loadJson('testData.json');

Given('I open the web application', async function () {
  await page.goto('/');
  homePage = new HomePage(page);
  usersPage = new UsersPage(page);
});

When('I navigate to the users page', async function () {
  await homePage.navigateToUsersPage();
});

When('I add a new user', async function () {
  const user = testData.users[0];
  await usersPage.addUser(user.firstName, user.lastName, user.userName, user.password, user.email, user.phone);
});

Then('I should see the user in the table', async function () {
  const user = testData.users[0];
  const isUserPresent = await usersPage.isUserPresent(user.userName);
  expect(isUserPresent).toBe(true);
});
