import { test, expect } from '@playwright/test';

test('should redirect to login page', async ({ page }) => {
  await page.route('**/api/login', async (route) => {
    await route.fulfill({
      status: 200,
    });
  });

  await page.goto('http://localhost:4200');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password1234');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('http://localhost:4200/dashboard');
});

test('should show an error message', async ({ page }) => {
  await page.route('**/api/login', async (route) => {
    await route.fulfill({
      status: 401,
      body: JSON.stringify({ message: 'Invalid email or password' }),
    });
  });

  await page.goto('http://localhost:4200');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'wrongPassword');
  await page.click('button[type="submit"]');
  const errorMessage = await page.locator('text=Invalid email or password');
  await expect(errorMessage).toBeVisible();
});
