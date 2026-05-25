const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 639, height: 1066 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.click('.mobile-menu-button');
  await page.waitForTimeout(200);
  const info = await page.evaluate(() => {
    const menu = document.getElementById('mobile-menu');
    const s = getComputedStyle(menu);
    const r = menu.getBoundingClientRect();
    return {
      hidden: menu.hidden,
      display: s.display,
      position: s.position,
      top: s.top,
      bottom: s.bottom,
      height: r.height,
      width: r.width,
      overflowY: s.overflowY,
      text: menu.innerText
    };
  });
  await page.screenshot({ path: path.join(process.cwd(), 'qa-screens', 'mobile-menu-debug.png') });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
