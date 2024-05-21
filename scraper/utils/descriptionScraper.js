const puppeteer = require('puppeteer');

async function scrapeDescription(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitForSelector('p');

    const description = await page.evaluate(() => {
        const paragraphs = Array.from(document.querySelectorAll('p'));
        return paragraphs.map(p => p.textContent.trim());
    });

    await browser.close();
    return description;
}

module.exports = scrapeDescription;
