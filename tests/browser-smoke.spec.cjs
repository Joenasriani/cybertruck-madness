const { test, expect } = require('@playwright/test');

const base = 'http://127.0.0.1:4173/';
const viewports = [
  { name: 'desktop', viewport: { width: 1280, height: 800 }, isMobile: false },
  { name: 'mobile-portrait', viewport: { width: 390, height: 844 }, isMobile: true },
  { name: 'mobile-landscape', viewport: { width: 844, height: 390 }, isMobile: true },
];

for (const config of viewports) {
  test(config.name + ' credits, game UI and browser initialization', async ({ browser }) => {
    const context = await browser.newContext({
      viewport: config.viewport,
      isMobile: config.isMobile,
      hasTouch: config.isMobile,
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    const runtimeErrors = [];
    page.on('pageerror', err => runtimeErrors.push(err.message));

    await page.goto(base, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#credits-toggle-btn')).toBeVisible();
    await expect(page.locator('#speed')).toContainText('KM/H');

    // The world uses a 250K-vertex terrain mesh and 15K instanced trees.
    // Allow slow CI machines time to create the WebGL scene.
    await expect(page.locator('#loading')).toBeHidden({ timeout: 100000 });
    await expect(page.locator('#canvas-container canvas')).toBeVisible();

    await page.locator('#credits-toggle-btn').click();
    const dialog = page.locator('#credits-overlay');
    await expect(dialog).toBeVisible();
    await expect(dialog).toHaveAttribute('aria-hidden', 'false');
    await expect(dialog).toContainText('CYBERTRUCK MADNESS');
    await expect(dialog).toContainText('MIT License');
    await expect(dialog).toContainText('Awaiting first verified community model.');

    const bounds = await page.locator('.credits-panel').boundingBox();
    expect(bounds, 'Credits panel needs a visible bounding box').not.toBeNull();
    expect(bounds.x).toBeGreaterThanOrEqual(-1);
    expect(bounds.y).toBeGreaterThanOrEqual(-1);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(config.viewport.width + 1);
    expect(bounds.y + bounds.height).toBeLessThanOrEqual(config.viewport.height + 1);

    await page.locator('#credits-close-btn').click();
    await expect(dialog).toBeHidden();
    await page.locator('#credits-toggle-btn').click();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();

    expect(runtimeErrors, 'No uncaught browser exceptions').toEqual([]);
    await context.close();
  });
}
