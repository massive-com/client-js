import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getStocksV1ShortVolume() {
  try {
    const response = await rest.getStocksV1ShortVolume(
      {
        ticker: "<ticker>",
        "ticker.any_of": "<ticker.any_of>",
        "ticker.gt": "<ticker.gt>",
        "ticker.gte": "<ticker.gte>",
        "ticker.lt": "<ticker.lt>",
        "ticker.lte": "<ticker.lte>",
        date: "<date>",
        "date.any_of": "<date.any_of>",
        "date.gt": "<date.gt>",
        "date.gte": "<date.gte>",
        "date.lt": "<date.lt>",
        "date.lte": "<date.lte>",
        short_volume_ratio: "<short_volume_ratio>",
        "short_volume_ratio.any_of": "<short_volume_ratio.any_of>",
        "short_volume_ratio.gt": "<short_volume_ratio.gt>",
        "short_volume_ratio.gte": "<short_volume_ratio.gte>",
        "short_volume_ratio.lt": "<short_volume_ratio.lt>",
        "short_volume_ratio.lte": "<short_volume_ratio.lte>",
        total_volume: "<total_volume>",
        "total_volume.any_of": "<total_volume.any_of>",
        "total_volume.gt": "<total_volume.gt>",
        "total_volume.gte": "<total_volume.gte>",
        "total_volume.lt": "<total_volume.lt>",
        "total_volume.lte": "<total_volume.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getStocksV1ShortVolume();