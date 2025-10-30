import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getBenzingaV1Analysts() {
  try {
    const response = await rest.getBenzingaV1Analysts(
      {
        benzinga_id: "<benzinga_id>",
        "benzinga_id.any_of": "<benzinga_id.any_of>",
        "benzinga_id.gt": "<benzinga_id.gt>",
        "benzinga_id.gte": "<benzinga_id.gte>",
        "benzinga_id.lt": "<benzinga_id.lt>",
        "benzinga_id.lte": "<benzinga_id.lte>",
        benzinga_firm_id: "<benzinga_firm_id>",
        "benzinga_firm_id.any_of": "<benzinga_firm_id.any_of>",
        "benzinga_firm_id.gt": "<benzinga_firm_id.gt>",
        "benzinga_firm_id.gte": "<benzinga_firm_id.gte>",
        "benzinga_firm_id.lt": "<benzinga_firm_id.lt>",
        "benzinga_firm_id.lte": "<benzinga_firm_id.lte>",
        firm_name: "<firm_name>",
        "firm_name.any_of": "<firm_name.any_of>",
        "firm_name.gt": "<firm_name.gt>",
        "firm_name.gte": "<firm_name.gte>",
        "firm_name.lt": "<firm_name.lt>",
        "firm_name.lte": "<firm_name.lte>",
        full_name: "<full_name>",
        "full_name.any_of": "<full_name.any_of>",
        "full_name.gt": "<full_name.gt>",
        "full_name.gte": "<full_name.gte>",
        "full_name.lt": "<full_name.lt>",
        "full_name.lte": "<full_name.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getBenzingaV1Analysts();