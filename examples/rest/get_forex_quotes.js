import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getForexQuotes() {
  try {
    const response = await rest.getForexQuotes(
      {
        fxTicker: "C:EUR-USD",
        timestamp: "<timestamp>",
        "timestamp.gte": "<timestamp.gte>",
        "timestamp.gt": "<timestamp.gt>",
        "timestamp.lte": "<timestamp.lte>",
        "timestamp.lt": "<timestamp.lt>",
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

example_getForexQuotes();