import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getGroupedCryptoAggregates() {
  try {
    const response = await rest.getGroupedCryptoAggregates(
      {
        date: "2023-01-09",
        adjusted: true
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getGroupedCryptoAggregates();