import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_deprecatedGetHistoricStocksTrades() {
  try {
    const response = await rest.deprecatedGetHistoricStocksTrades(
      {
        ticker: "AAPL",
        date: "2020-10-14",
        timestamp: "<timestamp>",
        timestampLimit: "<timestampLimit>",
        reverse: true,
        limit: 10
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_deprecatedGetHistoricStocksTrades();