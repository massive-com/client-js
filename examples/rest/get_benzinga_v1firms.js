import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getBenzingaV1Firms() {
  try {
    const response = await rest.getBenzingaV1Firms(
      {
        benzinga_id: "<benzinga_id>",
        "benzinga_id.any_of": "<benzinga_id.any_of>",
        "benzinga_id.gt": "<benzinga_id.gt>",
        "benzinga_id.gte": "<benzinga_id.gte>",
        "benzinga_id.lt": "<benzinga_id.lt>",
        "benzinga_id.lte": "<benzinga_id.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getBenzingaV1Firms();