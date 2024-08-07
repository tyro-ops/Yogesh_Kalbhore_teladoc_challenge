import { Page } from '@playwright/test';
import { loadJson } from './jsonLoader';

export class BasePage {
  protected page: Page;
  protected selectors: { [key: string]: string };

  constructor(page: Page, selectorsPath: string) {
    this.page = page;
    this.selectors = loadJson(selectorsPath);
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async click(selector: string) {
    await this.page.click(this.selectors[selector]);
  }

  async fill(selector: string, text: string) {
    await this.page.fill(this.selectors[selector], text);
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(this.selectors[selector]);
  }
}
