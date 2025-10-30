import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getBenzingaV1Ratings() {
  try {
    const response = await rest.getBenzingaV1Ratings(
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
        importance: "<importance>",
        "importance.any_of": "<importance.any_of>",
        "importance.gt": "<importance.gt>",
        "importance.gte": "<importance.gte>",
        "importance.lt": "<importance.lt>",
        "importance.lte": "<importance.lte>",
        last_updated: "<last_updated>",
        "last_updated.any_of": "<last_updated.any_of>",
        "last_updated.gt": "<last_updated.gt>",
        "last_updated.gte": "<last_updated.gte>",
        "last_updated.lt": "<last_updated.lt>",
        "last_updated.lte": "<last_updated.lte>",
        rating_action: "<rating_action>",
        "rating_action.any_of": "<rating_action.any_of>",
        "rating_action.gt": "<rating_action.gt>",
        "rating_action.gte": "<rating_action.gte>",
        "rating_action.lt": "<rating_action.lt>",
        "rating_action.lte": "<rating_action.lte>",
        price_target_action: "<price_target_action>",
        "price_target_action.any_of": "<price_target_action.any_of>",
        "price_target_action.gt": "<price_target_action.gt>",
        "price_target_action.gte": "<price_target_action.gte>",
        "price_target_action.lt": "<price_target_action.lt>",
        "price_target_action.lte": "<price_target_action.lte>",
        benzinga_id: "<benzinga_id>",
        "benzinga_id.any_of": "<benzinga_id.any_of>",
        "benzinga_id.gt": "<benzinga_id.gt>",
        "benzinga_id.gte": "<benzinga_id.gte>",
        "benzinga_id.lt": "<benzinga_id.lt>",
        "benzinga_id.lte": "<benzinga_id.lte>",
        benzinga_analyst_id: "<benzinga_analyst_id>",
        "benzinga_analyst_id.any_of": "<benzinga_analyst_id.any_of>",
        "benzinga_analyst_id.gt": "<benzinga_analyst_id.gt>",
        "benzinga_analyst_id.gte": "<benzinga_analyst_id.gte>",
        "benzinga_analyst_id.lt": "<benzinga_analyst_id.lt>",
        "benzinga_analyst_id.lte": "<benzinga_analyst_id.lte>",
        benzinga_firm_id: "<benzinga_firm_id>",
        "benzinga_firm_id.any_of": "<benzinga_firm_id.any_of>",
        "benzinga_firm_id.gt": "<benzinga_firm_id.gt>",
        "benzinga_firm_id.gte": "<benzinga_firm_id.gte>",
        "benzinga_firm_id.lt": "<benzinga_firm_id.lt>",
        "benzinga_firm_id.lte": "<benzinga_firm_id.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getBenzingaV1Ratings();