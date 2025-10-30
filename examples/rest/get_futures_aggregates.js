import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getFuturesAggregates() {
  try {
    const response = await rest.getFuturesAggregates(
      {
        ticker: "GCJ5",
        resolution: "1min",
        window_start: "<window_start>",
        limit: "<limit>",
        "window_start.gte": "<window_start.gte>",
        "window_start.gt": "<window_start.gt>",
        "window_start.lte": "<window_start.lte>",
        "window_start.lt": "<window_start.lt>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesAggregates();