<div class="flex justify-center items-center flex-row w-[100%] absolute top-[5%] rounded-2xl ">
  <div class="bg-neutral-900 rounded-2xl flex flex-row p-3 pl-2 justify-center absolute w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%]">
    <p class="text-xl text-pink-600 font-bold cursor-default monst  border-white">{test.toLocaleTimeString()} -  </p>
<p class="text-xl text-pink-600 font-bold cursor-default relative monst left-1 sfoca2 ">{salutiTime}</p>
  </div>
</div>

<div class='flex w-[100%] justify-center absolute top-[10%] 2xl:top-[20%]'>
  <div class="bg-gradient-to-t from-slate-900 to-slate-950 border-2 border-slate-600 h-[550px] md:h-[700px] w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%] 2xl:scale-125  rounded-2xl">
    <div class="flex justify-center w-[100%]">
      <img src={layla} class="w-[200px] md:w-[300px] lg:w-[400px] 2xl:w-[500px]"/>
    </div>
  
   <div class="flex justify-center w-[100%]">
    <div class="bg-gradient-to-t from-pink-900 to-pink-950 border-2 border-pink-900 rounded-xl flex items-center justify-center w-[95%] h-[300px]">
      <div class="{crediti ? "hidden" : "grid"} {opzioni ? "hidden": "grid"} {nuova ? "hidden": "grid"} w-[95%] h-[280px] border-2 border-pink-900 bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-4 gap-8 p-3 justify-center justify-items-center">
      <button on:click="{()=>apriMenu('cont')}" disabled={!cont} class="{cont ? "": "opacity-20 cursor-not-allowed"} text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Continua Partita</button>
      <button on:click="{()=>apriMenu('nuova')}" class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Nuova Partita</button>
      <button on:click="{()=>apriMenu('opzioni')}" class=" text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Opzioni</button>
      <button on:click="{()=>apriMenu('crediti')}" class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Crediti</button>
     
    </div>

      <div class="{crediti ? "grid": "hidden"}  w-[95%] h-[280px] border-2 border-pink-900 bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center">
        <p class="monst text-white font-bold relative top-[100px]">Giochino creato da Alessio Santillo</p>
        <p on:click="{()=>apriMenu('crediti')}" class="text-white monst flex items-center cursor-pointer justify-center w-[80%] h-[50px] relative top-[30px] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Torna al menu principale</p>
      </div>

      <div class="{opzioni ? "grid": "hidden"}  w-[95%] h-[280px] border-2 border-pink-900 bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center">
        <p class="monst text-white font-bold relative top-[100px]">Da mettere: Emo Layla, Giuggy Mode, Ciclo Layla</p>
        <p on:click="{()=>apriMenu('opzioni')}" class="text-white monst flex items-center cursor-pointer justify-center w-[80%] h-[50px] relative top-[30px] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Torna al menu principale</p>
      </div>

      <div class="{nuova ? "grid": "hidden"} {cont ? "grid": "hidden"}  sfoca w-[100%] h-[280px] border-2 border-pink-900 bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center">
        <div class="{caricamento ? "hidden": "flex"} {latrama ? "hidden": "flex"}  justify-center items-center w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
          <p class=" sfoca2 monst text-white text-sm font-bold relative top-[5px] text-justify flex justify-start ">Benvenuto a Le Avventure di Layla! per cominciare, inserisci il tuo nome di merda, muoviti:</p>
          <div class="flex justify-center items-center w-[100%] top-[55px] relative flex-col" >
            <input on:change="{Entra}" placeholder="Inserisci il tuo lurido nome qui..." bind:value="{nome}" class="rounded-xl outline-none w-[300px] p-3 mb-2" maxlength="30"/>
            <button on:click="{()=>salvaNome()}" class='text-white font-semibold rounded-xl bg-gradient-to-t from-green-950 to-green-600 border-2 border-green-600 hover:from-teal-950 hover:to-teal-600 hover:border-teal-600 w-[300px]'>Fatto</button>
          </div>
        </div>

        <div class="{latrama ? "flex": "hidden"} justify-start w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col">
          <p class=" sfoca2 monst text-white text-sm font-bold relative top-[5px] text-justify flex justify-start ">{trama}</p>
          
        </div>

        
        <p class="{caricamento ? "visible": "invisible"} sfoca monst text-white font-bold absolute top-[100px] pulsa">Caricamento...</p>
        <div class="flex flex-row w-[100%] top-[-150px] justify-between relative">
          <p on:click="{()=>apriMenu('menu')}" class="{caricamento ? "hidden": "flex"} sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[20%] h-[30px] relative rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Menu</p>
          <p on:click="{()=>salvaGame()}" class="{caricamento ? "hidden": "flex"} sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[40%] h-[30px] relative  rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">{save}</p> 
        </div>
      </div>



    </div>
   </div>

   <div class="flex flex-col w-[100%] relative top-[3%] items-center justify-center">
    <button on:click="{()=>gioca('risp')}" disabled={blocca} class="{blocca ? "hidden cursor-default": "opacity-100 cursor-pointer"} sfoca w-[95%] h-[50px] monst relative rounded-xl p-3 mb-2 border-2 border-pink-900 bg-gradient-to-b from-pink-950 to-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900 text-white font-semibold">{risp}</button>
    <button on:click="{()=>gioca('risp1')}" disabled={blocca} class="{blocca ? "hidden cursor-default": "opacity-100 cursor-pointer"} sfoca w-[95%] h-[50px]  monst relative rounded-xl p-3 mb-2 border-2 border-pink-900 bg-gradient-to-b from-pink-950 to-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900 text-white font-semibold">{risp1}</button>
  </div>

  </div>

