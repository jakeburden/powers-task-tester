const args = process.argv.slice(2);

const url = args[0];

console.log(url);

const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto(url);

  await page.keyboard.type("q");

  await page.keyboard.type("q");

  await page.keyboard.type("q");

  setInterval(async () => {
    await page.keyboard.type("q");
  }, 1000);

  page.on("console", async (msg) => {
    console.log(msg.text());
    if (msg.text().indexOf("amp") > -1) {
      const value = JSON.parse(msg.text());
      if (value.amp === 0) {
        await page.keyboard.type("e");
      } else {
        await page.keyboard.type("q");
      }
    }
  });
})();
