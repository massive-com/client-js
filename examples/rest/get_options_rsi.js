import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getOptionsRSI() {
  try {
    const response = await rest.getOptionsRSI(
      {
        optionsTicker: "O:SPY241220P00720000",
        timestamp: "<timestamp>",
        timespan: "day",
        adjusted: true,
        window: 14,
        series_type: "close",
        expand_underlying: "<expand_underlying>",
        order: "desc",
        limit: "<limit>",
        "timestamp.gte": "<timestamp.gte>",
        "timestamp.gt": "<timestamp.gt>",
        "timestamp.lte": "<timestamp.lte>",
        "timestamp.lt": "<timestamp.lt>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getOptionsRSI();