</div>



<!-- C7WN97HZUZLNTWAFGLA5SWTB key per twilio -->

<script>

  import layla from './imma/layla.png'
	import { onMount } from 'svelte';


  let nome = ''
  let latrama = false


  const salvaNome=()=>{
    const sNome = localStorage.getItem('nome') 
    if (sNome){
      nome = JSON.parse(sNome)
    }   

    if (typeof window !== 'undefined'){
      latrama = true
      localStorage.setItem('nome', JSON.stringify(nome))
    
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


  const storia = {
	intro:{text:`Benvenuto ${nome}! Sei pronto ad aiutarmi nella mia avventura? Mi raccomando rispondi di si!`,
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



  const gioca=(risposta)=>{
   switch(risposta){
    case 'risp':
      nextLevel = storia[nextLevel].nextLev[0]
      trama = storia[nextLevel].text
   risp = storia[nextLevel].ris[0]
   risp1 = storia[nextLevel].ris[1]
   console.log(trama)
      break;
      case 'risp1':
      nextLevel = storia[nextLevel].nextLev[1]
      trama = storia[nextLevel].text
   risp = storia[nextLevel].ris[0]
   risp1 = storia[nextLevel].ris[1]
   console.log(trama)
      break;
      default:
        break;
   }
  
  }


  const continueGame=()=>{
   localStorage.getItem('nextLevel')
   localStorage.getItem('trama')
   localStorage.getItem('risp')
   localStorage.getItem('risp1')
  }

  const giocoSalvato= async ()=>{
    save = 'Salvataggio...';
  await new Promise(resolve => setTimeout(resolve, 1700));

  save = 'Partita salvata!';
  await new Promise(resolve => setTimeout(resolve, 3800));

  save = 'Salva la partita';
}


  let save = 'Salva la partita'

  const salvaGame=()=>{
    cont = true

    giocoSalvato()

    const salvaCont = localStorage.getItem('cont')
    const salvaTrama = localStorage.getItem('trama')
    const salvaRisp =localStorage.getItem('risp')
    const salvaRisp1 = localStorage.getItem('risp1')
    const salvaLev =localStorage.getItem('nextLevel')

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

    if (typeof window !== 'undefined') {
      localStorage.setItem('cont', JSON.stringify(cont))
    localStorage.setItem('trama', JSON.stringify(trama));
    localStorage.setItem('risp', JSON.stringify(risp));
    localStorage.setItem('risp1', JSON.stringify(risp1));
    localStorage.setItem('nextLevel', JSON.stringify(nextLevel));
  }

    setTimeout(()=>{
      save = 'Salvataggio...'
    }, 3000)

    setTimeout(()=>{
      save = 'Partita Salvata!'
    }, 6000)

  }


const newGame=()=>{
  nextLevel = 'intro'
  trama = storia.intro.text
  risp = storia.intro.ris[0]
  risp1 = storia.intro.ris[1]
}


  let crediti = false
  let opzioni = false
  let nuova = false
  let cont = false

  let caricamento = false
 
  const apriMenu=(menu)=>{
   switch (menu) {
    case 'crediti':
    if (!crediti){
      setTimeout(()=>{
        crediti = true
      opzioni = false
      nuova = false
      cont = false
      }, 600)
    } else{
      crediti = false
    }break;
      case 'opzioni':
    if (!opzioni){
      setTimeout(()=>{
        opzioni = true
      crediti = false
      nuova = false
      cont = false
      }, 600)
    } else{
      opzioni = false
    }break;
    case 'menu':
      if (nuova){
        nuova = false
      blocca = true
      latrama = false
      }
      break;
      case 'nuova':
    if (!nuova){ 
      setTimeout(()=>{
        newGame()
        blocca = true
        nuova = true
        caricamento = true
      opzioni = false
      crediti = false
      }, 1000)
      setTimeout(()=>{
        nuova = true
        caricamento = false
      opzioni = false
      crediti = false
      blocca = true
      }, 5000)
    } else{
      nuova = false
      blocca = true
      latrama = false
    }break;
      case 'cont':
    if (!cont){
      setTimeout(()=>{
        continueGame()
      opzioni = false
      nuova = false
      crediti = false
      caricamento = true
      blocca = true
      }, 1000)
      setTimeout(()=>{
      opzioni = false
      nuova = false
      crediti = false
      caricamento = false
      blocca = true
      }, 5000)
    } else{
      blocca = true
      latrama = false
    }break;
   
    default:
      break;
   }
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
    salutiTime = 'Buon Porcogiorno'
  }else if (time === 13 || time === 14 || time === 15 || time === 16 || time === 17 || time === 18){
   salutiTime = 'Buon Porcheriggio'
  }else if (time === 19 || time === 20 || time === 21 || time === 22 || time === 23){
   salutiTime = 'Buona Porcasera'
  }else if (time === 0 || time === 1 || time === 2 || time === 3 || time === 4){
   salutiTime = 'Buona Porcanotte'
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