# 📊Job Listing Scraper for Working Nomads

This project aims to develop a scraper for the [Working Nomads](https://www.workingnomads.com/jobs) website. The scraper will extract job listings, detailed job descriptions, and comprehensive company information. The scraped data will be output in JSON format to the console and stored optimally in a DynamoDB database.

# 📋Requirements

### 1. Language & Libraries
- NodeJS with Puppeteer

### 2. Functionality
- 🔍 Scrape job listings from the homepage and navigate to the detailed job description page for each listing.
- 💼 Extract all available details about the job, including:
  - Job title
  - Company name
  - Job location
  - Description URL
  - Detailed description (from the individual job's page)
- 💼 Extract comprehensive company information where available, including:
  - Company website
  - Company logo URL
  - Company description
  - Company funding information
  - Any other information that’s available on the page

### 3. Performance

### 4. Data Storage
- 💾 Store the scraped data optimally in a DynamoDB database.

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   https://github.com/Leelaprasad001/Job-Listing-Scraper-Working-Nomads-Assignment

2. **Run the Commands**
   ```bash
   npm install
   cd database
   node createTable.js
   cd..
   node app.js

## 🖼️ Output

![console output](https://github.com/Leelaprasad001/Job-Listing-Scraper-Working-Nomads-Assignment/assets/76583080/3b9fbf81-f319-4f67-9142-f60a63a0f492)



![JSON output](https://github.com/Leelaprasad001/Job-Listing-Scraper-Working-Nomads-Assignment/assets/76583080/4c66770f-65d7-49f6-946c-9ff3aa94d6df)
