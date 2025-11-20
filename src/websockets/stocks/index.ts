import { getWsClient } from "../transport/index.js";
import * as websocket from "websocket";

// Stocks Aggregate:
export interface IAggregateStockEvent {
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

// Stocks Trade:
export interface ITradeStockEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  x: string; // Exchange ID
  i: number; // Trade ID
  z: number; // Tape ( 1=A 2=B 3=C)
  p: number; // Price
  s: number; // Trade Size
  c: number[]; // Trade Conditions
  t: number; // Trade Timestamp ( Unix MS )
}

// Stocks Quote:
export interface IQuoteStockEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  bx: string; // Bix Exchange ID
  bp: number; // Bid Price
  bs: number; // Bid Size
  ax: string; // Ask Exchange ID
  ap: number; // Ask Price
  as: number; // Ask Size
  c: number; // Quote Condition
  t: number; // Quote Timestamp ( Unix MS )
  z: number; // The tape (1 = NYSE, 2 = AMEX, 3 = Nasdaq)
}

// Stocks LULD:
export interface ILULDStockEvent {
  ev: string; // Event Type
  T: string; // Symbol Ticker
  h: number; // Tick High Price
  l: number; // Tick Low Price
  i: number; // Tick Indicators
  z: number; // The tape (1 = NYSE, 2 = AMEX, 3 = Nasdaq)
  t: number; // Quote Timestamp ( Unix MS )
  q: number; // Sequence Number ( The sequence in which events ocurred )
}

// Stocks NOI:
export interface INOIStockEvent {
  ev: string; // Event Type
  T: string; // Ticker Symbol
  t: number; // Timestamp ( Unix MS )
  at: number; // Auction Time
  a: string; // Auction Type
  i: number; // Symbol sequence
  x: string; // Exchange ID
  o: number; // Imbalance Quantity
  p: number; // Paired Quantity
  b: number; // Book Clearing Price
}

// Stocks FMV:
export interface IFMVStockEvent {
  ev: string; // Event Type
  fmv: string; // Fair Market Value
  sym: string; // Symbol Ticker
  t: number; // Quote Timestamp ( Nanoseconds )
}

export const getStocksWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.massive.com"
): websocket.w3cwebsocket => getWsClient(`${apiBase}/stocks`, apiKey);
