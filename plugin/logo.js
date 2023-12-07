
 const { tlang,cmd } = require('../lib')
 const Config = require('../config')
 const prefix = Config.prefix
 const maker = require('mumaker')
 let cap = `*_Made By ${Config.botname}_*`
     //---------------------------------------------------------------------------
 cmd({ pattern: "deepsea1", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "horror1", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "whitebear1", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: `Made by ${tlang().title},For my ${tlang().greet}` }, { quoted: citel })
     })
