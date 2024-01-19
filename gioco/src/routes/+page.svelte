<div class="flex justify-center items-center flex-row w-[100%] absolute top-[5%] rounded-2xl ">
  <div class="bg-gradient-to-t from-neutral-900 to-black rounded-2xl flex flex-row p-3 pl-2 justify-center absolute w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%]">
    <p class="text-xl text-pink-600 font-bold cursor-default monst  border-white">{test.toLocaleTimeString()} -  </p>
<p class="text-xl text-pink-600 font-bold cursor-default relative monst left-1 sfoca2 ">{salutiTime}</p>
  </div>
</div>

<div class='flex w-[100%] justify-center absolute top-[10%] 2xl:top-[20%]'>
  <div class="bg-gradient-to-t  h-[550px] md:h-[700px] w-[95%] md:w-[80%] lg:w-[70%] 2xl:w-[50%] rounded-lg {incognito ? "from-neutral-900 to-neutral-950 border-2 border-violet-900": "from-slate-900 to-slate-950 border-2 border-slate-600" && demone ? "to-red-900 from-neutral-950 border-2 border-red-600": "from-slate-900 to-slate-950 border-2 border-slate-600"}">
    <div class="flex justify-center w-[100%] h-full relative overflow-hidden">
      <img src={mainSfondi} class="object-cover w-full h-full sfo rounded-2xl opacity-55 {incognito ? "saturate-0":""} absolute" />
      <img src={layla} alt="layla" class=" sfoca2 absolute tran {start ? "w-[450px] md:w-[550px] lg:w-[600px] 2xl:w-[650px]":"w-[200px] md:w-[400px] lg:w-[400px] 2xl:w-[450px]"}"/>
    </div>

    <audio src={theme} id='temah' autoplay loop />
    <audio src={amb} id='amb' loop />
    <audio src={main} id='main' />
    <audio src={saving} id='saving' />
    <audio src={scelta} id='scelta' />
    <audio src={gameover} id='gameover' />
    <audio src={torna} id='torna' />
    <audio src={starta} id='starta' />

    <div class="justify-center w-[100%] sfoca2 relative top-[-250px] md:scale-125 {start ? "flex":"hidden"}">
    <button id='ini' on:click={()=>inizia()} class=" text-white font-thin  bg-gradient-to-t flex from-violet-900 to-neutral-950 border-b-2 border-violet-600 rounded-xl p-2 pr-8 pl-8 text-xl pulsa2">Clicca per iniziare</button>
    </div>

    <div class="justify-items-center w-[100%] relative top-[-450px] grid" >
      <div class="{conferma ? "grid":"hidden"} justify-items-center grid-cols-2 gap-8 grid-rows-2 rounded-2xl w-[95%] md:w-[80%] lg:w-[70%] 2xl:w-[50%] h-[300px] sfoca2  bg-gradient-to-t from-transparent to-black {incognito ? "border-t-4 border-violet-900":"border-t-4 border-pink-900" && demone ? "border-t-4 border-red-900":"border-t-4 border-pink-900"} opacity-95">
      <p class="monst text-white p-3 text-[10px] sm:text-sm font-bold relative col-span-2 top-[50px] text-center">Stai per ricominciare il gioco da capo, sei sicuro di voler proseguire? Perderai i progressi salvati.</p>
      <div class="w-[95%] sm:w-[80%] 2xl:w-[80%] flex flex-row justify-center items-center col-span-2">
        <button on:click="{()=>confermareNuova('si')}" class=" text-white mr-10 monst flex items-center cursor-pointer justify-center w-[60%] h-[50px] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Si</button>
        <button on:click="{()=>confermareNuova('no')}" class="text-white ml-10 monst flex items-center cursor-pointer justify-center w-[60%] h-[50px] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">No</button>
      </div>
      </div>
    </div>
   

  
   <div class="justify-center w-[100%] sfoca2 relative top-[-450px] {start ? "hidden":"flex"}">
    <div class="bg-gradient-to-t opacity-95 {conferma ? "h-[10px] invisible":""} {incognito ? "from-transparent to-transparent border-2 border-transparent":" from-transparent to-transparent " && demone ? "from-transparent to-transparent border-2 border-transparent":" from-transparent to-transparent "}  rounded-xl flex items-center justify-center w-[95%] h-[300px]">
      
      <div class="{crediti ? "hidden" : "grid"} {conferma ? "hidden":"grid"} {opzioni ? "hidden": "grid"} {nuova ? "hidden": "grid"} {cont2 ? "hidden": "grid"}  w-[95%] sm:w-[80%] 2xl:w-[80%] h-[280px] border-t-4 {incognito ? "border-violet-800":"border-pink-900" && demone ? "border-red-800":"border-pink-900"} bg-gradient-to-t from-transparent to-black bg-opacity-80 rounded-2xl grid-cols-1 grid-rows-4 gap-6 p-3 justify-center justify-items-center">
      <button id='co' on:click="{()=>apriMenu('cont')}" disabled={cont} class="{cont ? "opacity-20 cursor-not-allowed": ""} text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Continua Partita</button>
      <button id='nu' on:click="{()=>apriMenu('nuova')}" class="text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Nuova Partita</button>
      <button id='op' on:click="{()=>apriMenu('opzioni')}" class=" text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Opzioni</button>
      <button id='cr' on:click="{()=>apriMenu('crediti')}" class="text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Crediti</button>
     
    </div>

      <div class="sfoca {crediti ? "grid": "hidden"}  w-[95%] h-[280px] {incognito ? "border-t-4 border-violet-900":"border-t-4 border-pink-900" && demone ? "border-t-4 border-red-900":"border-t-4 border-pink-900"} bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl  grid-cols-1 grid-rows-6 gap-8 p-3 justify-center justify-items-center">
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Gioco ideato e sviluppato da Alessio Santillo</p>
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Immagini create da Copilot</p>
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Icone create da Flaticon</p>
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Main Theme 'Dust to Dust' di Quixotic</p>
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Gameplay Sountrack - 'SpaceWave' di RemixSample</p>
        <button on:click="{()=>apriMenu('crediti')}" class="text-white monst flex items-center cursor-pointer justify-center w-[80%] h-[50px] relative top-[77px] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Torna al menu principale</button>
      </div>

      <div class="sfoca {opzioni ? "grid": "hidden"}  w-[95%] h-[280px] {incognito ? "border-t-4 border-violet-900":"border-t-4 border-pink-900" && demone ? "border-t-4 border-red-900":"border-t-4 border-pink-900"} bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl  grid-cols-2 grid-rows-3 gap-3 gap-y-[130px]  p-3 justify-center justify-items-center">
        <button on:click="{()=>cambiaMode('inc')}" class="{incognito ? "border-b-4 rounded-[50px] md:rounded-full":"border-b-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-neutral-950 to-transparent  border-neutral-700  hover:border-neutral-300">
          <img src="{inc}" alt="layla" class="w-[60px] invert" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst">Layla Noir</p>
        </button>
        <button on:click="{()=>cambiaMode('demon')}"  class="{demone ? "border-b-4 rounded-[50px] md:rounded-full":"border-b-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-red-950 to-transparent border-red-700 hover:border-neutral-300">
          <img src="{demon}" alt="layla" class="w-[60px] mb-1" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst">Layla Demon</p>
        </button>
        <button on:click="{gestisciMusica}" class="{musica ? "border-b-4 rounded-[50px] md:rounded-full":"border-b-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-green-950 to-transparent  border-green-700 hover:border-neutral-300">
          <img src="{music}" alt="layla" class="w-[60px] invert" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst">Musica</p>
        </button>
        <button on:click="{()=>gestisciSuono()}" class="{suono ? "border-b-4 rounded-[50px] md:rounded-full":"border-b-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-violet-950 to-transparent  border-violet-700 hover:border-neutral-300">
          <img src="{volumeh}" alt="layla" class="w-[60px] invert" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst">Effetti</p>
        </button>
        
        <button on:click="{()=>apriMenu('opzioni')}" class="text-white monst flex items-center cursor-pointer col-span-2 justify-center w-[80%] h-[50px] relative top-[50px] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Torna al menu principale</button>
      </div>

      <div class="{nuova ? "grid": "hidden"} {conferma ? "hidden": "grid"} sfoca w-[100%] h-[280px] {incognito ? "border-t-4 border-violet-900":"border-t-4 border-pink-900" && demone ? "border-t-4 border-red-900":"border-t-4 border-pink-900"} bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl  grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center">
        <div class="{verifica ? "flex":"hidden"} {caricamento ? "hidden": "flex"} {caricamento2 ? "hidden": "flex"} {latrama ? "hidden": "flex"} justify-center items-center w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
          <p class=" sfoca2 monst text-white text-[10px] md:text-sm font-bold relative top-[-18px] text-justify flex justify-start ">Benvenuto su Undead Layla! Prima di cominciare, inserisci il tuo nome, dopodichè clicca su 'Fatto' per aggiornare il gioco. Potrai ritornare qui e iniziare la tua avventura!</p>
          <div class="flex justify-center items-center w-[100%] top-[15px] relative flex-col" >
            <input on:change="{caricaNome}" on:keydown="{Entra}" placeholder="Inserisci il tuo nome qui..." bind:value="{nome}" class="rounded-xl outline-none w-[300px] p-3 mb-2" maxlength="30"/>
            <button id='ins' on:click="{()=>{salvaNome(); aggiornaPagina();}}" class='text-white font-semibold rounded-xl p-2 bg-gradient-to-t from-green-950 to-green-600 border-2 border-green-600 hover:from-teal-950 hover:to-teal-600 hover:border-teal-600 w-[300px]'>Fatto</button>
          </div>
        </div>

        <div class="{latrama ? "flex": "hidden"} justify-start w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
          <p class=" sfoca2 monst text-white text-[10px] sm:text-sm font-bold relative top-[5px] text-justify flex justify-start ">{trama}</p>
        </div>

        
        <p class="{verifica ? "invisible": "visible"} {caricamento ? "visible": "invisible"}  sfoca monst text-white text-xs md:text-base font-bold justify-center items-center absolute top-[150px] sm:top-[100px] pulsa">Caricamento...</p>

        <div class="flex flex-row w-[100%] top-[-150px] justify-between relative">
          <button id='me' on:click="{()=>apriMenu('menu')}" class="{caricamento ? "hidden": "flex"}  sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[20%] h-[30px] relative rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Menu</button>
          <button on:click="{()=>salvaGame()}" class="{salvata ? "flex": "hidden"} sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[40%] h-[30px] relative  rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">{save}</button> 
        </div>


         

        <div class="{cont2 ? "grid": "hidden"}  sfoca w-[100%] h-[280px] {incognito ? "border-t-4 border-neutral-900":"border-t-4 border-pink-900" && demone ? "border-t-4 border-red-900":"border-t-4 border-pink-900"} bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl  grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center">
       
          <div class="{latrama2 ? "flex": "hidden"} justify-start w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
            <p id="ty" class=" sfoca2 monst text-white text-sm font-bold relative top-[5px] text-justify flex justify-start ">{trama}</p>
          </div>
  
          <p class="{caricamento2 ? "visible": "invisible"}  sfoca monst text-white font-bold absolute top-[100px] pulsa">Caricamento...</p>
          <div class="flex flex-row w-[100%] top-[-150px] justify-between relative">
            <button on:click="{()=>apriMenu('menu')}" class="{caricamento2 ? "hidden": "flex"} sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[20%] h-[30px] relative rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Menu</button>
            <button on:click="{()=>salvaGame()}" class="{salvata2 ? "flex": "hidden"} sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[40%] h-[30px] relative  rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">{save}</button> 
          </div>
        </div>


      </div>
    </div>
   </div>

   <div class="flex flex-col w-[100%] relative top-[-430px] items-center justify-center">
    <button on:click="{()=>gioca('risp')}" disabled={blocca} class="{blocca ? "hidden cursor-default": "opacity-100 cursor-pointer"} text-[11px] sm:text-sm  sfoca w-[95%] h-[50px] monst relative rounded-xl p-3 mb-2  bg-gradient-to-b {incognito ? "from-neutral-950  to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"} text-white font-semibold">{risp}</button>
    <button on:click="{()=>gioca('risp1')}" disabled={blocca || blocca2} class=" {blocca ? "hidden cursor-default": "opacity-100 cursor-pointer"} {blocca2 ? "hidden cursor-default": "opacity-100 cursor-pointer"} text-[11px] sm:text-sm  sfoca w-[95%] h-[50px]  monst relative rounded-xl p-3 mb-2 bg-gradient-to-b {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"} text-white font-semibold">{risp1}</button>
  </div>

  </div>
