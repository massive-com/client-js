import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_listStockSplits() {
  try {
    const response = await rest.listStockSplits(
      {
        ticker: "<ticker>",
        execution_date: "<execution_date>",
        reverse_split: "<reverse_split>",
        "ticker.gte": "<ticker.gte>",
        "ticker.gt": "<ticker.gt>",
        "ticker.lte": "<ticker.lte>",
        "ticker.lt": "<ticker.lt>",
        "execution_date.gte": "<execution_date.gte>",
        "execution_date.gt": "<execution_date.gt>",
        "execution_date.lte": "<execution_date.lte>",
        "execution_date.lt": "<execution_date.lt>",
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

example_listStockSplits();