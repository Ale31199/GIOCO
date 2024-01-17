<div class="flex justify-center items-center flex-row w-[100%] absolute top-[5%] rounded-2xl ">
  <div class="bg-neutral-900 rounded-2xl flex flex-row p-3 pl-2 justify-center absolute w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%]">
    <p class="text-xl text-pink-600 font-bold cursor-default monst  border-white">{test.toLocaleTimeString()} -  </p>
<p class="text-xl text-pink-600 font-bold cursor-default relative monst left-1 sfoca2 ">{salutiTime}</p>
  </div>
</div>

<div class='flex w-[100%] justify-center absolute top-[10%] 2xl:top-[20%]'>
  <div class="bg-gradient-to-t  h-[550px] md:h-[700px] w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%] rounded-2xl {incognito ? "from-neutral-900 to-neutral-950 border-2 border-neutral-600": "from-slate-900 to-slate-950 border-2 border-slate-600" && demone ? "to-red-900 from-neutral-950 border-2 border-red-600": "from-slate-900 to-slate-950 border-2 border-slate-600"}">
    <div class="flex justify-center w-[100%] h-full relative overflow-hidden">
      <img src={sfondo} class="object-cover w-full h-full sfo rounded-2xl opacity-35 {incognito ? "saturate-0":""} absolute" />
      <img src={layla} alt="layla" class="w-[200px] md:w-[400px] lg:w-[400px] 2xl:w-[450px] sfoca2 absolute"/>
    </div>
  
   <div class="flex justify-center w-[100%] sfoca2 relative top-[-450px]">
    <div class="bg-gradient-to-t opacity-95 {incognito ? "from-neutral-800 to-neutral-950 border-2 border-neutral-800":" from-pink-900 to-pink-950 border-2 border-pink-900" && demone ? "from-neutral-900 to-neutral-950 border-2 border-neutral-900":" from-pink-900 to-pink-950 border-2 border-pink-900"}  rounded-xl flex items-center justify-center w-[95%] h-[300px]">
      
      <div class="{crediti ? "hidden" : "grid"} {opzioni ? "hidden": "grid"} {nuova ? "hidden": "grid"} {cont2 ? "hidden": "grid"}  w-[95%] h-[280px] border-2 {incognito ? "border-neutral-800":"border-pink-900" && demone ? "border-red-800":"border-pink-900"} bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-4 gap-8 p-3 justify-center justify-items-center">
      <button on:click="{()=>apriMenu('cont')}" disabled={cont} class="{cont ? "opacity-20 cursor-not-allowed": ""} text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Continua Partita</button>
      <button on:click="{()=>apriMenu('nuova')}" class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Nuova Partita</button>
      <button on:click="{()=>apriMenu('opzioni')}" class=" text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Opzioni</button>
      <button on:click="{()=>apriMenu('crediti')}" class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Crediti</button>
     
    </div>

      <div class="{crediti ? "grid": "hidden"}  w-[95%] h-[280px] {incognito ? "border-2 border-neutral-900":"border-2 border-pink-900" && demone ? "border-2 border-red-900":"border-2 border-pink-900"} bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-5 gap-8 p-3 justify-center justify-items-center">
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Gioco ideato e sviluppato da Alessio Santillo</p>
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Immagini create da Copilot</p>
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Icone create da Flaticon</p>
        <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px]">Main Theme 'Dust to Dust' rubata a Quixotic</p>
        <button on:click="{()=>apriMenu('crediti')}" class="text-white monst flex items-center cursor-pointer justify-center w-[80%] h-[50px] relative top-[82px] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Torna al menu principale</button>
      </div>

      <div class="{opzioni ? "grid": "hidden"}  w-[95%] h-[280px] {incognito ? "border-2 border-neutral-900":"border-2 border-pink-900" && demone ? "border-2 border-red-900":"border-2 border-pink-900"} bg-black bg-opacity-70 rounded-lg grid-cols-2 grid-rows-3 gap-3 gap-y-[130px]  p-3 justify-center justify-items-center">
        <button on:click="{()=>cambiaMode('inc')}" class="{incognito ? "border-4 rounded-[50px] md:rounded-full":"border-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-neutral-950 to-neutral-700  border-neutral-700  hover:border-neutral-300">
          <img src="{inc}" alt="layla" class="w-[60px] invert" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px]">Layla Noir</p>
        </button>
        <button on:click="{()=>cambiaMode('demon')}"  class="{demone ? "border-4 rounded-[50px] md:rounded-full":"border-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-red-950 to-red-700 border-red-700 hover:border-neutral-300">
          <img src="{demon}" alt="layla" class="w-[60px] mb-1" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px]">Layla Demon</p>
        </button>
        <button on:click="{()=>gestisciSuono('musica')}" class="{musica ? "border-4 rounded-[50px] md:rounded-full":"border-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-green-950 to-green-700  border-green-700 hover:border-neutral-300">
          <img src="{music}" alt="layla" class="w-[60px] invert" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px]">Music</p>
        </button>
        <button on:click="{()=>gestisciSuono('suono')}" class="{suono ? "border-4 rounded-[50px] md:rounded-full":"border-4 rounded-2xl"} tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-violet-950 to-violet-700  border-violet-700 hover:border-neutral-300">
          <img src="{volumeh}" alt="layla" class="w-[60px] invert" />
          <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px]">Sound Effects</p>
        </button>
        
        <button on:click="{()=>apriMenu('opzioni')}" class="text-white monst flex items-center cursor-pointer col-span-2 justify-center w-[80%] h-[50px] relative top-[50px] rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Torna al menu principale</button>
      </div>

      <div class="{nuova ? "grid": "hidden"}  sfoca w-[100%] h-[280px] {incognito ? "border-2 border-neutral-900":"border-2 border-pink-900" && demone ? "border-2 border-red-900":"border-2 border-pink-900"} bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center">
        <div class="{caricamento ? "hidden": "flex"} {caricamento2 ? "hidden": "flex"} {latrama ? "hidden": "flex"} justify-center items-center w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
          <p class=" sfoca2 monst text-white text-[10px] md:text-sm font-bold relative top-[-18px] text-justify flex justify-start ">Benvenuto su Undead Layla! per cominciare, inserisci il tuo nome di merda, muoviti:</p>
          <div class="flex justify-center items-center w-[100%] top-[35px] relative flex-col" >
            <input on:change="{Entra}" placeholder="Inserisci il tuo lurido nome qui..." bind:value="{nome}" class="rounded-xl outline-none w-[300px] p-3 mb-2" maxlength="30"/>
            <button on:click="{()=>salvaNome()}" class='text-white font-semibold rounded-xl p-2 bg-gradient-to-t from-green-950 to-green-600 border-2 border-green-600 hover:from-teal-950 hover:to-teal-600 hover:border-teal-600 w-[300px]'>Fatto</button>
          </div>
        </div>

        <div class="{latrama ? "flex": "hidden"} justify-start w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
          <p class=" sfoca2 monst text-white text-[10px] sm:text-sm font-bold relative top-[5px] text-justify flex justify-start ">{trama}</p>
        </div>

        
        <p class="{caricamento ? "visible": "invisible"} sfoca monst text-white text-xs md:text-base font-bold justify-center items-center absolute top-[150px] sm:top-[100px] pulsa">Caricamento...</p>

        <div class="flex flex-row w-[100%] top-[-150px] justify-between relative">
          <button on:click="{()=>apriMenu('menu')}" class="{caricamento ? "hidden": "flex"} sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[20%] h-[30px] relative rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">Menu</button>
          <button on:click="{()=>salvaGame()}" class="{salvata ? "flex": "hidden"} sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[40%] h-[30px] relative  rounded-xl bg-gradient-to-t {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"}">{save}</button> 
        </div>


         

        <div class="{cont2 ? "grid": "hidden"}  sfoca w-[100%] h-[280px] {incognito ? "border-2 border-neutral-900":"border-2 border-pink-900" && demone ? "border-2 border-red-900":"border-2 border-pink-900"} bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center">
       
          <div class="{latrama2 ? "flex": "hidden"} justify-start w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
            <p class=" sfoca2 monst text-white text-sm font-bold relative top-[5px] text-justify flex justify-start ">{trama}</p>
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
    <button on:click="{()=>gioca('risp1')}" disabled={blocca || blocca2} class="{blocca ? "hidden cursor-default": "opacity-100 cursor-pointer"} {blocca2 ? "hidden cursor-default": "opacity-100 cursor-pointer"} text-[11px] sm:text-sm  sfoca w-[95%] h-[50px]  monst relative rounded-xl p-3 mb-2 bg-gradient-to-b {incognito ? "from-neutral-950 to-neutral-900 border-2 border-neutral-700 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900" && demone ? "from-red-950 to-red-900 border-2 border-red-900 hover:from-orange-950 hover:to-orange-900 hover:border-orange-900":"from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900"} text-white font-semibold">{risp1}</button>
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
  import sfondo from './imma/OIG.jpg'

