import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getBenzingaV1AnalystInsights() {
  try {
    const response = await rest.getBenzingaV1AnalystInsights(
      {
        date: "<date>",
        "date.any_of": "<date.any_of>",
        "date.gt": "<date.gt>",
        "date.gte": "<date.gte>",
        "date.lt": "<date.lt>",
        "date.lte": "<date.lte>",
        ticker: "<ticker>",
        "ticker.any_of": "<ticker.any_of>",
        "ticker.gt": "<ticker.gt>",
        "ticker.gte": "<ticker.gte>",
        "ticker.lt": "<ticker.lt>",
        "ticker.lte": "<ticker.lte>",
        last_updated: "<last_updated>",
        "last_updated.any_of": "<last_updated.any_of>",
        "last_updated.gt": "<last_updated.gt>",
        "last_updated.gte": "<last_updated.gte>",
        "last_updated.lt": "<last_updated.lt>",
        "last_updated.lte": "<last_updated.lte>",
        firm: "<firm>",
        "firm.any_of": "<firm.any_of>",
        "firm.gt": "<firm.gt>",
        "firm.gte": "<firm.gte>",
        "firm.lt": "<firm.lt>",
        "firm.lte": "<firm.lte>",
        rating_action: "<rating_action>",
        "rating_action.any_of": "<rating_action.any_of>",
        "rating_action.gt": "<rating_action.gt>",
        "rating_action.gte": "<rating_action.gte>",
        "rating_action.lt": "<rating_action.lt>",
        "rating_action.lte": "<rating_action.lte>",
        benzinga_firm_id: "<benzinga_firm_id>",
        "benzinga_firm_id.any_of": "<benzinga_firm_id.any_of>",
        "benzinga_firm_id.gt": "<benzinga_firm_id.gt>",
        "benzinga_firm_id.gte": "<benzinga_firm_id.gte>",
        "benzinga_firm_id.lt": "<benzinga_firm_id.lt>",
        "benzinga_firm_id.lte": "<benzinga_firm_id.lte>",
        benzinga_rating_id: "<benzinga_rating_id>",
        "benzinga_rating_id.any_of": "<benzinga_rating_id.any_of>",
        "benzinga_rating_id.gt": "<benzinga_rating_id.gt>",
        "benzinga_rating_id.gte": "<benzinga_rating_id.gte>",
        "benzinga_rating_id.lt": "<benzinga_rating_id.lt>",
        "benzinga_rating_id.lte": "<benzinga_rating_id.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getBenzingaV1AnalystInsights();