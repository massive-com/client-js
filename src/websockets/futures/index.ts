import { getWsClient } from "../transport/index.js";
import * as websocket from "websocket";

// Futures Aggregate:
export interface IAggregateFuturesEvent {
  ev: string; // Event Type ( A = Second Agg, AM = Minute Agg )
  sym: string; // Symbol Ticker
  v: number; // Tick Volume
  dv: number; // Total Dollar Value (USD) of Shares Traded
  o: number; // Tick Open Price
  c: number; // Tick Close Price
  h: number; // Tick High Price
  l: number; // Tick Low Price
  n: number; // Total Number of Transactions
  s: number; // Tick Start Timestamp ( Unix MS )
  e: number; // Tick End Timestamp ( Unix MS )
}

// Futures Trade:
export interface ITradeFuturesEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  p: number; // Price
  s: number; // Trade Size
  t: number; // Trade Timestamp ( Unix MS )
  q: number; // Sequence Number ( The sequence in which events ocurred )
}

// Futures Quote:
export interface IQuoteFuturesEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  bp: number; // Bid Price
  bs: number; // Bid Size
  bt: number; // Bid Timestamp
  ap: number; // Ask Price
  as: number; // Ask Size
  at: number; // Ask Timestamp
  t: number; // Quote Timestamp ( Unix MS )
}

export const getFuturesWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.massive.com",
  exchange?: string
): websocket.w3cwebsocket => getWsClient(`${apiBase}/futures${exchange ? `/${exchange}` : ""}`, apiKey);
