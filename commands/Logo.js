const { tlang,cmd,Config } = require('../lib')
 const maker = require('mumaker')
 let cap = `*_GENERATE BY KING-VAJIRA-MD_*`
     //---------------------------------------------------------------------------
 cmd({ pattern: "deepsea", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://www.textstudio.com/logo/arcade-text-effect-832', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
