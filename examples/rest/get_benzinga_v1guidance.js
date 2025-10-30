import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getBenzingaV1Guidance() {
  try {
    const response = await rest.getBenzingaV1Guidance(
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
        positioning: "<positioning>",
        "positioning.any_of": "<positioning.any_of>",
        "positioning.gt": "<positioning.gt>",
        "positioning.gte": "<positioning.gte>",
        "positioning.lt": "<positioning.lt>",
        "positioning.lte": "<positioning.lte>",
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
        fiscal_year: "<fiscal_year>",
        "fiscal_year.any_of": "<fiscal_year.any_of>",
        "fiscal_year.gt": "<fiscal_year.gt>",
        "fiscal_year.gte": "<fiscal_year.gte>",
        "fiscal_year.lt": "<fiscal_year.lt>",
        "fiscal_year.lte": "<fiscal_year.lte>",
        fiscal_period: "<fiscal_period>",
        "fiscal_period.any_of": "<fiscal_period.any_of>",
        "fiscal_period.gt": "<fiscal_period.gt>",
        "fiscal_period.gte": "<fiscal_period.gte>",
        "fiscal_period.lt": "<fiscal_period.lt>",
        "fiscal_period.lte": "<fiscal_period.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getBenzingaV1Guidance();