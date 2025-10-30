import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_deprecatedGetHistoricCryptoTrades() {
  try {
    const response = await rest.deprecatedGetHistoricCryptoTrades(
      {
        from: "BTC",
        to: "USD",
        date: "2020-10-14",
        offset: "<offset>",
        limit: 100
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_deprecatedGetHistoricCryptoTrades();