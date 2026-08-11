const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 } });
  await page.goto('http://localhost:3000/video-gallery', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);

  const secondThumbTitle = await page.locator('.video-gallery-thumb-title').nth(1).innerText();
  console.log('clicking thumb with title:', secondThumbTitle);

  await page.locator('.video-gallery-thumb').nth(1).click();
  await page.waitForTimeout(800);

  const featuredTitle = await page.locator('.growth-video-title').innerText();
  console.log('featured player title after click:', featuredTitle);

  await page.screenshot({ path: `C:/Users/ECO5DI~1/AppData/Local/Temp/claude/c--Users-ECO5DIGITAL-Desktop-openarms/4d671607-ed54-40f7-8d23-cba04bb364fc/scratchpad/gallery-after-click.png` });

  await browser.close();
})();
