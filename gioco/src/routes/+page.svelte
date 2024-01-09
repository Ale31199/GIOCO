<div class="flex justify-center items-center h-[70px] bg-black ml-[80px] mr-[80px] relative rounded-2xl top-[20px]">
<p class="text-5xl text-teal-500 font-bold cursor-default absolute left-[30px] pr-3 border-r-4 border-teal-500">{test.toLocaleTimeString()}</p>
<p class="text-5xl text-teal-900 font-bold cursor-default absolute left-[250px] ">{salutiTime}</p>
</div>

<div class='flex justify-center w-[100%] '>
<input on:keydown="{entra}" bind:value="{nu}" placeholder="Scrivi qualcosa..." type="text" class='absolute rounded-3xl outline-none border-none top-[90%] w-[60%] text-sm p-5 text-black'/>
<button on:click="{()=>scrivi()}" class="absolute right-[21%] top-[90.5%] rounded-2xl bg-black text-white p-3">invia</button>
<div class='absolute top-[20%] flex flex-col justify-center items-center w-[91%] h-[580px] bg-gradient-to-t to-teal-900 from-transparent rounded-xl overflow-y-auto p-3'>
  {#each ne as nuo}
  <p class='text-white bg-neutral-900 rounded-3xl p-2 text-base mb-3 ml-[30%] mr-[30%] sfoca  '>{nuo}
    <button on:click="{()=>togli(nuo)}" class="bg-red-800 rounded-lg relative right-0  w-[60px] ">Elimina</button></p>
  {/each}
</div>
</div>

<!-- C7WN97HZUZLNTWAFGLA5SWTB key per twilio -->

<script>
	import { onMount } from 'svelte';

  const cose = [1, 2]
  let test = new Date()

 const tempo=()=>{
  const newtime = setInterval(()=>{
    test = new Date()
  }, 1000)
  return ()=> clearInterval(newtime)
 }
tempo()
  

let nu = ''
let ne = []

onMount(()=>{
if (typeof window !== 'undefined'){
const save = localStorage.getItem('ne')
if (save){
  ne = JSON.parse(save)
}
}
})

const scrivi=()=>{
  ne = [...ne, nu]
  nu = ''
  localStorage.setItem('ne', JSON.stringify(ne))
}

const togli=(index)=>{
  ne = ne.filter(i=> i !== index)
  localStorage.setItem('ne', JSON.stringify(ne))
}

const entra=(event)=>{
  if (event.key === 'Enter'){
    scrivi() 
  }
}

const saluti = [
  'Buongiorno',
  'Buon Pomeriggio',
  'Buona Sera',
  'Buon Notte'
]



let salutiTime = 'Buongiorno'


onMount(()=>{
  if (typeof window !== 'undefined'){
    const salvaTime = localStorage.getItem('salutiTime')
    if (salvaTime){
      salutiTime = JSON.parse(salvaTime)
    }
  }

})

const salutoTempo=()=>{
  const tempo = setInterval(()=>{
    let time = test.toLocaleTimeString('it-IT', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
    if (time === '05:00:00'){
    salutiTime = saluti[0]
    localStorage.setItem('salutiTime', JSON.stringify(salutiTime))
  }else if (time === '13:00:00'){
   salutiTime = saluti[1]
   localStorage.setItem('salutiTime', JSON.stringify(salutiTime))
  }else if (time === '19:00:00'){
   salutiTime = saluti[2]
   localStorage.setItem('salutiTime', JSON.stringify(salutiTime))
  }else if (time === '00:00:00'){
   salutiTime = saluti[3]
   localStorage.setItem('salutiTime', JSON.stringify(salutiTime))
  }
  }, 1000)
 return()=> clearInterval(tempo)
}

salutoTempo()


const frasi = [
  'ciao',
  'come stai?',
  'Buongiorno'
] 

let testofrasi= 'ciao'

const frasiRandom=()=>{
  const random = setInterval(()=>{
    const frandm = Math.floor(Math.random() * frasi.length)
    const thefrasi = frasi[frandm]
    testofrasi = thefrasi
  }, 5000)
  return ()=> clearInterval(random)
}

frasiRandom()



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
</style>