</div>




<script>
  import layla from './imma/layla.png'
  import music from './imma/musicc.png'
  import vol from './imma/volume.png'
  import mute from './imma/mute.png'
  import inc from './imma/incognito.png'
  import demon from './imma/halloween.png'
	import { onMount } from 'svelte';
  import gameover from './effetti/gameover.wav';
  import main from './effetti/mainmenu.wav';
  import saving from './effetti/saving.wav';
  import scelta from './effetti/scelta.wav';
  import torna from './effetti/tornaback.wav';
  import theme from './effetti/theme.mp3'
  import amb from './effetti/ambient.mp3'
  import starta  from './effetti/start.wav'
  import sfondo from './imma/OIG.jpg'
  import sfondom from './imma/OIGmattina.jpg'
  import sfondon from './imma/OIGnotte.jpg'
import { writable } from 'svelte/store'

  let mainSfondi = sfondo;
  let nome = ''
  $: nomereattivo = ''
  let latrama = false
  let latrama2  = false
  let salvata = false
  let salvata2 = false

 
  const caricaNome=(event)=>{
    nome = event.target.value
  }

  const aggiornaPagina=()=>{
    location.reload()
  }

  const salvaNome=()=>{
    if (typeof window !== 'undefined'){
      const ins = document.getElementById('ins')
      ins.addEventListener('click', ()=>{
        const audioAmb = document.getElementById('amb')
        audioAmb.play()
      })
    const audioMain = new Audio(main);
    if (!suono){
      document.addEventListener('click', ()=>{
    audioMain.pause()
  })
  audioMain.volume = 0
        } else{
          audioMain.volume = 1
        }
   audioMain.currentTime = 0
    audioMain.play()
      latrama = true
      latrama2 = true
      salvata = true
      salvata2 = true
      localStorage.setItem('nome', nome)
      nomereattivo = nome
      nome = nomereattivo
      console.log(nome)
   
  setTimeout(()=>{
    blocca = false
  vediNome()
  }, 700)
  }
}

  const Entra=(event)=>{
    if (event.key === 'Enter'){
      salvaNome()
    }
  }
  
  const vediNome =()=>{
    if (typeof window !== 'undefined'){
  let ilmionome = localStorage.getItem('nome')
  if (ilmionome){
    nome = ilmionome
    nomereattivo = nome
  }}}
  
    vediNome()

    onMount(()=>{
    $: vediNome()
  })

  let introNome = `Benvenuto ${nomereattivo}! Sei pronto ad aiutarmi nella mia avventura? Mi raccomando rispondi di sì!`

  const storia = {
	intro:{text: introNome,
  ris:['Certo, ti aiuterò!', 'Scusa, non credo di essere ancora pronto'],
  nextLev: ['start', 'end']},

  start:{ text:`Ahh ti ringrazio ${nome}! oh aspetta ti mando i dati con tutte le informazioni riguardante cio che sta accadendo.... *invio dati*`,
          ris:['Andiamo!', ''],
          nextLev: ['inizio']},

  end:{  text:'Sei sicuro? ho davvero bisogno del tuo aiuto... il mio comunicatore è stato in grado di raggiungere solo il tuo segnale dopo ore e ore di tentativi... Davvero non vuoi darmi una mano?',
         ris:['Eh va bene :)', 'Daccordo, dimmi pure di cosa hai bisogno'],
         nextLev: ['bho', 'bho']},

         inizio : { text: 'Primo Capitolo: La Città Glitchata...',
         ris: ['Continua', 'Inizia'],
         nextLev:['si', 'si']},

         bho: {text: 'Ti ringrazio! Lascia solo che ti mandi il breafing con tutti i dati di ciò che sta accadendo..... *invio dati*',
        ris:['Perfetto', ''],
      nextLev: ['inizio']}
  
};


  console.log(nomereattivo)
  console.log(storia.intro.text)


