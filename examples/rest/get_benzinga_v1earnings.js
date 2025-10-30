import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getBenzingaV1Earnings() {
  try {
    const response = await rest.getBenzingaV1Earnings(
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
        date_status: "<date_status>",
        "date_status.any_of": "<date_status.any_of>",
        "date_status.gt": "<date_status.gt>",
        "date_status.gte": "<date_status.gte>",
        "date_status.lt": "<date_status.lt>",
        "date_status.lte": "<date_status.lte>",
        eps_surprise_percent: "<eps_surprise_percent>",
        "eps_surprise_percent.any_of": "<eps_surprise_percent.any_of>",
        "eps_surprise_percent.gt": "<eps_surprise_percent.gt>",
        "eps_surprise_percent.gte": "<eps_surprise_percent.gte>",
        "eps_surprise_percent.lt": "<eps_surprise_percent.lt>",
        "eps_surprise_percent.lte": "<eps_surprise_percent.lte>",
        revenue_surprise_percent: "<revenue_surprise_percent>",
        "revenue_surprise_percent.any_of": "<revenue_surprise_percent.any_of>",
        "revenue_surprise_percent.gt": "<revenue_surprise_percent.gt>",
        "revenue_surprise_percent.gte": "<revenue_surprise_percent.gte>",
        "revenue_surprise_percent.lt": "<revenue_surprise_percent.lt>",
        "revenue_surprise_percent.lte": "<revenue_surprise_percent.lte>",
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

example_getBenzingaV1Earnings();