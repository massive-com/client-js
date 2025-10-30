import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getFuturesContractDetails() {
  try {
    const response = await rest.getFuturesContractDetails(
      {
        ticker: "ESU0",
        as_of: "<as_of>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesContractDetails();