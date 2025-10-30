import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getSnapshots() {
  try {
    const response = await rest.getSnapshots(
      {
        ticker: "<ticker>",
        type: "<type>",
        "ticker.gte": "<ticker.gte>",
        "ticker.gt": "<ticker.gt>",
        "ticker.lte": "<ticker.lte>",
        "ticker.lt": "<ticker.lt>",
        "ticker.any_of": "NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX",
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

example_getSnapshots();