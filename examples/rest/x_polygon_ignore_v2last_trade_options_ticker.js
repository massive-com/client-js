import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_xMassiveIgnoreV2LastTradeOptionsTicker() {
  try {
    const response = await rest.xMassiveIgnoreV2LastTradeOptionsTicker();
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_xMassiveIgnoreV2LastTradeOptionsTicker();