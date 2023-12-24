const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
 const maker = require('mumaker')
 let cap = `*_🖥️GENERATE BY KING-VAJIRA-MD_*`
 //---------------------------------------------------------------------------
cmd({

            pattern: "logo",           
            desc: "(setting list).",
            category: "Logo",
            react: "♻️",
            filename: __filename,
            use: '<text>',

        },

        async (Void,citel,text) => {
        let buttons = [{

                    buttonId: `${prefix}system`,
                    buttonText: {
                    displayText: "System",
                    },

                    type: 1,
                },
                  {
                    buttonId: `${prefix}ping`,
                    buttonText: {
                    displayText: "Ping",

                    },
                    type: 1,
                },
            ];
            let buttonMessage = {
                image: {
                    url: 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg',
                },

                caption: `

*⦁──👑𝙑𝘼𝙅𝙄𝙍𝘼 𝙇𝙊𝙂𝙊 𝘾𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

1)🎊► 𝗧𝗛𝗨𝗡𝗗𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Thunder2 vajira

2)🎊► 𝗥𝗔𝗜𝗡𝗕𝗢𝗪 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Rainbow vajira
 
3)🎊► 𝗦𝗨𝗡𝗦𝗘𝗧 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Sunset vajira
 
4)🎊► 𝗚𝗥𝗔𝗗𝗜𝗘𝗡𝗧 𝗡𝗘𝗢𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Gradient vajira
 
5)🎊► 𝗟𝗜𝗚𝗛𝗧 𝗚𝗟𝗢𝗪 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Lightglow vajira
 
6)🎊► 𝗙𝗜𝗥𝗘𝗪𝗢𝗥𝗞 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Firework vajira
 
7)🎊► 𝗚𝗥𝗘𝗘𝗡 𝗡𝗘𝗢𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Greenneon vajira
 
8)🎊► 𝗙𝗥𝗘𝗘 𝗚𝗟𝗢𝗪 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Free glow vajira
 
9)🎊► 𝗗𝗘𝗩𝗜𝗟 𝗪𝗜𝗡𝗚𝗦 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Devilwings vajira
 
10)🎊► 𝗕𝗢𝗞𝗘𝗛 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Bokeh vajira
 
11)🎊► 𝗛𝗢𝗟𝗢𝗚𝗥𝗔𝗣𝗛𝗜𝗖 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Holographic vajira
 
12)🎊► 𝗚𝗟𝗢𝗪𝗜𝗡𝗚 𝗡𝗘𝗢𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Glowingneon vajira
 
13)🎊► 𝗚𝗔𝗟𝗔𝗫𝗬 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Galaxy vajira
 
14)🎊► 𝗔𝗩𝗘𝗡𝗚𝗘𝗥𝗦 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Avengers vajira
 
15)🎊► 𝗦𝗣𝗔𝗖𝗘 3𝗗 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Space vajira
 
16)🎊► 𝗖𝗔𝗥𝗕𝗢𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Carbon vajira
 
17)🎊► 𝗕𝗥𝗘𝗔𝗞𝗘 𝗪𝗔𝗟𝗟 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Breakwall vajira
 
18)🎊► 𝗕𝗔𝗟𝗟𝗢𝗢𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Balloon vajira
 
19)🎊► 𝗦𝗨𝗠𝗠𝗘𝗥𝗬 𝗦𝗔𝗡𝗗 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}sand vajira
 
20)🎊► 𝗣𝗢𝗥𝗡𝗛𝗨𝗕 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Pornhub vajira

21)🎊► 𝗪𝗜𝗖𝗞𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Wicker vajira

22)🎊► 𝗦𝗣𝗢𝗢𝗞𝗬 𝗛𝗔𝗟𝗟𝗢𝗪𝗘𝗘𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}halloween vajira
 
24)🎊► 𝗩𝗜𝗗𝗘𝗢 𝗚𝗔𝗠𝗘 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Videogame vajira
 
25)🎊► 𝗗𝗘𝗘𝗣𝗦𝗘𝗔 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}Deepsea vajira
  
26)🎊► 𝗪𝗛𝗜𝗧𝗘 𝗕𝗘𝗔𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}whitebear vajira
  
27)🎊► 𝗝𝗢𝗞𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}joker vajira
  
28)🎊► 𝗠𝗘𝗧𝗔𝗟𝗟𝗜𝗖 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}metallic vajira
    
29)🎊► 𝗦𝗧𝗘𝗘𝗟 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}steel vajira
  
30)🎊► 𝗛𝗔𝗥𝗥𝗬𝗣𝗢𝗧𝗧𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}harrypotter vajira
  
31)🎊► 𝗨𝗡𝗗𝗘𝗥 𝗪𝗔𝗧𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}underwater vajira
   
32)🎊► 𝗟𝗨𝗫𝗨𝗥𝗬 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}luxury vajira
   
33)🎊► 𝗚𝗟𝗨𝗘 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}glue vajira
  
34)🎊► 𝗙𝗔𝗕𝗥𝗜𝗖 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}fabric vajira
  
35)🎊► 𝗧𝗢𝗫𝗜𝗖 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}toxic vajira
   
36)🎊► 𝗔𝗡𝗖𝗜𝗘𝗡𝗧 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}ancient vajira
   
37)🎊► 𝗖𝗟𝗢𝗨𝗗 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}cloud vajira
   
38)🎊► 𝗧𝗥𝗔𝗡𝗦𝗙𝗢𝗥𝗠𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}transformer vajira
  
39)🎊► 𝗧𝗛𝗨𝗡𝗗𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}thunder vajira
   
40)🎊► 𝗦𝗖𝗜𝗙𝗜 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}scifi vajira
  
41)🎊► 𝗦𝗔𝗡𝗗 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}sand2 vajira
  
42)🎊► 𝗥𝗔𝗜𝗡𝗕𝗢𝗪 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}rainbow vajira
  
43)🎊► 𝗣𝗘𝗡𝗖𝗜𝗟 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}pencil vajira
  
44)🎊► 𝗡𝗘𝗢𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}neon vajira
  
45)🎊► 𝗠𝗔𝗚𝗠𝗔 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}magma vajira
  
46)🎊► 𝗟𝗘𝗔𝗩𝗘𝗦 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}leaves vajira
  
47)🎊► 𝗚𝗟𝗜𝗧𝗖𝗛 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}glitch vajira
  
48)🎊► 𝗗𝗜𝗦𝗖𝗢𝗩𝗘𝗥𝗬 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}discovery vajira
  
49)🎊► 𝗖𝗛𝗥𝗜𝗦𝗧𝗠𝗔𝗦 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}christmas vajira
  
50)🎊► 𝗖𝗔𝗡𝗗𝗬 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}candy vajira
   
51)🎊► 1917 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}1917 vajira
   
52)🎊► 𝗕𝗟𝗔𝗖𝗞 𝗣𝗜𝗡𝗞 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}blackpink vajira

53)🎊► 𝗦𝗛𝗔𝗗𝗢𝗪 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}shadow vajira
  
54)🎊► 𝗦𝗟𝗜𝗠𝗘 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}slime vajira
  
55)🎊► 𝗟𝗔𝗩𝗔 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}lava vajira
  
56)🎊► 𝗟𝗜𝗤𝗨𝗜𝗗 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}liquid vajira
  
57)🎊► 𝗥𝗢𝗖𝗞 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}rock vajira
  
58)🎊► 𝗦𝗞𝗘𝗟𝗘𝗧𝗢𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}skeleton vajira
  
59)🎊► 𝗠𝗔𝗥𝗩𝗘𝗟 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}marvel vajira
  
60)🎊► 𝗕𝗔𝗧𝗠𝗔𝗡 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}batman vajira
  
61)🎊► 𝗕𝗨𝗥𝗚𝗘𝗥 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}burger vajira
  
62)🎊► 𝗙𝗢𝗚𝗚𝗬 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}foggy vajira
   
63)🎊► 𝗗𝗥𝗨𝗚 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}drug vajira
   
64)🎊► 𝗝𝗨𝗜𝗖𝗘 𝗟𝗢𝗚𝗢
 Eg:- ${prefix}juice vajira
                    
 
*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*▶ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ ◀*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
     //---------------------------------------------------------------------------
cmd({ pattern: "thunder2", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-thunder-text-effect-online-881.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
cmd({ pattern: "rainbow2", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/rainbow-equalizer-text-effect-902.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
    })
     //---------------------------------------------------------------------------
cmd({ pattern: "sunset", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "gradient", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "lightglow", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "firework", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/firework-sparkle-text-effect-930.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "greenneon", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/green-neon-text-effect-874.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "freeglow", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "devilwings", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "bokeh", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "holographic", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/holographic-3d-text-effect-975.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "glowingneon", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
//---------------------------------------------------------------------------
cmd({ pattern: "galaxy", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "avengers", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "space", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "carbon", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/carbon-text-effect-833.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "breakwall", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/break-wall-text-effect-871.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "balloon", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/gold-foil-balloon-text-effect-922.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "sand", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-summery-sand-writing-text-effect-988.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "pornhub", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "wicker", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/wicker-text-effect-online-932.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "halloween", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "videogame", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/video-game-classic-8-bit-text-effect-1037.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "deepsea", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "horror", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "whitebear", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "joker", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "metallic", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "steel", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/steel-text-effect-online-921.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "harrypotter", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-harry-potter-text-effect-online-1025.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "underwater", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "luxury", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/3d-luxury-gold-text-effect-online-1003.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "glue", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "fabric", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/fabric-text-effect-online-964.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "toxic", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/toxic-text-effect-online-901.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "ancient", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({
             pattern: "cloud",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "transformer",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-a-transformer-text-effect-online-1035.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "thunder",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/online-thunder-text-effect-generator-1031.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "scifi",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "sand2",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/write-in-sand-summer-beach-free-online-991.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "rainbow",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "pencil",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-a-sketch-text-effect-online-1044.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "neon",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "magma",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-a-magma-hot-text-effect-online-1030.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "leaves",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/natural-leaves-text-effect-931.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "glitch",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-impressive-glitch-text-effects-online-1027.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "discovery",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-space-text-effects-online-free-1042.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "christmas",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/christmas-tree-text-effect-online-free-1057.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "candy",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/create-christmas-candy-cane-text-effect-1056.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
             pattern: "1917",
             category: "textpro",
             react: "✅",
             desc: "Some text to image feature with various styles."
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply('_Need text._')
             let anu = await maker.textpro('https://textpro.me/1917-style-text-effect-online-980.html', text)
             Void.sendMessage(citel.chat, {
                 image: {
                     url: anu.image
                 },
                 caption: cap
             }, {
                 quoted: citel
             })
         }
     )
     //---------------------------------------------------------------------------
 cmd({
         pattern: "blackpink",
         category: "textpro",
         react: "✅",
         desc: "Some text to image feature with various styles."
     },
     async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', text)
         Void.sendMessage(citel.chat, {
             image: {
                 url: anu.image
             },
             caption: cap
         }, {
             quoted: citel
         })
     }
 )
//---------------------------------------------------------------------------
cmd({ pattern: "shadow", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-gradient-text-shadow-effect-online-1141.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "slime", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-green-slime-text-effect-online-1097.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "lava", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/lava-text-effect-online-914.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "liquid", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-liquid-metal-text-effect-1112.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "rock", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/rock-text-effect-online-915.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "skeleton", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/skeleton-text-effect-online-929.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "marvel", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "marvel", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "batman", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/make-a-batman-logo-online-free-1066.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "burger", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-burger-3d-text-effect-1111.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "foggy", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/write-text-on-foggy-window-online-free-1015.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "drug", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/plastic-bag-drug-text-effect-867.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "juice", category: "textpro", react: "✅", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/fruit-juice-text-effect-861.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
