import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getOptionsChain() {
  try {
    const response = await rest.getOptionsChain(
      {
        underlyingAsset: "EVRI",
        strike_price: "<strike_price>",
        expiration_date: "<expiration_date>",
        contract_type: "<contract_type>",
        "strike_price.gte": "<strike_price.gte>",
        "strike_price.gt": "<strike_price.gt>",
        "strike_price.lte": "<strike_price.lte>",
        "strike_price.lt": "<strike_price.lt>",
        "expiration_date.gte": "<expiration_date.gte>",
        "expiration_date.gt": "<expiration_date.gt>",
        "expiration_date.lte": "<expiration_date.lte>",
        "expiration_date.lt": "<expiration_date.lt>",
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

example_getOptionsChain();