import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getCryptoTrades() {
  try {
    const response = await rest.getCryptoTrades(
      {
        cryptoTicker: "X:BTC-USD",
        timestamp: "<timestamp>",
        "timestamp.gte": "<timestamp.gte>",
        "timestamp.gt": "<timestamp.gt>",
        "timestamp.lte": "<timestamp.lte>",
        "timestamp.lt": "<timestamp.lt>",
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

example_getCryptoTrades();