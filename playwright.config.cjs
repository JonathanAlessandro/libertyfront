const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  use: { baseURL: 'http://127.0.0.1:8083', browserName: 'chromium', channel: 'msedge' },
  webServer: { command: 'node scripts/serve.mjs', url: 'http://127.0.0.1:8083', env: { PORT: '8083' }, reuseExistingServer: !process.env.CI },
});
