import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getForexSMA() {
  try {
    const response = await rest.getForexSMA(
      {
        fxTicker: "C:EURUSD",
        timestamp: "<timestamp>",
        timespan: "day",
        adjusted: true,
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

example_getForexSMA();