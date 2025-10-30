import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getFuturesProducts() {
  try {
    const response = await rest.getFuturesProducts(
      {
        name: "<name>",
        as_of: "<as_of>",
        trading_venue: "<trading_venue>",
        sector: "<sector>",
        sub_sector: "<sub_sector>",
        asset_class: "<asset_class>",
        asset_sub_class: "<asset_sub_class>",
        type: "<type>",
        limit: "<limit>",
        "name.search": "<name.search>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesProducts();