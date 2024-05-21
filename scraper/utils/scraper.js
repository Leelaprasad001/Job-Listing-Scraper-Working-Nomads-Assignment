const puppeteer = require('puppeteer');

async function scrapeData(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitForSelector('.jobs-list');

    const jobs = await page.evaluate(() => {
        const jobElements = document.querySelectorAll('.jobs-list > .ng-scope');
        const jobData = [];

        jobElements.forEach(job => {
            const jobType = job.querySelector('.category')?.textContent.trim() || 'NA';
            const jobTitle = job.querySelector('h4 a')?.textContent.trim() || 'NA';
            const jobLocation = job.querySelector('.box .fa-map-marker + span')?.textContent.trim() || 'NA';
            const jobDescriptionUrl = job.querySelector('h4 a')?.href || 'NA';
            const companyName = job.querySelector('.company a')?.textContent.trim() || 'NA';
            const companyWebsite = job.querySelector('.company a')?.href || 'NA';

            jobData.push({
                jobType,
                jobTitle,
                jobLocation,
                jobDescriptionUrl,
                companyName,
                companyWebsite
            });
        });

        return jobData;
    });

    await browser.close();
    return jobs;
}

module.exports = scrapeData;
