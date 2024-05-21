const puppeteer = require('puppeteer');

async function companyWebsiteScraper(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto(url);

        // Try to scrape logo URL with a shorter timeout
        let logoUrl = null;
        try {
            await page.waitForSelector('.company-attributes-logo img', { timeout: 5000 });
            logoUrl = await page.evaluate(() => {
                const imgElement = document.querySelector('.company-attributes-logo img');
                return imgElement ? imgElement.src : null;
            });
        } catch (error) {
            logoUrl = null;
        }

        // Try to scrape description with a shorter timeout
        let description = [];
        try {
            await page.waitForSelector('p', { timeout: 5000 });
            description = await page.evaluate(() => {
                const paragraphs = Array.from(document.querySelectorAll('p'));
                return paragraphs.map(p => p.textContent.trim());
            });
        } catch (error) {
            description = [];
        }

        return { logoUrl, description };
    } catch (error) {
        return { logoUrl: null, description: [] };
    } finally {
        await browser.close();
    }
}

module.exports = companyWebsiteScraper;