let trama;
let risp = ''
let risp1 = ''
let nextLevel = 'intro';
let blocca = true
let blocca2 = false


const newGame=()=>{
  nextLevel = 'intro'
  trama = storia.intro.text
  risp = storia.intro.ris[0]
  risp1 = storia.intro.ris[1]
  blocca2 = false
}


  const gioca=(risposta)=>{
    const audioScelta = new Audio(scelta);
    if (!suono){
  audioScelta.volume = 0
          document.addEventListener('click', ()=>{
    audioScelta.pause()
  })
        } else{
          audioScelta.volume = 1
        }
   switch(risposta){
    case 'risp':
   
      audioScelta.play()
      audioScelta.currentTime = 0
      setTimeout(()=>{
      nextLevel = storia[nextLevel].nextLev[0]
      trama = storia[nextLevel].text
   risp = storia[nextLevel].ris[0]
   risp1 = storia[nextLevel].ris[1]
   console.log(trama)
   if (risp1 === ''){
    blocca2 = true
   } else{
    blocca2 = false
   }
      }, 1000)
      break;
      case 'risp1':
      audioScelta.play()
      audioScelta.currentTime = 0
      setTimeout(()=>{
      nextLevel = storia[nextLevel].nextLev[1]
      trama = storia[nextLevel].text
   risp = storia[nextLevel].ris[0]
   risp1 = storia[nextLevel].ris[1]
   console.log(trama)
   if (risp1 === ''){
    blocca2 = true
   } else{
    blocca2 = false
   }
  }, 1000)
      break;
      default:
        break;
   }
  }


  let save = 'Salva la partita'

  const giocoSalvato= async ()=>{
    save = 'Salvataggio...';
  await new Promise(resolve => setTimeout(resolve, 1700));

  save = 'Partita salvata!';
  await new Promise(resolve => setTimeout(resolve, 3800));

  save = 'Salva la partita';
}



  let cont = true


  let conferma = false

