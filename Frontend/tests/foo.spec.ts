// @ts-nocheck

import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:8888');
  
  await page.fill('[data-cy="textarea-1"]','Play')
  // await page.waitForTimeout(4000)

  await page.type('[data-cy="textarea-1"]','Playwright')
  // await page.waitForTimeout(4000)
  const value = await page.evaluate(el => el.value, await page.$('[data-cy="textarea-1"]'))

  await expect(value).toBe('PlayPlaywright');
});