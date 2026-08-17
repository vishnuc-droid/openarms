const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  for (const [w, h, name] of [[1920, 1080, 'desktop-xl'], [1440, 900, 'desktop'], [1200, 900, 'laptop'], [1024, 900, 'laptop-sm'], [820, 1100, 'tablet'], [390, 1100, 'mobile']]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto('http://localhost:3000/marriage-counseling-oklahoma-city', { waitUntil: 'networkidle' });
    await page.waitForTimeout(300);
    await page.screenshot({ path: `C:/Users/ECO5DI~1/AppData/Local/Temp/claude/c--Users-ECO5DIGITAL-Desktop-openarms/c3831cdf-2a59-4306-a0c1-51872a3a075f/scratchpad/hero-fullscreen-${name}.png` });
    await page.close();
  }
  await browser.close();
})();
