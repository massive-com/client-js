import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getCryptoSMA() {
  try {
    const response = await rest.getCryptoSMA(
      {
        cryptoTicker: "X:BTCUSD",
        timestamp: "<timestamp>",
        timespan: "day",
        window: 50,
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

example_getCryptoSMA();