<script>
  import { onMount } from 'svelte';

  let message = '';
  let chatMessages = [];
  let ws;

  const connectWebSocket = () => {
  ws = new WebSocket('ws://192.168.1.7:5173/chat');

  ws.addEventListener('open', () => {
    console.log('WebSocket connection opened');
    // Ora che la connessione è aperta, puoi inviare messaggi se necessario
  });

  ws.addEventListener('message', (event) => {
    const receivedMessage = JSON.parse(event.data);
    chatMessages = [...chatMessages, receivedMessage];
  });

  ws.addEventListener('close', () => {
    console.log('WebSocket connection closed');
    // Puoi gestire la riconnessione qui, se lo desideri
  });
};


  onMount(() => {
    // Connessione WebSocket solo dopo che la pagina è completamente caricata
    connectWebSocket();
  });

  const sendMessage = () => {
  if (ws && ws.readyState === WebSocket.OPEN) {
    // La connessione WebSocket è aperta, puoi inviare il messaggio
    ws.send(JSON.stringify({ content: message, sender: 'Me' }));
    message = '';
  } else {
    console.error('La connessione WebSocket non è ancora aperta.');
  }
};


  const enter = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };
</script>

<style>
  /* Aggiungi i tuoi stili qui */
</style>

<div class='flex w-[100%] justify-center'>
  <div class="bg-white flex flex-col overflow-y-auto w-[70%] h-[700px] rounded-2xl justify-start absolute bottom-[20%]">
    {#each chatMessages as { content, sender }}
      <p class="bg-blue-400 font-medium p-1 flex">{sender}: {content}</p>
    {/each}
  </div>
</div>

<div class='absolute bottom-[10%] w-[100%] flex justify-center'>
  <input maxlength="130" class="w-[70%] h-[70px] outline-none p-3 rounded-2xl" on:keydown="{enter}" bind:value={message} placeholder="Type your message..." />
  <button class="absolute right-[15%] h-[70px] bg-green-700 text-white p-3 rounded-2xl shadow-sm shadow-black " on:click="{sendMessage}">Send</button>
</div>
