// spec: specs/greenkart-all-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('Top Deals link navigates to offers page', async ({ page }) => {
    // Navigate to GreenKart homepage
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Verify homepage loaded with products
    await expect(page).toHaveURL(/.*seleniumPractise.*#\/$/);
    
    // Click Top Deals link
    await page.getByRole('link', { name: 'Top Deals' }).click();

    // Verify offers page is displayed
    await expect(page).toHaveURL(/.*#\/offers$/);
    
    // Verify offers table is visible
    await expect(page.locator('table')).toBeVisible();
  });
});
