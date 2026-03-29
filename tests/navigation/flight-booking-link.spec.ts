// spec: specs/greenkart-all-tests.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('Flight Booking link opens external page', async ({ context, page }) => {
    // Navigate to GreenKart homepage
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Verify homepage loaded
    await expect(page).toHaveURL(/.*seleniumPractise.*#\/$/);

    // Wait for new page (tab) when clicking external link
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.getByRole('link', { name: 'Flight Booking' }).click()
    ]);

    // Verify new page opens with correct URL
    await expect(newPage).toHaveURL(/.*dropdownsPractise\/$/);
    
    // Verify the new page page title contains expected text
    await expect(newPage).toHaveTitle(/.*Dropdown.*/i);
  });
});
