import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getTmxV1CorporateEvents() {
  try {
    const response = await rest.getTmxV1CorporateEvents(
      {
        date: "<date>",
        "date.any_of": "<date.any_of>",
        "date.gt": "<date.gt>",
        "date.gte": "<date.gte>",
        "date.lt": "<date.lt>",
        "date.lte": "<date.lte>",
        type: "<type>",
        "type.any_of": "<type.any_of>",
        "type.gt": "<type.gt>",
        "type.gte": "<type.gte>",
        "type.lt": "<type.lt>",
        "type.lte": "<type.lte>",
        status: "<status>",
        "status.any_of": "<status.any_of>",
        "status.gt": "<status.gt>",
        "status.gte": "<status.gte>",
        "status.lt": "<status.lt>",
        "status.lte": "<status.lte>",
        ticker: "<ticker>",
        "ticker.any_of": "<ticker.any_of>",
        "ticker.gt": "<ticker.gt>",
        "ticker.gte": "<ticker.gte>",
        "ticker.lt": "<ticker.lt>",
        "ticker.lte": "<ticker.lte>",
        isin: "<isin>",
        "isin.any_of": "<isin.any_of>",
        "isin.gt": "<isin.gt>",
        "isin.gte": "<isin.gte>",
        "isin.lt": "<isin.lt>",
        "isin.lte": "<isin.lte>",
        trading_venue: "<trading_venue>",
        "trading_venue.any_of": "<trading_venue.any_of>",
        "trading_venue.gt": "<trading_venue.gt>",
        "trading_venue.gte": "<trading_venue.gte>",
        "trading_venue.lt": "<trading_venue.lt>",
        "trading_venue.lte": "<trading_venue.lte>",
        tmx_company_id: "<tmx_company_id>",
        "tmx_company_id.any_of": "<tmx_company_id.any_of>",
        "tmx_company_id.gt": "<tmx_company_id.gt>",
        "tmx_company_id.gte": "<tmx_company_id.gte>",
        "tmx_company_id.lt": "<tmx_company_id.lt>",
        "tmx_company_id.lte": "<tmx_company_id.lte>",
        tmx_record_id: "<tmx_record_id>",
        "tmx_record_id.any_of": "<tmx_record_id.any_of>",
        "tmx_record_id.gt": "<tmx_record_id.gt>",
        "tmx_record_id.gte": "<tmx_record_id.gte>",
        "tmx_record_id.lt": "<tmx_record_id.lt>",
        "tmx_record_id.lte": "<tmx_record_id.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getTmxV1CorporateEvents();