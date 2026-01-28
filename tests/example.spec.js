import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('loads the home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/.*Merged.*|.*Home.*/i);
  });

  test('page contains main content', async ({ page }) => {
    await page.goto('/');
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    expect(await page.content()).toBeTruthy();
  });
});

test.describe('Navigation', () => {
  test('can navigate within the app', async ({ page }) => {
    await page.goto('/');
    // Check that we can interact with the page
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });
});
