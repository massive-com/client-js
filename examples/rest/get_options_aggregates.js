import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getOptionsAggregates() {
  try {
    const response = await rest.getOptionsAggregates(
      {
        optionsTicker: "O:SPY251219C00650000",
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

example_getOptionsAggregates();