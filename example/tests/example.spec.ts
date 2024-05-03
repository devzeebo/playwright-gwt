import { test, expect } from '@playwright/test';
import gwt from 'playwright-gwt';

test('has title', ({ page }) => (
  gwt({ page }, {
    given: {
      on_playwright_home,
    },
    then: {
      has_title,
    }
  })
));

test('get started link', async ({ page }) => (
  gwt({ page }, {
    given: {
      on_playwright_home,
    },
    when: {
      clicking_get_started,
    },
    then: {
      is_on_installation_page,
    }
  })
));


async function on_playwright_home(this: any) {
  await this.page.goto('https://playwright.dev/');
}

async function has_title(this: any) {
  // Expect a title "to contain" a substring.
  await expect(this.page).toHaveTitle(/Playwright/);
}

async function clicking_get_started(this: any) {
  await this.page.getByRole('link', { name: 'Get started' }).click();
}

async function is_on_installation_page(this: any) {
  // Expects page to have a heading with the name of Installation.
  await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}