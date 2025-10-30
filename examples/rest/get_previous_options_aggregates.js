import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getPreviousOptionsAggregates() {
  try {
    const response = await rest.getPreviousOptionsAggregates(
      {
        optionsTicker: "O:SPY251219C00650000",
        adjusted: true
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getPreviousOptionsAggregates();