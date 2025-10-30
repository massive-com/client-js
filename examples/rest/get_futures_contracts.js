import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getFuturesContracts() {
  try {
    const response = await rest.getFuturesContracts(
      {
        product_code: "<product_code>",
        first_trade_date: "<first_trade_date>",
        last_trade_date: "<last_trade_date>",
        as_of: "<as_of>",
        active: "<active>",
        type: "<type>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesContracts();