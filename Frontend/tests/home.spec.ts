// @ts-nocheck

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:8888');

    await page.fill('[data-cy="textarea-1"]', 'Play');
    await page.type('[data-cy="textarea-1"]', 'Playwright');
    await expect(page.locator('[data-cy="textarea-1"]')).toHaveValue('PlayPlaywright');
    await page.waitForTimeout(4000);
});