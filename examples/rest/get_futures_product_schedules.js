import { restClient } from '@polygon.io/client-js';

const apiKey = "GLOBAL_POLYGON_API_KEY";
const rest = restClient(apiKey, 'https://api.polygon.io');

async function example_getFuturesProductSchedules() {
  try {
    const response = await rest.getFuturesProductSchedules(
      {
        product_code: "ES",
        session_end_date: "<session_end_date>",
        limit: "<limit>",
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

example_getFuturesProductSchedules();