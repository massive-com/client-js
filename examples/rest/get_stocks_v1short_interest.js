import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getStocksV1ShortInterest() {
  try {
    const response = await rest.getStocksV1ShortInterest(
      {
        ticker: "<ticker>",
        "ticker.any_of": "<ticker.any_of>",
        "ticker.gt": "<ticker.gt>",
        "ticker.gte": "<ticker.gte>",
        "ticker.lt": "<ticker.lt>",
        "ticker.lte": "<ticker.lte>",
        days_to_cover: "<days_to_cover>",
        "days_to_cover.any_of": "<days_to_cover.any_of>",
        "days_to_cover.gt": "<days_to_cover.gt>",
        "days_to_cover.gte": "<days_to_cover.gte>",
        "days_to_cover.lt": "<days_to_cover.lt>",
        "days_to_cover.lte": "<days_to_cover.lte>",
        settlement_date: "<settlement_date>",
        "settlement_date.any_of": "<settlement_date.any_of>",
        "settlement_date.gt": "<settlement_date.gt>",
        "settlement_date.gte": "<settlement_date.gte>",
        "settlement_date.lt": "<settlement_date.lt>",
        "settlement_date.lte": "<settlement_date.lte>",
        avg_daily_volume: "<avg_daily_volume>",
        "avg_daily_volume.any_of": "<avg_daily_volume.any_of>",
        "avg_daily_volume.gt": "<avg_daily_volume.gt>",
        "avg_daily_volume.gte": "<avg_daily_volume.gte>",
        "avg_daily_volume.lt": "<avg_daily_volume.lt>",
        "avg_daily_volume.lte": "<avg_daily_volume.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getStocksV1ShortInterest();