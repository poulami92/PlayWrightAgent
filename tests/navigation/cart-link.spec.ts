// spec: specs/greenkart-all-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('Cart link navigates to cart page', async ({ page }) => {
    // Navigate to GreenKart homepage
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Verify homepage loaded
    await expect(page).toHaveURL(/.*seleniumPractise.*#\/$/);

    // Click Cart link in header
    await page.getByRole('link', { name: 'Cart' }).click();

    // Verify cart page is displayed
    await expect(page.locator('text=You cart is empty!')).toBeVisible();
    
    // Verify cart is active in navigation
    const cartLink = page.getByRole('link', { name: 'Cart' });
    await expect(cartLink).toHaveClass(/.*active.*/);
  });
});
