const { chromium } = require('playwright-core');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1500, height: 1200 } });
  await page.goto('http://localhost:3000/marriage-counseling-oklahoma-city', { waitUntil: 'networkidle' });
  const el = await page.$('.marriage-challenges');
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const box = await el.boundingBox();
  await page.screenshot({ path: process.env.SCRATCH + '/challenges-v2.png', clip: box });
  await browser.close();
})();
