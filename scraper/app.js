const scrapeData = require('./utils/scraper');
const scrapeDescription = require('./utils/descriptionScraper');
const companyWebsiteScraper = require('./utils/companyWebsiteScraper');
const AWS = require('aws-sdk');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const url = "https://www.workingnomads.com/jobs";

AWS.config.update({ region: 'us-east-1' });
const dynamodb = new AWS.DynamoDB.DocumentClient();

async function main() {
    try {
        const scrapedData = await scrapeData(url);

        for (let i = 0; i < scrapedData.length; i++) {
            const job = scrapedData[i];

            const Description = await scrapeDescription(job.jobDescriptionUrl);
            job.Description = Description;

            const { logoUrl, description: companyDescription } = await companyWebsiteScraper(job.companyWebsite);
            job.companyLogoUrl = logoUrl;
            job.companyDescription = companyDescription;

            job.id = uuidv4(); // Using uuidv4 from uuid package
            const params = {
                TableName: 'Jobs',
                Item: job
            };
            await dynamodb.put(params).promise();
        }
        fs.writeFileSync('scrapedData.json', JSON.stringify(scrapedData, null, 2));
        console.log(scrapedData);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
