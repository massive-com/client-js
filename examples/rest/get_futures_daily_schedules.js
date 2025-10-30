import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getFuturesDailySchedules() {
  try {
    const response = await rest.getFuturesDailySchedules(
      {
        session_end_date: "<session_end_date>",
        trading_venue: "<trading_venue>",
        limit: "<limit>",
        sort: "<sort>"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getFuturesDailySchedules();