const confermareNuova=(opzione)=>{
  const audioTorna= new Audio(torna)
  const tema = document.getElementById('temah')
  const audioAmb = document.getElementById('amb')
  switch(opzione){
  case 'si':
  if (!suono){
  audioTorna.volume = 0
          document.addEventListener('click', ()=>{
    audioTorna.pause()
  })
        } else{
          audioTorna.volume = 1
        }
    tema.volume = 0
    audioTorna.play()

    const nomeh = localStorage.getItem('nome')
        if (nomeh){
          nome = nomeh
        }

        nome = ''
        localStorage.setItem('nome', nome)
   
    if (conferma){
  setTimeout(()=>{
    tema.volume = 0
    tema.pause()
  conferma = false
  cont = true
  localStorage.setItem('cont', JSON.stringify(cont))
        newGame()
        blocca = true
        nuova  = true
        caricamento = true
        verifica = false
        cont2 = false
      opzioni = false
      crediti = false
      console.log('1')
    }, 1000)
    setTimeout(()=>{
        caricamento = false
        verifica= true
        audioAmb.volume = 1
        audioAmb.currentTime =  0
        console.log('2')
    }, 3000)
  }
  break;
  case 'no':
  if (!suono){
  audioTorna.volume = 0
          document.addEventListener('click', ()=>{
    audioTorna.pause()
  })
        } else{
          audioTorna.volume = 1
        }
  audioTorna.play()
  if (conferma){
  setTimeout(()=>{
    tema.play()
    tema.volume = 1
    nuova = false
    conferma = false
  cont = false
  localStorage.setItem('cont', JSON.stringify(cont))
  continuaGame()
}, 600)
  }
  break;
  }
}


  onMount(()=>{
  if (typeof window !== 'undefined'){
  const salvaCont = localStorage.getItem('cont')
    const salvaTrama = localStorage.getItem('trama')
    const salvaRisp =localStorage.getItem('risp')
    const salvaRisp1 = localStorage.getItem('risp1')
    const salvaLev =localStorage.getItem('nextLevel')
    const salvaBlocca = localStorage.getItem('blocca2')

    if (salvaTrama){
      trama = salvaTrama
    }
    if (salvaRisp){
      risp = salvaRisp
    }
    if (salvaRisp1){
      risp1 = salvaRisp1
    }
    if (salvaLev){
      nextLevel = salvaLev
    }
    if (salvaCont){
      cont = JSON.parse(salvaCont)
    }
    if (salvaBlocca){
      blocca2 = JSON.parse(salvaBlocca)
    }
  }
})

