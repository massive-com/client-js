/* 
	This example uses the ws (https://github.com/websockets/ws) library to connect to the delayed stocks massive 
	websocket to subscribe to minute ohlc values for the ticker AAPL.
*/

import WebSocket from 'ws';

const APIKEY = process.env.POLY_API_KEY || 'YOUR_API_KEY'

// Connection Type:
const ws = new WebSocket('wss://delayed.massive.com/stocks') // stocks 15-min delay
//const ws = new WebSocket('wss://socket.massive.com/stocks') // stocks real-time
//const ws = new WebSocket('wss://socket.massive.com/forex') // forex

// Connection Opened:
ws.on('open', () => {
	console.log('Connected!')
	ws.send(`{"action":"auth","params":"${APIKEY}"}`)
	
	// forex
	//ws.send(`{"action":"subscribe","params":"C.AUD/USD,C.USD/EUR,C.USD/JPY"}`)

	// aggregates
	ws.send(`{"action":"subscribe","params":"AM.*"}`) // min
	// ws.send(`{"action":"subscribe","params":"A.*"}`) // sec

	// trades
	//ws.send(`{"action":"subscribe","params":"T.*"}`)
	//ws.send(`{"action":"subscribe","params":"T.TSLA"}`)

	// quotes
	//ws.send(`{"action":"subscribe","params":"Q.*"}`)
	//ws.send(`{"action":"subscribe","params":"Q.TSLA"}`)
})

// Per message packet:
ws.on('message', ( data ) => {
	data = JSON.parse( data )
	data.map(( msg ) => {
		if( msg.ev === 'status' ){
			return console.log('Status Update:', msg.message)
		}
		console.log(msg)
	})
})

ws.on('error', console.log)
