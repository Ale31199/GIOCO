const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 5173 });

const clients = new Set();

server.on('message', (socket, message) => {
	try {
		const data = JSON.parse(message);

		// Verifica se l'ID del destinatario corrisponde a quello del socket corrente
		if (socket.friendId === data.receiverId) {
			// Invia il messaggio solo al destinatario corrente
			socket.send(JSON.stringify({ sender: data.sender, text: data.text }));
		}
	} catch (error) {
		console.error('Errore durante il parsing del messaggio:', error);
	}
});

console.log('WebSocket server is running on ws://localhost:8080');
