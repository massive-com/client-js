import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_listTickers() {
  try {
    const response = await rest.listTickers(
      {
        ticker: "<ticker>",
        type: "<type>",
        market: "<market>",
        exchange: "<exchange>",
        cusip: "<cusip>",
        cik: "<cik>",
        date: "<date>",
        search: "<search>",
        active: true,
        "ticker.gte": "<ticker.gte>",
        "ticker.gt": "<ticker.gt>",
        "ticker.lte": "<ticker.lte>",
        "ticker.lt": "<ticker.lt>",
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

example_listTickers();