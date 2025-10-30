import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getIndicesAggregates() {
  try {
    const response = await rest.getIndicesAggregates(
      {
        indicesTicker: "I:NDX",
        multiplier: 1,
        timespan: "day",
        from: "2023-03-13",
        to: "2023-03-24",
        sort: "asc",
        limit: 120
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getIndicesAggregates();