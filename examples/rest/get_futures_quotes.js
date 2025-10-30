import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getFuturesQuotes() {
  try {
    const response = await rest.getFuturesQuotes(
      {
        ticker: "GCJ5",
        timestamp: "<timestamp>",
        session_end_date: "<session_end_date>",
        limit: "<limit>",
        "timestamp.gte": "<timestamp.gte>",
        "timestamp.gt": "<timestamp.gt>",
        "timestamp.lte": "<timestamp.lte>",
        "timestamp.lt": "<timestamp.lt>",
        "session_end_date.gte": "<session_end_date.gte>",
        "session_end_date.gt": "<session_end_date.gt>",
        "session_end_date.lte": "<session_end_date.lte>",
        "session_end_date.lt": "<session_end_date.lt>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesQuotes();