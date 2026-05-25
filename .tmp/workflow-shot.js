const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1244, height: 1066 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.locator('#workflow').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(process.cwd(), 'qa-screens', 'workflow-comment-fixed.png') });
  await browser.close();
})();
