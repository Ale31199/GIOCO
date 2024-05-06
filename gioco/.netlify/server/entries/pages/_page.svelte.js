import { c as create_ssr_component, e as escape, d as add_attribute } from "../../chunks/ssr.js";
const layla = "/_app/immutable/assets/layla.4QN3AMxE.png";
const music = "/_app/immutable/assets/musicc.48vT7KBD.png";
const vol = "/_app/immutable/assets/volume.wJOwFlVK.png";
const inc = "/_app/immutable/assets/incognito.2_UKIO0P.png";
const demon = "/_app/immutable/assets/halloween.YaQNY-l0.png";
const gameover = "/_app/immutable/assets/gameover.-IHOc5jP.wav";
const main = "/_app/immutable/assets/mainmenu.QxhX6alv.wav";
const saving = "/_app/immutable/assets/saving.hpPlNqxS.wav";
const scelta = "/_app/immutable/assets/scelta.9rpxwAp7.wav";
const torna = "/_app/immutable/assets/tornaback.bVplCMFP.wav";
const theme = "/_app/immutable/assets/theme.NdZXSwvg.mp3";
const amb = "/_app/immutable/assets/ambient.tt1OhHo1.mp3";
const starta = "/_app/immutable/assets/start.qpBwITo5.wav";
const sfondo = "/_app/immutable/assets/OIG.sxQiJVCv.jpg";
const sfondon = "/_app/immutable/assets/OIGnotte.L7R73mCb.jpg";
const css = {
  code: ".sfo.svelte-14njp74{animation:15s infinite alternate-reverse svelte-14njp74-sfon}@keyframes svelte-14njp74-sfon{0%{scale:100%}100%{scale:130%}}.tran.svelte-14njp74{transition:1s}.sfoca.svelte-14njp74{animation:1s forwards svelte-14njp74-sfoc;opacity:0}@keyframes svelte-14njp74-sfoc{0%{filter:blur(5px)}100%{filter:blur(0px);opacity:1}}.sfoca2.svelte-14njp74{animation:3s forwards svelte-14njp74-sfoc2;opacity:0}@keyframes svelte-14njp74-sfoc2{0%{filter:blur(5px)}100%{filter:blur(0px);opacity:1}}.pulsa.svelte-14njp74{animation:infinite 0.5s alternate-reverse svelte-14njp74-puls}@keyframes svelte-14njp74-puls{from{opacity:0.2}to{opacity:1}}.pulsa2.svelte-14njp74{animation:infinite 1s alternate-reverse svelte-14njp74-puls2}@keyframes svelte-14njp74-puls2{from{opacity:0.2}to{opacity:1}}.monst.svelte-14njp74{font-family:'Montserrat', sans-serif}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nomereattivo;
  let mainSfondi = sfondo;
  let nome = "";
  const vediNome = () => {
    if (typeof window !== "undefined") {
      let ilmionome = localStorage.getItem("nome");
      if (ilmionome) {
        nome = ilmionome;
        nomereattivo = nome;
      }
    }
  };
  vediNome();
  let introNome = `Welcome ${nomereattivo}! Are you ready to help me with my adventure?!`;
  const storia = {
    intro: {
      text: introNome,
      ris: ["Of course, I will!", "Sorry, I dont think I am ready yet"],
      nextLev: ["start", "end"]
    },
    start: {
      text: `Ahh thanks ${nome}! oh wait, I'm sending you all the info about what's going on..... *sending data*`,
      ris: ["Lets go!", ""],
      nextLev: ["inizio"]
    },
    end: {
      text: "Are you sure? I really need your help... my communicator was able to reach only your signal after hours and hours of attempts... Dont you want to give me a hand?",
      ris: ["Eh ok :)", "Fine, just tell me what you need"],
      nextLev: ["bho", "bho"]
    },
    inizio: {
      text: "Chapter One: The Glitch City...",
      ris: ["Begin", ""],
      nextLev: ["si", "si"]
    },
    bho: {
      text: "Thanks! Let me just send you the breafing with all the info about what is going on..... *sending data*",
      ris: ["Perfect", ""],
      nextLev: ["inizio"]
    }
  };
  console.log(nomereattivo);
  console.log(storia.intro.text);
  let trama;
  let risp = "";
  let risp1 = "";
  let save = "Save game";
  let volumeh = vol;
  let test = /* @__PURE__ */ new Date();
  const tempo = () => {
    const newtime = setInterval(
      () => {
        test = /* @__PURE__ */ new Date();
      },
      1e3
    );
    return () => clearInterval(newtime);
  };
  tempo();
  let salutiTime = "";
  const salutoTempo = () => {
    let time = test.getHours();
    if (typeof window !== "undefined") {
      if (time === 5 || time === 6 || time === 7 || time === 8 || time === 9 || time === 10 || time === 11 || time === 12) {
        salutiTime = "Good Morning";
        mainSfondi = sfondo;
      } else if (time === 13 || time === 14 || time === 15 || time === 16 || time === 17 || time === 18) {
        salutiTime = "Good Afternoon";
        mainSfondi = sfondo;
      } else if (time === 19 || time === 20 || time === 21 || time === 22 || time === 23) {
        salutiTime = "Good Evening";
        mainSfondi = sfondon;
      } else if (time === 0 || time === 1 || time === 2 || time === 3 || time === 4) {
        salutiTime = "Good Night";
        mainSfondi = sfondon;
      }
      localStorage.setItem("salutiTime", JSON.stringify(salutiTime));
    }
  };
  salutoTempo();
  $$result.css.add(css);
  nomereattivo = "";
  return `<div class="flex justify-center items-center flex-row w-[100%] absolute top-[5%] rounded-2xl"><div class="bg-gradient-to-t from-neutral-900 to-black rounded-2xl flex flex-row p-3 pl-2 justify-center absolute w-[95%] md:w-[80%] lg:w-[60%] 2xl:w-[40%]"><p class="text-xl text-pink-600 font-bold cursor-default monst border-white svelte-14njp74">${escape(test.toLocaleTimeString())} -</p> <p class="text-xl text-pink-600 font-bold cursor-default relative monst left-1 sfoca2 svelte-14njp74">${escape(salutiTime)}</p></div></div> <div class="flex w-[100%] justify-center absolute top-[10%] 2xl:top-[20%]"><div class="${"bg-gradient-to-t h-[550px] md:h-[700px] w-[95%] md:w-[80%] lg:w-[70%] 2xl:w-[50%] rounded-lg " + escape(
    "from-slate-900 to-slate-950 border-2 border-slate-600",
    true
  )}"><div class="flex justify-center w-[100%] h-full relative overflow-hidden"><img${add_attribute("src", mainSfondi, 0)} class="${"object-cover w-full h-full sfo rounded-2xl opacity-55 " + escape("", true) + " absolute svelte-14njp74"}"> <img${add_attribute("src", layla, 0)} alt="layla" class="${"sfoca2 absolute tran " + escape(
    "w-[450px] md:w-[550px] lg:w-[600px] 2xl:w-[650px]",
    true
  ) + " svelte-14njp74"}"></div> <audio${add_attribute("src", theme, 0)} id="temah" autoplay loop></audio> <audio${add_attribute("src", amb, 0)} id="amb" loop></audio> <audio${add_attribute("src", main, 0)} id="main"></audio> <audio${add_attribute("src", saving, 0)} id="saving"></audio> <audio${add_attribute("src", scelta, 0)} id="scelta"></audio> <audio${add_attribute("src", gameover, 0)} id="gameover"></audio> <audio${add_attribute("src", torna, 0)} id="torna"></audio> <audio${add_attribute("src", starta, 0)} id="starta"></audio> <div class="${"justify-center w-[100%] sfoca2 relative top-[-250px] md:scale-125 " + escape("flex", true) + " svelte-14njp74"}"><button id="ini" class="text-white font-thin bg-gradient-to-t flex from-violet-900 to-neutral-950 border-b-2 border-violet-600 rounded-xl p-2 pr-8 pl-8 text-xl pulsa2 svelte-14njp74" data-svelte-h="svelte-do8g1f">Click to start</button></div> <div class="justify-items-center w-[100%] relative top-[-450px] grid"><div class="${escape("hidden", true) + " justify-items-center grid-cols-2 gap-8 grid-rows-2 rounded-2xl w-[95%] md:w-[80%] lg:w-[70%] 2xl:w-[50%] h-[300px] sfoca2 bg-gradient-to-t from-transparent to-black " + escape(
    "border-t-4 border-pink-900",
    true
  ) + " opacity-95 svelte-14njp74"}"><p class="monst text-white p-3 text-[10px] sm:text-sm font-bold relative col-span-2 top-[50px] text-center svelte-14njp74" data-svelte-h="svelte-dzvvti">You are about to start the game over again, are you sure you want to continue? You will lose your saved
					progress.</p> <div class="w-[95%] sm:w-[80%] 2xl:w-[80%] flex flex-row justify-center items-center col-span-2"><button class="${"text-white mr-10 monst flex items-center cursor-pointer justify-center w-[60%] h-[50px] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Yes</button> <button class="${"text-white ml-10 monst flex items-center cursor-pointer justify-center w-[60%] h-[50px] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">No</button></div></div></div> <div class="${"justify-center w-[100%] sfoca2 relative top-[-450px] " + escape("hidden", true) + " svelte-14njp74"}"><div class="${"bg-gradient-to-t opacity-95 " + escape("", true) + " " + escape(
    " from-transparent to-transparent ",
    true
  ) + " rounded-xl flex items-center justify-center w-[95%] h-[300px]"}"><div class="${escape("grid", true) + " " + escape("grid", true) + " " + escape("grid", true) + " " + escape("grid", true) + " " + escape("grid", true) + " w-[95%] sm:w-[80%] 2xl:w-[80%] h-[280px] border-t-4 " + escape(
    "border-pink-900",
    true
  ) + " bg-gradient-to-t from-transparent to-black bg-opacity-80 rounded-2xl grid-cols-1 grid-rows-4 gap-6 p-3 justify-center justify-items-center"}"><button id="co" ${"disabled"} class="${escape("opacity-20 cursor-not-allowed", true) + " text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Continue</button> <button id="nu" class="${"text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">New Game</button> <button id="op" class="${"text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Options</button> <button id="cr" class="${"text-white monst flex items-center cursor-pointer justify-center w-[80%] sm:w-[80%] 2xl:w-[90%] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Credits</button></div> <div class="${"sfoca " + escape("hidden", true) + " w-[95%] h-[280px] " + escape(
    "border-t-4 border-pink-900",
    true
  ) + " bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl grid-cols-1 grid-rows-6 gap-8 p-3 justify-center justify-items-center svelte-14njp74"}"><p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px] svelte-14njp74" data-svelte-h="svelte-uyt7oi">Game created and developed by Alessio Santillo</p> <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px] svelte-14njp74" data-svelte-h="svelte-u1ds69">Images generated with Copilot</p> <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px] svelte-14njp74" data-svelte-h="svelte-13ca7xt">Icons made with Flaticon</p> <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px] svelte-14njp74" data-svelte-h="svelte-dke1iw">Main Theme &#39;Dust to Dust&#39; by Quixotic</p> <p class="monst text-white text-[10px] md:text-sm font-bold relative animate-bounce text-center w-[60%] top-[20px] svelte-14njp74" data-svelte-h="svelte-mykspi">Gameplay Sountrack - &#39;SpaceWave&#39; di RemixSample</p> <button class="${"text-white monst flex items-center cursor-pointer justify-center w-[80%] h-[50px] relative top-[77px] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Back to Main Menu</button></div> <div class="${"sfoca " + escape("hidden", true) + " w-[95%] h-[280px] " + escape(
    "border-t-4 border-pink-900",
    true
  ) + " bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl grid-cols-2 grid-rows-3 gap-3 gap-y-[130px] p-3 justify-center justify-items-center svelte-14njp74"}"><button class="${escape(
    "border-b-4 rounded-2xl",
    true
  ) + " tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-neutral-950 to-transparent border-neutral-700 hover:border-neutral-300 svelte-14njp74"}"><img${add_attribute("src", inc, 0)} alt="layla" class="w-[60px] invert"> <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst svelte-14njp74" data-svelte-h="svelte-1icxen7">Layla Noir</p></button> <button class="${escape(
    "border-b-4 rounded-2xl",
    true
  ) + " tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-red-950 to-transparent border-red-700 hover:border-neutral-300 svelte-14njp74"}"><img${add_attribute("src", demon, 0)} alt="layla" class="w-[60px] mb-1"> <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst svelte-14njp74" data-svelte-h="svelte-1tjmzl2">Layla Demon</p></button> <button class="${escape(
    "border-b-4 rounded-[50px] md:rounded-full",
    true
  ) + " tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-green-950 to-transparent border-green-700 hover:border-neutral-300 svelte-14njp74"}"><img${add_attribute("src", music, 0)} alt="layla" class="w-[60px] invert"> <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst svelte-14njp74" data-svelte-h="svelte-19uuty9">Music</p></button> <button class="${escape(
    "border-b-4 rounded-[50px] md:rounded-full",
    true
  ) + " tran flex cursor-pointer justify-center items-center w-[80%] h-[120px] p-1 flex-col bg-gradient-to-t from-violet-950 to-transparent border-violet-700 hover:border-neutral-300 svelte-14njp74"}"><img${add_attribute("src", volumeh, 0)} alt="layla" class="w-[60px] invert"> <p class="text-white text-[10px] sm:text-sm font-semibold relative top-[5px] monst svelte-14njp74" data-svelte-h="svelte-9ek2zy">Sounds Effects</p></button> <button class="${"text-white monst flex items-center cursor-pointer col-span-2 justify-center w-[80%] h-[50px] relative top-[50px] rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Back to Main Menu</button></div> <div class="${escape("hidden", true) + " " + escape("grid", true) + " sfoca w-[100%] h-[280px] " + escape(
    "border-t-4 border-pink-900",
    true
  ) + " bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center svelte-14njp74"}"><div class="${escape("flex", true) + " " + escape("flex", true) + " " + escape("flex", true) + " " + escape("flex", true) + " justify-center items-center w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col svelte-14njp74"}"><p class="sfoca2 monst text-white text-[10px] md:text-sm font-bold relative top-[-18px] text-justify flex justify-start svelte-14njp74" data-svelte-h="svelte-1dcqu1h">Welcome to Undead Layla! Before we start, insert your name, then click &#39;Done&#39; to update the game. The page
							will reload automatically and you&#39;ll be able to start the game.</p> <div class="flex justify-center items-center w-[100%] top-[15px] relative flex-col"><input placeholder="Inserisci il tuo nome qui..." class="rounded-xl outline-none w-[300px] p-3 mb-2" maxlength="30"${add_attribute("value", nome, 0)}> <button id="ins" class="text-white font-semibold rounded-xl p-2 bg-gradient-to-t from-green-950 to-green-600 border-2 border-green-600 hover:from-teal-950 hover:to-teal-600 hover:border-teal-600 w-[300px]" data-svelte-h="svelte-b5wsyl">Done</button></div></div> <div class="${escape("hidden", true) + " justify-start w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col svelte-14njp74"}"><p class="sfoca2 monst text-white text-[10px] sm:text-sm font-bold relative top-[5px] text-justify flex justify-start svelte-14njp74">${escape(trama)}</p></div> <p class="${escape("invisible", true) + " " + escape("invisible", true) + " sfoca monst text-white text-xs md:text-base font-bold justify-center items-center absolute top-[150px] sm:top-[100px] pulsa svelte-14njp74"}">Loading...</p> <div class="flex flex-row w-[100%] top-[-150px] justify-between relative"><button id="me" class="${escape("flex", true) + " sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[20%] h-[30px] relative rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Menu</button> <button class="${escape("hidden", true) + " sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[40%] h-[30px] relative rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">${escape(save)}</button></div> <div class="${escape("hidden", true) + " sfoca w-[100%] h-[280px] " + escape(
    "border-t-4 border-pink-900",
    true
  ) + " bg-gradient-to-t from-neutral-900 to-black bg-opacity-80 rounded-2xl grid-cols-1 grid-rows-2 gap-8 p-3 justify-center justify-items-center svelte-14njp74"}"><div class="${escape("hidden", true) + " justify-start w-[100%] h-[225px] border-t-2 border-white sfoca2 relative top-[35px] flex-col svelte-14njp74"}"><p id="ty" class="sfoca2 monst text-white text-sm font-bold relative top-[5px] text-justify flex justify-start svelte-14njp74">${escape(trama)}</p></div> <p class="${escape("invisible", true) + " sfoca monst text-white font-bold absolute top-[100px] pulsa svelte-14njp74"}">Loading...</p> <div class="flex flex-row w-[100%] top-[-150px] justify-between relative"><button class="${escape("flex", true) + " sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[20%] h-[30px] relative rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">Menu</button> <button class="${escape("hidden", true) + " sfoca2 text-white monst flex items-center cursor-pointer justify-center w-[40%] h-[30px] relative rounded-xl bg-gradient-to-t " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " svelte-14njp74"}">${escape(save)}</button></div></div></div></div></div> <div class="flex flex-col w-[100%] relative top-[-430px] items-center justify-center"><button ${"disabled"} class="${escape(
    "hidden cursor-default",
    true
  ) + " text-[11px] sm:text-sm sfoca w-[95%] h-[50px] monst relative rounded-xl p-3 mb-2 bg-gradient-to-b " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " text-white font-semibold svelte-14njp74"}">${escape(risp)}</button> <button ${"disabled"} class="${"" + escape(
    "hidden cursor-default",
    true
  ) + " " + escape(
    "opacity-100 cursor-pointer",
    true
  ) + " text-[11px] sm:text-sm sfoca w-[95%] h-[50px] monst relative rounded-xl p-3 mb-2 bg-gradient-to-b " + escape(
    "from-pink-950 to-pink-900 border-2 border-pink-900 hover:from-violet-950 hover:to-violet-900 hover:border-violet-900",
    true
  ) + " text-white font-semibold svelte-14njp74"}">${escape(risp1)}</button></div></div> </div>`;
});
export {
  Page as default
};
