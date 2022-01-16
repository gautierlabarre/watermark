import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        viewport: { width: 1600, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'on',
        trace: 'on',
    },
};
export default config;
