import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getFedV1TreasuryYields() {
  try {
    const response = await rest.getFedV1TreasuryYields(
      {
        date: "<date>",
        "date.any_of": "<date.any_of>",
        "date.gt": "<date.gt>",
        "date.gte": "<date.gte>",
        "date.lt": "<date.lt>",
        "date.lte": "<date.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFedV1TreasuryYields();