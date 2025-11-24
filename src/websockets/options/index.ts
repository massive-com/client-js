import { getWsClient } from "../transport/index.js";
import * as websocket from "websocket";

// Options Aggregate:
export interface IAggregateOptionsEvent {
  ev: string; // Event Type ( A = Second Agg, AM = Minute Agg )
  sym: string; // Symbol Ticker
  v: number; // Tick Volume
  av: number; // Accumulated Volume ( Today )
  op: number; // Todays official opening price
  vw: number; // VWAP (Volume Weighted Average Price)
  o: number; // Tick Open Price
  c: number; // Tick Close Price
  h: number; // Tick High Price
  l: number; // Tick Low Price
  a: number; // Tick Average / VWAP Price
  z: number; // Tick Average Trade Size
  s: number; // Tick Start Timestamp ( Unix MS )
  e: number; // Tick End Timestamp ( Unix MS )
}

// Options Trade:
export interface ITradeOptionsEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  x: string; // Exchange ID
  p: number; // Price
  s: number; // Trade Size
  c: number[]; // Trade Conditions
  t: number; // Trade Timestamp ( Unix MS )
  q: number; // Sequence Number ( The sequence in which events ocurred )
}

// Options Quote:
export type IQuoteOptionsEvent = {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  bx: number; // Bid Exchange ID
  ax: number; // Ask Exchange ID
  bp: number; // Bid Price
  ap: number; // Ask Price
  bs: number; // Bid Size
  as: number; // Ask size
  t: number; // Quote Timestamp ( Unix MS )
  q: number; // Sequence Number ( The sequence in which events ocurred )
};

// Options FMV:
export interface IFMVOptionsEvent {
  ev: string; // Event Type
  fmv: string; // Fair Market Value
  sym: string; // Symbol Ticker
  t: number; // Quote Timestamp ( Nanoseconds )
}

export const getOptionsWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.massive.com"
): websocket.w3cwebsocket => getWsClient(`${apiBase}/options`, apiKey);
