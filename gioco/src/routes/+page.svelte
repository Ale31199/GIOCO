<div class="flex justify-center items-center flex-row w-[100%] absolute top-[5%] rounded-2xl ">
  <div class="bg-neutral-900 rounded-2xl flex flex-row p-3 pl-2 justify-center absolute w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%]">
    <p class="text-xl text-pink-600 font-bold cursor-default monst  border-white">{test.toLocaleTimeString()} -  </p>
<p class="text-xl text-pink-600 font-bold cursor-default relative monst left-1 sfoca2 ">{salutiTime}</p>
  </div>
</div>

<div class='flex w-[100%] justify-center absolute top-[10%]'>
  <div class="bg-slate-900 border-2 border-slate-600 h-[550px] md:h-[700px] w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%] rounded-2xl">
    <div class="flex justify-center w-[100%]">
      <img src={layla} class="w-[200px] md:w-[300px] lg:w-[400px] 2xl:w-[500px]"/>
    </div>
  
   <div class="flex justify-center w-[100%]">
    <div class="bg-gradient-to-t from-pink-900 to-pink-950 border-2 border-pink-900 rounded-xl flex items-center justify-center w-[95%] h-[300px]">
      <div class="grid w-[95%] h-[280px] border-2 border-pink-900 bg-black bg-opacity-70 rounded-lg grid-cols-1 grid-rows-4 gap-8 p-3 justify-center justify-items-center">
      <p class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Continua Partita</p>
      <p class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Nuova Partita</p>
      <p class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Opzioni</p>
      <p class="text-white monst flex items-center cursor-pointer justify-center w-[60%] rounded-xl bg-gradient-to-t from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900">Crediti</p>
      </div>

      <div class="grid w-[95%] h-[280px] border-2 border-pink-900 bg-white bg-opacity-70 hidden rounded-lg grid-cols-1 grid-rows-4 gap-8 p-3 justify-center justify-items-center">
      </div>


    </div>
   </div>

   <div class="flex flex-col w-[100%] relative top-[3%] items-center justify-center">
    <button class="w-[95%] h-[50px] monst relative rounded-xl p-3 mb-2 border-2 border-pink-900 bg-gradient-to-b from-pink-950 to-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900 text-white font-semibold">Coming sus...</button>
    <button class="w-[95%] h-[50px]  monst relative rounded-xl p-3 mb-2 border-2 border-pink-900 bg-gradient-to-b from-pink-950 to-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900 text-white font-semibold">Porchissimamente...</button>
  </div>

  </div>
</div>



<!-- C7WN97HZUZLNTWAFGLA5SWTB key per twilio -->

<script>

  import layla from './imma/layla.png'
	import { onMount } from 'svelte';

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

  .monst{
    font-family: 'Montserrat', sans-serif;
  }
</style>