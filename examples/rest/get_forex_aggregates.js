import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getForexAggregates() {
  try {
    const response = await rest.getForexAggregates(
      {
        forexTicker: "C:EURUSD",
        multiplier: 1,
        timespan: "day",
        from: "2023-01-09",
        to: "2023-02-10",
        adjusted: true,
        sort: "asc",
        limit: 120
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getForexAggregates();