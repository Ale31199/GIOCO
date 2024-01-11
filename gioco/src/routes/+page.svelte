<div class="flex justify-center items-center flex-col w-[100%] absolute top-[40%] rounded-2xl ">
<p class="text-5xl text-white font-bold cursor-default pr-3 border-b-4 border-white">{test.toLocaleTimeString()}</p>
<p class="text-3xl text-white font-bold cursor-default sfoca2 ">{salutiTime}</p>
</div>



<!-- C7WN97HZUZLNTWAFGLA5SWTB key per twilio -->

<script>
	import { onMount } from 'svelte';

  let test = new Date()

 const tempo=()=>{
  const newtime = setInterval(()=>{
    test = new Date()
  }, 1000)
  return ()=> clearInterval(newtime)
 }
tempo()
  



const saluti = [
  'Buongiorno',
  'Buon Pomeriggio',
  'Buona Sera',
  'Buona Notte'
]

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
    if (time >= 5 && time < 12){
    salutiTime = saluti[0]
  }else if (time >= 13 && time < 18){
   salutiTime = saluti[1]
  }else if (time >= 19 && time < 23){
   salutiTime = saluti[2]
  }else if (time >= 0 && time < 4){
   salutiTime = saluti[3]
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
</style>