/*
  onMount(()=>{
    const tema = new Audio(theme)
    document.addEventListener('click', () => {
    tema.play();
  });
    tema.play()
   
  })
*/

  let nome = ''
  let latrama = false
  let latrama2  = false
  let salvata = false
  let salvata2 = false

    onMount(()=>{
      if (typeof window !== 'undefined'){
      const sNome = localStorage.getItem('nome') 
    if (sNome){
      nome = JSON.parse(sNome)
    }
  }})

  const salvaNome=()=>{
    const audioMain = new Audio(main);
   audioMain.currentTime = 0
    audioMain.play()

      latrama = true
      latrama2 = true
      salvata = true
      salvata2 = true
      localStorage.setItem('nome', JSON.stringify(nome))
      if (typeof window !== 'undefined'){
      const sNome = localStorage.getItem('nome') 
    if (sNome){
      nome = JSON.parse(sNome)
    }
  }
  
  setTimeout(()=>{
    blocca = false
  }, 700)
  }

  const Entra=(event)=>{
    if (event.key === 'Enter'){
      salvaNome()
    }
  }
 

  const usanome = 'Benvenuto' + nome + '\n Sei pronto ad aiutarmi nella mia avventura? Mi raccomando rispondi di si!'


  const storia = {
	intro:{text: usanome,
  ris:['Certo', 'Ue ciccia, ho da fare'],
  nextLev: ['start', 'end']},

  start:{ text:'Bene allora cominciamo',
          ris:['ok', ''],
          nextLev: ['inizio']},

  end:{  text:'Ma vaffanculo allora, ti muzzico tutti i fili della casa!',
         ris:['E io chiamo Zborro!', ''],
         nextLev: ['bho']},

         inizio : { text: 'testo di prova',
         ris: ['ciao', 'ciao'],
         nextLev:['si']},

         bho: {text: 'ciao stronzo',
        ris:['be', 'fd'],
      nextLev: ['fdfs']}
  
};
  

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
   switch(risposta){
    case 'risp':
      audioScelta.play()
      audioScelta.currentTime = 0
      nextLevel = storia[nextLevel].nextLev[0]
      trama = storia[nextLevel].text
   risp = storia[nextLevel].ris[0]
   risp1 = storia[nextLevel].ris[1]
   console.log(trama)
      break;
      case 'risp1':
      audioScelta.play()
      audioScelta.currentTime = 0
      nextLevel = storia[nextLevel].nextLev[1]
      trama = storia[nextLevel].text
   risp = storia[nextLevel].ris[0]
   risp1 = storia[nextLevel].ris[1]
   console.log(trama)
      break;
      default:
        break;
   }
   if (risp1 === ''){
    blocca2 = true
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

  onMount(()=>{
  if (typeof window !== 'undefined'){
  const salvaCont = localStorage.getItem('cont')
    const salvaTrama = localStorage.getItem('trama')
    const salvaRisp =localStorage.getItem('risp')
    const salvaRisp1 = localStorage.getItem('risp1')
    const salvaLev =localStorage.getItem('nextLevel')
    const salvaBlocca = localStorage.getItem('blocca2')

    if (salvaTrama){
      trama = JSON.parse(salvaTrama)
    }
    if (salvaRisp){
      risp = JSON.parse(salvaRisp)
    }
    if (salvaRisp1){
      risp1 = JSON.parse(salvaRisp1)
    }
    if (salvaLev){
      nextLevel = JSON.parse(salvaLev)
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
    audioSaving.currentTime = 0
    audioSaving.play()
    giocoSalvato()
    cont = false
    localStorage.setItem('blocca2', JSON.stringify(blocca2))
    localStorage.setItem('cont', JSON.stringify(cont))
    localStorage.setItem('trama', JSON.stringify(trama));
    localStorage.setItem('risp', JSON.stringify(risp));
    localStorage.setItem('risp1', JSON.stringify(risp1));
    localStorage.setItem('nextLevel', JSON.stringify(nextLevel));
  }



  let crediti = false
  let opzioni = false
  let nuova = false
  let caricamento = false
  let cont2 = false
  let caricamento2 = false

 
  const apriMenu=(menu)=>{
   switch (menu) {
    case 'crediti':
    if (!crediti){
const audioMain = new Audio(main);
      audioMain.currentTime = 0
        audioMain.play()
      setTimeout(()=>{
        crediti = true
      opzioni = false
      nuova = false
      }, 600)
    } else{
const audioTorna = new Audio(torna);
      audioTorna.currentTime = 0
      audioTorna.play()
      setTimeout(()=>{
      crediti = false
    }, 600)
    }break;
      case 'opzioni':
    if (!opzioni){
const audioMain = new Audio(main)
      audioMain.currentTime = 0
        audioMain.play()
      setTimeout(()=>{
        opzioni = true
      crediti = false
      nuova = false
      }, 600)
    } else{
const audioTorna = new Audio(torna);
      audioTorna.currentTime = 0
      audioTorna.play()
      setTimeout(()=>{
      opzioni = false
    }, 600)
    }break;
    case 'menu':
      if (nuova){
const audioTorna = new Audio(torna);
        audioTorna.currentTime = 0
          audioTorna.play()
        setTimeout(()=>{
        nuova = false
      blocca = true
      latrama = false
      salvata = false
    }, 600)
      }
      break;
      case 'nuova':
    if (!nuova){ 
const audioMain = new Audio(main);
      audioMain.currentTime = 0
        audioMain.play()
      setTimeout(()=>{
        newGame()
        cont = true
        localStorage.setItem('cont', JSON.stringify(cont))
        blocca = true
        nuova = true
        caricamento = true
        cont2 = false
      opzioni = false
      crediti = false
      }, 1000)
      setTimeout(()=>{
        nuova = true
        caricamento = false
      opzioni = false
      cont2 = false
      crediti = false
      blocca = true
      }, 5000)
    } else{
      nuova = false
      blocca = true
      latrama = false
    }break;
      case 'cont':
        
      salvaNome()
      if (cont2){ 
const audioMain = new Audio(main);
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
    switch (mode) {
      case 'inc':
        if (!incognito){
const audioScelta = new Audio(scelta);
        audioScelta.currentTime = 0;
        audioScelta.play();
        incognito = true;
        demone = false;
        }else{
          const audioScelta = new Audio(scelta);
        audioScelta.currentTime = 0;
        audioScelta.play();
        incognito = false;
        }
        break;
      case 'demon':
        if (!demone){
const audioScelta = new Audio(scelta);
        audioScelta.currentTime = 0;
        audioScelta.play();
        demone = true;
        incognito = false;
        }else{
          const audioScelta = new Audio(scelta);
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

/* 
 onMount(()=>{
      const tema = new Audio(theme);
      tema.play();
      tema.loop = true
  });
*/
 


const gestisciSuono=(opt)=>{
  switch(opt){
 case 'musica':
  const tema = new Audio(theme)
 if (musica){
const audioScelta = new Audio(scelta);
  
  audioScelta.play()
  audioScelta.currentTime = 0
  musica = false
 }else{
  const tema = new Audio(theme)
  tema.pause()
const audioScelta = new Audio(scelta);
  audioScelta.play()
  audioScelta.currentTime = 0
  musica = true
 }
 break;
 case 'suono':
 const audioScelta = new Audio(scelta);
const audioMain = new Audio(main)
const audioOver = new Audio(gameover)
const audioSaving = new Audio(saving)
const audioTorna = new Audio(torna)
 if (suono){
  audioScelta.muted = true
  audioMain.muted = true
  audioOver.muted = true
  audioSaving.muted = true
  audioTorna.muted = true
  audioScelta.currentTime = 0
  audioScelta.play()
  suono = false
  volumeh = mute
 }else{
  audioScelta.currentTime = 0
  audioScelta.play()
  suono = true
  audioScelta.muted = false
  audioMain.muted = false
  audioOver.muted = false
  audioSaving.muted = false
  audioTorna.muted = false
  volumeh = vol
 }
 break;
  }
  localStorage.setItem('volumeh', JSON.stringify(volumeh))
  localStorage.setItem('musica', JSON.stringify(musica))
  localStorage.setItem('suono', JSON.stringify(suono))
}




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
  }else if (time === 13 || time === 14 || time === 15 || time === 16 || time === 17 || time === 18){
   salutiTime = 'Buon Pomeriggio'
  }else if (time === 19 || time === 20 || time === 21 || time === 22 || time === 23){
   salutiTime = 'Buona Sera'
  }else if (time === 0 || time === 1 || time === 2 || time === 3 || time === 4){
   salutiTime = 'Buona Notte'
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
  animation: 20s infinite alternate-reverse sfon;
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

  .monst{
    font-family: 'Montserrat', sans-serif;
  }
</style>