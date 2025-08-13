import * as websocket from "websocket";
import { getCryptoWebsocket } from "./crypto/index.js";
import { getForexWebsocket } from "./forex/index.js";
import { getIndicesWebsocket } from "./indices/index.js";
import { getOptionsWebsocket } from "./options/index.js";
import { getStocksWebsocket } from "./stocks/index.js";
import { getFuturesWebsocket } from "./futures/index.js";

export * from "./forex/index.js";
export * from "./indices/index.js";
export * from "./stocks/index.js";
export * from "./crypto/index.js";
export * from "./options/index.js";
export * from "./futures/index.js";

export interface IWebsocketClient {
  crypto: () => websocket.w3cwebsocket;
  forex: () => websocket.w3cwebsocket;
  indices: () => websocket.w3cwebsocket;
  options: () => websocket.w3cwebsocket;
  stocks: () => websocket.w3cwebsocket;
  futures: () => websocket.w3cwebsocket;
}

export const websocketClient = (
  apiKey: string,
  apiBase?: string,
  exchange?: string
): IWebsocketClient => ({
  crypto: () => getCryptoWebsocket(apiKey, apiBase),
  forex: () => getForexWebsocket(apiKey, apiBase),
  indices: () => getIndicesWebsocket(apiKey, apiBase),
  options: () => getOptionsWebsocket(apiKey, apiBase),
  stocks: () => getStocksWebsocket(apiKey, apiBase),
  futures: () => getFuturesWebsocket(apiKey, apiBase, exchange),
});

export default websocketClient;
