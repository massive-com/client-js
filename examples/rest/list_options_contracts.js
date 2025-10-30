import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_listOptionsContracts() {
  try {
    const response = await rest.listOptionsContracts(
      {
        underlying_ticker: "<underlying_ticker>",
        ticker: "<ticker>",
        contract_type: "<contract_type>",
        expiration_date: "<expiration_date>",
        as_of: "<as_of>",
        strike_price: "<strike_price>",
        expired: "<expired>",
        "underlying_ticker.gte": "<underlying_ticker.gte>",
        "underlying_ticker.gt": "<underlying_ticker.gt>",
        "underlying_ticker.lte": "<underlying_ticker.lte>",
        "underlying_ticker.lt": "<underlying_ticker.lt>",
        "expiration_date.gte": "<expiration_date.gte>",
        "expiration_date.gt": "<expiration_date.gt>",
        "expiration_date.lte": "<expiration_date.lte>",
        "expiration_date.lt": "<expiration_date.lt>",
        "strike_price.gte": "<strike_price.gte>",
        "strike_price.gt": "<strike_price.gt>",
        "strike_price.lte": "<strike_price.lte>",
        "strike_price.lt": "<strike_price.lt>",
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

example_listOptionsContracts();