const continuaGame=()=>{
    const ilnome = localStorage.getItem('nome')
    const salvaTrama = localStorage.getItem('trama')
    const salvaRisp =localStorage.getItem('risp')
    const salvaRisp1 = localStorage.getItem('risp1')
    const salvaLev =localStorage.getItem('nextLevel')
    const salvaBlocca = localStorage.getItem('blocca2')

  nextLevel = salvaLev
  trama = salvaTrama
  risp = salvaRisp
  risp1 = salvaRisp1
  nome = ilnome
  if (risp1 === ''){
  blocca2 = salvaBlocca
  }else if (risp1 !== ''){
    blocca2 = false
    localStorage.setItem('blocca2', JSON.stringify(blocca2))
  }
}



  const salvaGame=()=>{
    const audioSaving = new Audio(saving);
    if (!suono){
  audioSaving.volume = 0
          document.addEventListener('click', ()=>{
    audioSaving.pause()
  })
        } else{
          audioSaving.volume = 1
        }
    audioSaving.currentTime = 0
    audioSaving.play()
    giocoSalvato()
    cont = false
    localStorage.setItem('blocca2', JSON.stringify(blocca2))
    localStorage.setItem('cont', JSON.stringify(cont))
    localStorage.setItem('trama', trama);
    localStorage.setItem('risp', risp);
    localStorage.setItem('risp1', risp1);
    localStorage.setItem('nextLevel', nextLevel);
  }


  let start = true

  const inizia=()=>{
    const star = new Audio(starta)
    star.play()
    if (start){
      setTimeout(()=>{
      start = false
      }, 700)
    }
  }


  let crediti = false
  let opzioni = false
  let nuova = false
  let caricamento = false
  let cont2 = false
  let caricamento2 = false
  let verifica = true

  const apriMenu=(menu)=>{
const audioMain = new Audio(main)
const audioTorna = new Audio(torna)
const tema = document.getElementById('temah')
const audioAmb = document.getElementById('amb')
   switch (menu) {
    case 'crediti':
    if (!suono){
          document.addEventListener('click', ()=>{
    audioMain.pause()
  })
  document.addEventListener('click', ()=>{
    audioTorna.pause()
  })
      audioTorna.volume = 0
      audioMain.volume = 0
        } else{
          audioMain.volume = 1
          audioTorna.volume = 1
        }
    if (!crediti){
      tema.play()
      tema.volume = 1
      audioMain.currentTime = 0
        audioMain.play()
      setTimeout(()=>{
        crediti = true
      opzioni = false
      nuova = false
      }, 600)
    } else{
      audioTorna.volume = 1
      audioTorna.currentTime = 0
      audioTorna.play()
      setTimeout(()=>{
      crediti = false
    }, 600)
    }break;
      case 'opzioni':
      if (!suono){
          document.addEventListener('click', ()=>{
    audioMain.pause()
    audioTorna.pause()
  })
  audioMain.volume = 0
  audioTorna.volume = 0
        } else{
          audioMain.volume = 1
          audioTorna.volume = 1
        }
    if (!opzioni){
      tema.play()
      tema.volume = 1
      audioMain.currentTime = 0
        audioMain.play()
      setTimeout(()=>{
        opzioni = true
      crediti = false
      nuova = false
      }, 600)
    } else{
      audioTorna.volume = 1
      audioTorna.currentTime = 0
      audioTorna.play()
      setTimeout(()=>{
      opzioni = false
    }, 600)
    }
   
    break;
    case 'menu':
    if (!suono){
  audioTorna.volume = 0
  audioAmb.volume= 0
  const me = document.getElementById('me')
          me.addEventListener('click', ()=>{
    audioTorna.pause()
  })
  me.addEventListener('click', ()=>{
    audioAmb.pause()
  })
        } else{
          audioTorna.volume = 1
          audioAmb.volume=1
        }
      if (nuova){
        audioTorna.currentTime = 0
        audioTorna.volume = 1
          audioTorna.play()
        setTimeout(()=>{
        nuova = false
      blocca = true
      latrama = false
      salvata = false
      conferma = false
        tema.play()
        audioAmb.pause()
        tema.volume = 1
      audioAmb.volume = 0
      tema.currentTime = 0
    }, 600)
      }
      if (!cont2){
        audioTorna.currentTime = 0
        audioTorna.volume = 1
          audioTorna.play()
        setTimeout(()=>{
        tema.play()
        audioAmb.pause()
        tema.volume = 1
      audioAmb.volume = 0
      tema.currentTime = 0
    }, 600)
      }
      break;
      case 'nuova':
      if (!suono){document.addEventListener('click', ()=>{
    audioMain.pause()
  })
  audioMain.volume = 0
        } else{
          audioMain.volume = 1
        }
      audioMain.currentTime = 0
        audioMain.play()

        const nomeh = localStorage.getItem('nome')
        if (nomeh){
          nome = nomeh
        }

        if (!cont){
        conferma = true
        } else if (!nuova){ 
        tema.volume = 0
        tema.pause()
      audioAmb.play()
      audioAmb.currentTime = 0
      audioAmb.volume = 1
      setTimeout(()=>{
        newGame()
        cont = true
        localStorage.setItem('cont', JSON.stringify(cont))
        blocca = true
        nuova = true
        caricamento = true
        verifica = false
        cont2 = false
      opzioni = false
      crediti = false
      }, 1000)
      setTimeout(()=>{
        nuova = true
        caricamento = false
        verifica = true
      opzioni = false
      cont2 = false
      crediti = false
      blocca = true
      }, 5000)
      if (nome !== ''){
      setTimeout(()=>{
        verifica = true
        blocca = false
        latrama = true
        salvata = true
    }, 5200)
      }
    } else{
      nuova = false
      blocca = true
      latrama = false
    } 
    break;
      case 'cont':
      if (!suono){
        document.addEventListener('click', ()=>{
    audioMain.pause()
     })
      audioMain.volume = 0
        } else{
          audioMain.volume = 1
        }

      salvaNome()

      setTimeout(()=>{
      audioAmb.play()
      audioAmb.currentTime = 0
      audioAmb.volume = 1
      }, 1000)

      const clickHandler = () => {
    tema.pause();
    tema.volume = 0;
    document.removeEventListener('click', clickHandler);
  };

  document.addEventListener('click', clickHandler);
      if (cont2){
        audioMain.currentTime = 0
        audioMain.play()
      setTimeout(()=>{
        continuaGame()
        blocca = true
        nuova = false
        caricamento2 = true
        cont2 = false
      opzioni = false
      crediti = false
      }, 1000)
      setTimeout(()=>{
        nuova = false
        caricamento2 = false
      opzioni = false
      cont2 = false
      crediti = false
      blocca = true
      }, 5000)
    } else{
        tema.play()
        tema.volume = 1
      nuova = true
      blocca = true
      latrama2 = false
    }break;
   
    default:
      break;
   }
  }


  onMount(()=>{
    if (typeof window !== 'undefined'){
    const salvaInc = localStorage.getItem('incognito')
    const salvaDem = localStorage.getItem('demone')
    const salvaMus = localStorage.getItem('musica')
    const salvaSuo = localStorage.getItem('suono')
    const salvaMut = localStorage.getItem('volumeh')
    if (salvaInc){
      incognito = JSON.parse(salvaInc)
    }
    if (salvaDem){
      demone = JSON.parse(salvaDem)
    }
    if (salvaMus){
      musica = JSON.parse(salvaMus)
    }
    if (salvaSuo){
      suono = JSON.parse(salvaSuo)
    }
    if (salvaMut){
    volumeh = JSON.parse(salvaMut)
    }
    }
  })

 
  let incognito = false;
  let demone = false;

  const cambiaMode = (mode) => {
    const audioScelta = new Audio(scelta);
    switch (mode) {
      case 'inc':
      if (!suono){
        document.addEventListener('click', ()=>{
    audioScelta.pause()
  })
          audioScelta.volume = 0
        } else{
          audioScelta.volume = 1
        }
        if (!incognito){
        audioScelta.currentTime = 0;
        audioScelta.play();
        incognito = true;
        demone = false;
        }else{
        audioScelta.currentTime = 0;
        audioScelta.play();
        incognito = false;
        }
        break;
      case 'demon':
      if (!suono){
        document.addEventListener('click', ()=>{
    audioScelta.pause()
  })
          audioScelta.volume = 0
        } else{
          audioScelta.volume = 1
        }
        if (!demone){
        audioScelta.currentTime = 0;
        audioScelta.play();
        demone = true;
        incognito = false;
        }else{
        audioScelta.currentTime = 0;
        audioScelta.play();
        demone = false;
        }
        break;
    }
    localStorage.setItem('demone', JSON.stringify(demone));
    localStorage.setItem('incognito', JSON.stringify(incognito));
  };

 

 let musica = true
 let suono = true
 let volumeh = vol

 const gestisciSuono = () => {
  const audioScelta = document.getElementById('scelta');
  if (suono) {
    suono = false;
    volumeh = mute;
  } else {
    audioScelta.currentTime = 0;
    audioScelta.play();
    suono = true;
    volumeh = vol;
  }
  localStorage.setItem('volumeh', JSON.stringify(volumeh));
  localStorage.setItem('suono', JSON.stringify(suono));
};


