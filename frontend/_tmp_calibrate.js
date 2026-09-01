const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 412, height: 915 } });
  await page.goto('http://localhost:3000/careers', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForSelector('.careers-hero-bg', { timeout: 15000 });

  await page.evaluate(() => {
    window.scrollTo(0, 0);
    document.querySelector('.reference-hero-overlay').style.display = 'none';
    document.querySelector('.reference-hero-copy').style.display = 'none';
  });

  const positions = ['0% 20%', '5% 20%', '10% 20%', '15% 20%', '20% 20%'];
  for (const pos of positions) {
    await page.evaluate((p) => {
      window.scrollTo(0, 0);
      document.querySelector('.careers-hero-bg').style.backgroundPosition = p;
    }, pos);
    await page.waitForTimeout(100);
    const safe = pos.replace(/[% ]/g, '_');
    await page.screenshot({ path: `calib_${safe}.png`, clip: { x: 0, y: 0, width: 412, height: 734 } });
  }
  await browser.close();
})();
