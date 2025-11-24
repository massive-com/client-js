import { getWsClient } from "../transport/index.js";
import * as websocket from "websocket";

// Indices Aggregate:
export interface IAggregateIndexEvent {
  ev: string; // Event Type ( A = Second Agg, AM = Minute Agg )
  sym: string; // Symbol Ticker
  o: number; // Tick Open Price
  op: number; // Today's Open Price
  c: number; // Tick Close Price
  h: number; // Tick High Price
  l: number; // Tick Low Price
  s: number; // Tick Start Timestamp ( Unix MS )
  e: number; // Tick End Timestamp ( Unix MS )
}

// Indices Value:
export interface IIndexValueEvent {
  ev: string; // Event Type
  val: string; // Value of the Index
  T: string; // Assigned Ticker of the Index
  t: number; // Timestamp ( Unix MS )
}

export const getIndicesWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.massive.com"
): websocket.w3cwebsocket => getWsClient(`${apiBase}/indices`, apiKey);
