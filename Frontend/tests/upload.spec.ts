import { expect, test } from '@playwright/test';
import FontColor from '../src/Enums/fontColor.enum';
import FontSize from '../src/Enums/fontSize.enum';

test.describe('upload a file', async () => {
    test.beforeEach(async ({ page }) => {
        // Go to the starting url before each test.
        await page.goto('http://localhost:8888');
    });

    test('should upload a file and remove it', async ({ page }) => {
        page.on('filechooser', async (fileChooser) => {
            await fileChooser.setFiles(['./tests/test.jpg']);
        });

        await page.click('[data-cy="dropzone"]');
        await page.waitForSelector('[data-cy="uploadedImage"]');
        await expect(page.locator('[data-cy="uploadedImage"]')).toHaveCount(1);
        await page.click('[data-cy="remove-preview"]');
        await expect(page.locator('[data-cy="uploadedImage"]')).toHaveCount(0);
    });

    test('add watermark to the uploaded image and change font properties', async ({ page }) => {
        page.on('filechooser', async (fileChooser) => {
            await fileChooser.setFiles(['./tests/test.jpg']);
        });

        await page.click('[data-cy="dropzone"]');
        await page.waitForSelector('[data-cy="uploadedImage"]');

        await page.type('[data-cy="textarea-1"]', 'Playwright');

        await expect(page.locator('[data-cy="watermark-preview-0"]')).toHaveCount(1);
        await expect(page.locator('[data-cy="watermark-preview-0"]')).toHaveText('Playwright');

        await page.selectOption('[data-cy="fontSizeOptions"]', { label: 'Enorme' });
        await expect(page.locator('[data-cy="watermark-preview-0"]')).toHaveClass(RegExp(FontSize.HUGE));
        await page.click('[data-cy="fontWhite"]');
        await expect(page.locator('[data-cy="watermark-preview-0"]')).toHaveClass(RegExp(FontColor.WHITE));

        await page.dragAndDrop('[data-cy="watermark-preview-0"]', '[data-cy="uploadedImage"]', { targetPosition: { x: 1000, y: 0 } });
        await page.click('[data-cy="uploadedImage"]');
        for (let i = 0; i < 13; i += 1) {
            page.keyboard.press('ArrowRight');
        }

        await page.dragAndDrop('[data-cy="watermark-preview-0"]', '[data-cy="uploadedImage"]', { targetPosition: { x: 1600, y: 100 } });
        await page.click('[data-cy="uploadedImage"]');

        for (let i = 0; i < 13; i += 1) {
            page.keyboard.press('ArrowLeft');
        }
        await page.waitForTimeout(1000);

        // TODO This is not working, find out why
        // await expect(page.locator('[data-cy="watermark-preview-0"]')).not.toBeVisible();
    });
});
