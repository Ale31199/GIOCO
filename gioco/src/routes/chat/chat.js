const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const ws = new WebSocket.Server({ server });

ws.on('connection', (currentClient) => {
	currentClient.on('message', (message) => {
		// Invia il messaggio a tutti gli altri utenti connessi
		ws.clients.forEach((client) => {
			if (client !== currentClient && client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});
});

const port = process.env.PORT || 5173;
server.listen(port, '192.168.1.7', () => {
	console.log(`Server running on port ${port}`);
});
