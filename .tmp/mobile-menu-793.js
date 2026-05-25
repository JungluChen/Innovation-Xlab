const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 793, height: 1066 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.click('.mobile-menu-button');
  await page.waitForTimeout(200);
  const info = await page.evaluate(() => {
    const menu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.mobile-nav');
    const s = getComputedStyle(menu);
    const r = menu.getBoundingClientRect();
    const ns = getComputedStyle(nav);
    return {
      hidden: menu.hidden,
      display: s.display,
      position: s.position,
      top: s.top,
      left: s.left,
      right: s.right,
      height: r.height,
      width: r.width,
      overflowY: s.overflowY,
      navPosition: ns.position,
      menuHTML: menu.innerHTML
    };
  });
  await page.screenshot({ path: path.join(process.cwd(), 'qa-screens', 'mobile-menu-793.png') });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