onMount(()=>{
  const tema =  document.getElementById('temah');
  tema.play()
  tema.volume = 1

  const iniz = document.getElementById('ini')
  iniz.addEventListener('click', ()=>{
    tema.play()
    tema.volume =1
  })
})

const gestisciMusica = () => {
  const tema = document.getElementById('temah');
  const audioAmb = document.getElementById('amb')
  const audioScelta = document.getElementById('scelta');
  if (!suono){
    audioScelta.volume = 0
  }
  if (!musica) {
    tema.play()
    musica = true
  audioScelta.play()
  audioScelta.currentTime = 0
  } else {
    audioAmb.volume = 0
    tema.pause()
    musica = false
  audioScelta.play()
  audioScelta.currentTime = 0
  }
  localStorage.setItem('musica', JSON.stringify(musica))
};


  let test = new Date()

 const tempo=()=>{
  const newtime = setInterval(()=>{
    test = new Date()
  }, 1000)
  return ()=> clearInterval(newtime)
 }
tempo()
  


let salutiTime = ''

onMount(()=>{
  if (typeof window !== 'undefined'){
    const salvaTime = localStorage.getItem('salutiTime')
    if (salvaTime){
      salutiTime = JSON.parse(salvaTime)
    }
  }
})


const salutoTempo=()=>{
  let time = test.getHours()
    if (typeof window !== 'undefined'){
    if (time === 5 || time === 6 || time === 7 || time === 8 || time === 9 || time === 10 || time === 11 || time === 12){
    salutiTime = 'Buongiorno'
    mainSfondi = sfondo
  }else if (time === 13 || time === 14 || time === 15 || time === 16 || time === 17 || time === 18){
   salutiTime = 'Buon Pomeriggio'
   mainSfondi = sfondo
  }else if (time === 19 || time === 20 || time === 21 || time === 22 || time === 23){
   salutiTime = 'Buona Sera'
   mainSfondi = sfondon
  }else if (time === 0 || time === 1 || time === 2 || time === 3 || time === 4){
   salutiTime = 'Buona Notte'
   mainSfondi = sfondon
  }
  localStorage.setItem('salutiTime', JSON.stringify(salutiTime))
}
} 
salutoTempo()

