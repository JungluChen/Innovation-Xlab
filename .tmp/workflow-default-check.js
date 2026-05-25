const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1223, height: 1066 }, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'networkidle' });
  await page.locator('#workflow').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  const active = await page.evaluate(() => ({
    title: document.querySelector('[data-workflow-title]')?.textContent,
    activeIndex: Array.from(document.querySelectorAll('.workflow-stage')).findIndex((el) => el.classList.contains('active')),
    activeText: document.querySelector('.workflow-stage.active')?.innerText
  }));
  console.log(JSON.stringify(active, null, 2));
  await browser.close();
})();
