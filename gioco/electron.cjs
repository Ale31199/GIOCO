// main.js
const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');

let mainWindow;

app.on('ready', () => {
	// Avvia il server di sviluppo di Svelte
	const svelteProcess = spawn('npm', ['run', 'start'], { stdio: 'inherit' });

	// Crea la finestra del browser di Electron
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	// Carica l'applicazione Svelte in Electron
	mainWindow.loadURL('https://homecode.netlify.app/');

	// Chiudi il processo di Svelte quando la finestra di Electron viene chiusa
	mainWindow.on('closed', () => {
		svelteProcess.kill('SIGTERM');
	});
});

// Chiudi l'app quando tutte le finestre vengono chiuse
app.on('window-all-closed', () => {
	app.quit();
});
