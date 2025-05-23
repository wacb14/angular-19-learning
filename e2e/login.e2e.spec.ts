import { test, expect } from '@playwright/test';

test('Successful login', async ({ page }) => {
  //Mock the API
  await page.route('**/api/login', async (route) => {
    const requestBody = await route.request().postDataJSON();
    if (
      requestBody.email === 'user@example.com' &&
      requestBody.password === 'password1234'
    ) {
      route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true }),
      });
    } else {
      await route.fulfill({
        status: 401,
        body: JSON.stringify({ message: 'Invalid email or password' }),
      });
    }
  });
  //Login
  await page.goto('http://localhost:4200');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password1234');
  await page.click('button[type="submit"]');
  //Verify redirection
  await expect(page).toHaveURL('http://localhost:4200/dashboard');
});

test('Unsuccessful login', async ({ page }) => {
  //Mock the API
  await page.route('**/api/login', async (route) => {
    const requestBody = await route.request().postDataJSON();
    if (
      requestBody.email === 'user@example.com' &&
      requestBody.password === 'wrongPassword'
    ) {
      await route.fulfill({
        status: 401,
        body: JSON.stringify({ message: 'Invalid email or password' }),
      });
    } else {
      route.fulfill({
        status: 200,
        body: JSON.stringify({ success: true }),
      });
    }
  });
  //Login
  await page.goto('http://localhost:4200');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'wrongPassword');
  await page.click('button[type="submit"]');
  //Verify error message
  const errorMessage = await page.locator('text=Invalid email or password');
  await expect(errorMessage).toBeVisible();
});
