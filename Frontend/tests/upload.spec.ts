// @ts-nocheck

import { test, expect } from '@playwright/test';


test('upload a file', async ({ page }) => {
    await page.goto('http://localhost:8888');

    page.on('filechooser', async (fileChooser) => {
        await fileChooser.setFiles(['./tests/test.jpg']);
    });

    await page.click('[data-cy="dropzone"]');
    await page.waitForSelector('[data-cy="uploadedImage"]', { visible: true });
    await expect(page.locator('[data-cy="uploadedImage"]')).toHaveCount(1);
    await page.click('[data-cy="remove-preview"]');
    await expect(page.locator('[data-cy="uploadedImage"]')).toHaveCount(0);
    await page.waitForTimeout(4000);

});
