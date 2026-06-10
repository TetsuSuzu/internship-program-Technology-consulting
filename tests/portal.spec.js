// @ts-check
// スキルアップ・ポータル（handson/index.html）のUIテスト
// 「ページがちゃんと表示されているか」を自動でチェックします。
const { test, expect } = require('@playwright/test');

test('ページにタイトルが設定されている', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/.+/); // 何かしらタイトルがあればOK
});

test('大きな見出し（h1）が表示されている', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
});

test('「学べるメニュー」が1つ以上ある', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.menu-item').first()).toBeVisible();
});

test('学習チェックリストが表示されている', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.checklist li').first()).toBeVisible();
});

test('チェックボックスをクリックするとチェックが入る', async ({ page }) => {
  await page.goto('/');
  // 2番目のチェックボックス（1番目は最初からチェック済みのため）
  const box = page.locator('.checklist input[type="checkbox"]').nth(1);
  await box.check();
  await expect(box).toBeChecked();
});
