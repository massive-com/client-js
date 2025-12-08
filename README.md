# Massive JS Client

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Welcome to the official JS client library for the [Massive](https://massive.com/) REST and WebSocket API. To get started, please see the [Getting Started](https://massive.com/docs/stocks/getting-started) section in our documentation, view the [examples](./examples/) directory for code snippets, or the [blog post](https://massive.com/blog/javascript-stock-market-data/) with video tutorials to learn more. To generate the package documentation please run `npm run generate-doc`.

For upgrade instructions please see the [Release Notes](./CHANGELOG.md).

**Note:** Polygon.io has rebranded as [Massive.com](https://massive.com) on Oct 30, 2025. Existing API keys, accounts, and integrations continue to work exactly as before. The only change in this SDK is that it now defaults to the new API base at `api.massive.com`, while `api.polygon.io` remains supported for an extended period.

For details, see our [rebrand announcement blog post](https://massive.com/blog/polygon-is-now-massive/) or open an issue / contact [support@massive.com](mailto:support@massive.com) if you have questions.

## Getting the client

To get started, you'll need to install the client library:

```bash
npm install --save '@massive.com/client-js'
```

Next, create a new client with your [API key](https://massive.com/dashboard/signup).

```javascript
import { restClient } from '@massive.com/client-js';
const rest = restClient(process.env.POLY_API_KEY);
```

## Using the client

After creating the client, making calls to the Massive API is easy. For example, here's a complete example on how to get aggregates (bars):

```javascript
import { restClient } from '@massive.com/client-js';

const apiKey = "XXXX";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getStocksAggregates() {
  try {
    const response = await rest.getStocksAggregates(
      {
        stocksTicker: "AAPL",
        multiplier: "1",
        timespan: "day",
        from: "2025-11-01",
        to: "2025-11-30",
        adjusted: "true",
        sort: "asc",
        limit: "120"
      }
    );
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getStocksAggregates();
```

Or, maybe you want to get the last trades or quotes for a ticker:

```javascript
import { restClient } from '@massive.com/client-js';

const apiKey = "XXXX";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getLastStocksTrade() {
  try {
    const response = await rest.getLastStocksTrade("AAPL");
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getLastStocksTrade();
```

```javascript
import { restClient } from '@massive.com/client-js';

const apiKey = "XXXXX";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getLastStocksQuote() {
  try {
    const response = await rest.getLastStocksQuote("AAPL");
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getLastStocksQuote();
```

Finally, maybe you want a snapshot of a ticker:

```javascript
import { restClient } from '@massive.com/client-js';

const apiKey = "XXXXX";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getStocksSnapshotTicker() {
  try {
    const response = await rest.getStocksSnapshotTicker("AAPL");
    console.log('Response:', response);
  } catch (e) {
    console.error('An error happened:', e);
  }
}

example_getStocksSnapshotTicker();
```

See [full examples](./examples/rest/) for more details on how to use this client effectively. 

## Pagination

The client can handle pagination for you through the `globalFetchOptions` by turning on the `pagination: true` option. The feature will automatically fetch all `next_url` pages of data when the API response indicates more data is available.

```javascript
import { restClient } from '@massive.com/client-js';

const globalFetchOptions = {
	pagination: true,
};
const rest = restClient(process.env.POLY_API_KEY, "https://api.massive.com", globalFetchOptions);

rest.getStocksAggregates({
  stocksTicker: "AAPL",
  multiplier: "1",
  timespan: "day",
  from: "2025-11-01",
  to: "2025-11-30"
}).then((response) => {
	const data = response.data; // convert axios-wrapped response
	const resultCount = data.resultsCount;
	console.log("Result count:", resultCount);
}).catch(e => {
	console.error('An error happened:', e);
});
```

If there is a `next_url` field in the API response, the client will recursively fetch the next page for you, and then pass along the accumulated data.

## WebSocket Client

Import the [Websocket](https://massive.com/docs/stocks/ws_getting-started) client and models packages to get started. You can get preauthenticated [websocket clients](https://www.npmjs.com/package/websocket) for the 3 topics.

```javascript
import { websocketClient } from "@massive.com/client-js";
const stocksWS = websocketClient(process.env.POLY_API_KEY, 'wss://delayed.massive.com').stocks();

stocksWS.onmessage = ({response}) => {
  const [message] = JSON.parse(response);

  stocksWS.send('{"action":"subscribe", "params":"AM.MSFT,A.MSFT"}');

  switch (message.ev) {
    case "AM":
      // your trade message handler
      break;
    case "A":
      // your trade message handler
      break;
  }
};

stocksWS.send({ action: "subscribe", params: "T.MSFT" });
```
See [full examples](./examples/websocket/) for more details on how to use this client effectively.

## Contributing

If you found a bug or have an idea for a new feature, please first discuss it with us by [submitting a new issue](https://github.com/massive.com/client-js/issues/new/choose). We will respond to issues within at most 3 weeks. We're also open to volunteers if you want to submit a PR for any open issues but please discuss it with us beforehand. PRs that aren't linked to an existing issue or discussed with us ahead of time will generally be declined. If you have more general feedback or want to discuss using this client with other users, feel free to reach out on our [Slack channel](https://massive.com.slack.com/archives/C03FCSBSAFL).