/*
const frasi = [
  'ciao',
  'come stai?',
  'Buongiorno'
] 

let testofrasi= ''

const frasiRandom=()=>{
  const random = setInterval(()=>{
    const frandm = Math.floor(Math.random() * frasi.length)
    const thefrasi = frasi[frandm]
    testofrasi = thefrasi
  }, 5000)
  return ()=> clearInterval(random)
}
frasiRandom()
*/
</script>  


<style>


 .sfo{
  animation: 15s infinite alternate-reverse sfon;
 }
 @keyframes sfon {
  0%{scale: 100%;}
  100%{scale: 130%;}
  
 }

  .tran{
    transition: 1s;
  }
  .sfoca{
    animation: 1s forwards sfoc;
    opacity: 0;
  }
  @keyframes sfoc {
    0% {filter: blur(5px);}
    100%{filter: blur(0px); opacity: 1;}
  }

  .sfoca2{
    animation: 3s forwards sfoc2;
    opacity: 0;
  }
  @keyframes sfoc2 {
    0% {filter: blur(5px);}
    100%{filter: blur(0px); opacity: 1;}
  }

  .pulsa{
    animation: infinite 0.5s alternate-reverse puls;
  }
  @keyframes puls {
    from {opacity: 0.2; }
    to {opacity: 1;}
  }

  .pulsa2{
    animation: infinite 1s alternate-reverse puls2;
  }
  @keyframes puls2 {
    from {opacity: 0.2; }
    to {opacity: 1;}
  }

  .monst{
    font-family: 'Montserrat', sans-serif;
  }
</style>