import { test, expect } from '@playwright/test';

test('Select Carrot and Tomato and verify they are added to cart', async ({ page }) => {
  // Navigate to the GreenKart website
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  // Find and click ADD TO CART for Carrot using a more specific selector
  const carrotCard = page.locator('div').filter({ has: page.getByRole('heading', { name: 'Carrot - 1 Kg' }) });
  await carrotCard.getByRole('button', { name: 'ADD TO CART' }).first().click();

  // Wait a moment for the UI to update
  await page.waitForTimeout(500);

  // Find and click ADD TO CART for Tomato using a more specific selector
  const tomatoCard = page.locator('div').filter({ has: page.getByRole('heading', { name: 'Tomato - 1 Kg' }) });
  await tomatoCard.getByRole('button', { name: 'ADD TO CART' }).first().click();

  // Wait a moment for the UI to update
  await page.waitForTimeout(500);

  // Click on Cart link
  await page.locator('a >> img[alt="Cart"]').click();

  // Wait for cart page to load
  await page.waitForLoadState('networkidle');

  // Verify Carrot is in the cart
  await expect(page.getByText('Carrot - 1 Kg')).toBeVisible();

  // Verify Tomato is in the cart
  await expect(page.getByText('Tomato - 1 Kg')).toBeVisible();
});
