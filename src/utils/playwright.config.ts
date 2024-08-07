import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://www.way2automation.com/angularjs-protractor/webtables/',
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
  },
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  timeout: 60000,
};

export default config;
