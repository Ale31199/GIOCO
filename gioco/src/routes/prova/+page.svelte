<script>

  let hex = '4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8'
  let base64;

  const convertiHex=()=>{
    const Hex = hex.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16))

    base64 = btoa(String.fromCharCode(...Hex))
  }
</script>


<div class='flex w-[100%] h-[100%] justify-center items-center absolute top-[0%] '>

<div class='text-white justify-center items-center flex flex-col w-[80%] h-[300px] p-4 rounded-xl font-semibold bg-gradient-to-t from-black to-neutral-800 border-4 border-neutral-800'>
  
  <p class="text-green-600 mb-5">Stringa Hex: {hex}</p>
  <input bind:value="{hex}" type='text' class="rounded-xl text-black w-[600px] outline-none p-2" />
  <button on:click="{()=>convertiHex()}" class="bg-blue-800 hover:bg-teal-700 mt-8 p-3 transition rounded-xl ">Converti in Base64</button>

  {#if base64}
  <p class="absolute top-[70%] text-lg" >Risultato codice Base64: {base64}</p>
  {/if}
</div>
</div>