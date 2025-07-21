import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getFuturesMarketStatuses() {
  try {
    const response = await rest.getFuturesMarketStatuses(
      {
        "product_code.any_of": "<product_code.any_of>",
        product_code: "<product_code>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesMarketStatuses();