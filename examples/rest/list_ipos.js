import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_listIPOs() {
  try {
    const response = await rest.listIPOs(
      {
        ticker: "<ticker>",
        us_code: "<us_code>",
        isin: "<isin>",
        listing_date: "<listing_date>",
        ipo_status: "<ipo_status>",
        "listing_date.gte": "<listing_date.gte>",
        "listing_date.gt": "<listing_date.gt>",
        "listing_date.lte": "<listing_date.lte>",
        "listing_date.lt": "<listing_date.lt>",
        order: "<order>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_listIPOs();