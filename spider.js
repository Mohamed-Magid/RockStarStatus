const puppetter = require("puppeteer");
const parser = require('./helpers/parser');

const spider = async (req, res) => {
    // Initialize browser
    try {
      const browser = await puppetter.launch({
        headless: true, // set false to see chrome page
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
      });
      const page = await browser.newPage();
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
      );
      page.setViewport({
        isMobile: false,
        hasTouch: false,
        width: 1366,
        height: 768
      });
      await page.goto('https://support.rockstargames.com/servicestatus');
      await page.waitForSelector('.service');
      const fullInfo = await page.$$eval('.platform', elements => elements.map(element => element.getAttribute('aria-label')));
      await browser.close();

      if (fullInfo.length < 1)
        throw new Error();

      return parser(fullInfo);
    }
    catch (e) {
      return {
        error: {
          msg: 'Something went wrong'
        }
      }
    }
}
module.exports = spider;