import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getCryptoOpenClose() {
  try {
    const response = await rest.getCryptoOpenClose(
      {
        from: "BTC",
        to: "USD",
        date: "2023-01-09",
        adjusted: true
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getCryptoOpenClose();