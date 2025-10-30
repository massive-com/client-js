import { restClient } from '@massive.com/client-js';

const apiKey = "GLOBAL_MASSIVE_API_KEY";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getSnapshotSummary() {
  try {
    const response = await rest.getSnapshotSummary("NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD");
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getSnapshotSummary();