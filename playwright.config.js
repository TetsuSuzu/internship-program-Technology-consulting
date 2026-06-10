// @ts-check
// Playwright 設定ファイル
// handson/ の静的サイトを自動でサーバ起動し、tests/ のテストを実行します。
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // 各テストの共通設定
  use: {
    baseURL: 'http://localhost:8000', // page.goto('/') でここに繋がる
    trace: 'on-first-retry',          // 失敗時に再生用トレースを残す
  },

  // 使うブラウザ（初心者向けに Chromium だけに絞る）
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  // テスト実行前に handson/ を簡易サーバで自動公開する
  webServer: {
    command: 'python3 -m http.server 8000 --directory handson',
    url: 'http://localhost:8000',
    reuseExistingServer: true,
    timeout: 30 * 1000,
  },
});
