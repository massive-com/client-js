import * as websocket from "websocket";
import { getWsClient } from "../transport/index.js";

// Crypto Aggregate:
export interface IAggregateCryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  o: number; // Open Price
  c: number; // Close Price
  h: number; // High Price
  l: number; // Low Price
  v: number; // Volume of Trades in Tick
  s: number; // Tick Start Timestamp
  e: number; // Tick End Timestamp
}

// Crypto Trade:
export interface ITradeCryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  p: number; // Price
  t: number; // Timestamp Unix ( ms )
  s: number; // Size
  c: number[]; // Condition
  i: string; // Trade ID ( Optional )
  x: number; // Exchange ID
  r: number; // Received @ Massive Timestamp
}

// Crypto Quote:
export interface IQuoteCryptoEvent {
  ev: string; // Event Type
  pair: string; // Crypto Pair
  bp: number; // Bid Price
  bs: number; // Bid Size
  ap: number; // Ask Price
  as: number; // Ask Size
  t: number; // Exchange Timestamp Unix ( ms )
  x: number; // Exchange ID
  r: number; // Received @ Massive Timestamp
}

// Crypto FMV:
export interface IFMVCryptoEvent {
  ev: string; // Event Type
  fmv: string; // Fair Market Value
  sym: string; // Symbol Ticker
  t: number; // Quote Timestamp ( Nanoseconds )
}

export const getCryptoWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.massive.com"
): websocket.w3cwebsocket => getWsClient(`${apiBase}/crypto`, apiKey);
