import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_listNews() {
  try {
    const response = await rest.listNews(
      {
        ticker: "<ticker>",
        published_utc: "<published_utc>",
        "ticker.gte": "<ticker.gte>",
        "ticker.gt": "<ticker.gt>",
        "ticker.lte": "<ticker.lte>",
        "ticker.lt": "<ticker.lt>",
        "published_utc.gte": "<published_utc.gte>",
        "published_utc.gt": "<published_utc.gt>",
        "published_utc.lte": "<published_utc.lte>",
        "published_utc.lt": "<published_utc.lt>",
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

example_listNews();