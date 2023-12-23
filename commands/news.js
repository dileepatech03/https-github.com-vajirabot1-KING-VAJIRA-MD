const moment = require('moment-timezone') 
 const {fetchJson,cmd, tlang } = require('../lib') 
 let gis = require("async-g-i-s"); 
 const axios = require('axios') 
 const fetch = require('node-fetch') 
 const Esana = require('@sl-code-lords/esana-news') 
 var api = new Esana() 

//---------------------------------------------------------------------------
cmd({   
       pattern: "nasa",      
       react: "📃",   
       desc: "",   
       category: "news",   
       use: '.hirunews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const nasa = await fetchJson(`https://darkapi--technicalhacke4.repl.co/nasanews`);   
  
             const images = `${nasa.result.image}`   
              const title = `${nasa.result.title}`  
              const news = `${nasa.result.desc}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＮＡＳＡ ＢＹ ＶＡＪＩＲＡ\n\n*${ title }*\n\n _${news}._\n\n*📌 ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ...`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }}) 
//---------------------------------------------------------------------------
             
