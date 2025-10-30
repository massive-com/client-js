import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getBenzingaV1News() {
  try {
    const response = await rest.getBenzingaV1News(
      {
        published: "<published>",
        "published.any_of": "<published.any_of>",
        "published.gt": "<published.gt>",
        "published.gte": "<published.gte>",
        "published.lt": "<published.lt>",
        "published.lte": "<published.lte>",
        last_updated: "<last_updated>",
        "last_updated.any_of": "<last_updated.any_of>",
        "last_updated.gt": "<last_updated.gt>",
        "last_updated.gte": "<last_updated.gte>",
        "last_updated.lt": "<last_updated.lt>",
        "last_updated.lte": "<last_updated.lte>",
        tickers: "<tickers>",
        "tickers.all_of": "<tickers.all_of>",
        "tickers.any_of": "<tickers.any_of>",
        channels: "<channels>",
        "channels.all_of": "<channels.all_of>",
        "channels.any_of": "<channels.any_of>",
        tags: "<tags>",
        "tags.all_of": "<tags.all_of>",
        "tags.any_of": "<tags.any_of>",
        author: "<author>",
        "author.any_of": "<author.any_of>",
        "author.gt": "<author.gt>",
        "author.gte": "<author.gte>",
        "author.lt": "<author.lt>",
        "author.lte": "<author.lte>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getBenzingaV1News();