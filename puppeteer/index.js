const puppeteer = require('puppeteer');
const fs = require("fs");


(async () => {
  console.time('Total execution time in')

  const url = process.argv[2];
  const browser = await puppeteer.launch({
    // headless: false,
  });
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();
  fs.writeFileSync('result/puppeteer.html', html);
  await browser.close();

  console.timeEnd('Total execution time in')
})();