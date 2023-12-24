const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
 const maker = require('mumaker')
 let cap = `*_GENERATE BY KING-VAJIRA-MD_*`
 //---------------------------------------------------------------------------
cmd({

            pattern: "vaj",           
            desc: "(setting list).",
            category: "Logo",
            react: "👨‍💻",
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
                    url: 'https://telegra.ph/file/b10172f9cfdbe5f43c43e.jpg',
                },

                caption: `

*⦁──👑𝙑𝘼𝙅𝙄𝙍𝘼 LOGO CMDS👑──⦁*

1 Thunder logo
 Eg:- .Thunder vajira

2 Rainbow logo
 Eg:- .Rainbow vajira
 
3 Sunset logo
 Eg:- .Sunset vajira
 
4 Gradient neon logo
 Eg:- .Gradient vajira
 
5 Light glow logo
 Eg:- .Lightglow vajira
 
6 Firework logo
 Eg:- .Firework vajira
 
7 Green neon logo
 Eg:- .Greenneon vajira
 
8 Free glow logo
 Eg:- .Free glow vajira
 
9 Devil wings logo
 Eg:- .Devilwings vajira
 
10 Bokeh logo
 Eg:- .Bokeh vajira
 
11 Holographic logo
 Eg:- .Holographic vajira
 
12 Glowing neon logo
 Eg:- .Glowingneon vajira
 
13 Galaxy logo
 Eg:- .Galaxy vajira
 
14 Avengers logo
 Eg:- .Avengers vajira
 
15 Space 3D logo
 Eg:- .Space vajira
 
16 Carbon logo
 Eg:- .Carbon vajira
 
17 Break wall logo
 Eg:- .Breakwall vajira
 
18 Balloon logo
 Eg:- .Balloon vajira
 
19 Summery sand logo
 Eg:- .sand vajira
 
20 Pornhub logo
 Eg:- .Pornhub vajira

21 Wicker logo
 Eg:- .Wicker vajira

22 Spooky halloween logo
 Eg:- .halloween vajira
 
24 Video game logo
 Eg:- .Videogame vajira
 
25 Deepsea logo
 Eg:- .Deepsea vajira
  
26 White bear logo
 Eg:- .whitebear vajira
  
27 Joker logo
 Eg:- .joker vajira
  
28 Metallic logo
 Eg:- .metallic vajira
    
29 Steel logo
 Eg:- .steel vajira
  
30 Harrypotter logo
 Eg:- .harrypotter vajira
  
31 Under water logo
 Eg:- .underwater vajira
   
32 Luxury logo
 Eg:- .luxury vajira
   
33 Glue logo
 Eg:- .glue vajira
  
34 Fabric logo
 Eg:- .fabric vajira
  
35 Toxic logo
 Eg:- .toxic vajira
   
36 Ancient logo
 Eg:- .ancient vajira
   
37 Cloud logo
 Eg:- .cloud vajira
   
38 Transformer logo
 Eg:- .transformer vajira
  
39 Thunder logo
 Eg:- .thunder vajira
   
40 Scifi logo
 Eg:- .scifi vajira
  
41 Sand logo
 Eg:- .sand vajira
  
42 Rainbow logo
 Eg:- .rainbow vajira
  
43 Pencil logo
 Eg:- .pencil vajira
  
44 Neon logo
 Eg:- .neon vajira
  
45 Magma logo
 Eg:- .magma vajira
  
46 Leaves logo
 Eg:- .leaves vajira
  
47 Glitch logo
 Eg:- .glitch vajira
  
48 Discovery logo
 Eg:- .discovery vajira
  
49 Christmas logo
 Eg:- .christmas vajira
  
50 Candy logo
 Eg:- .candy vajira
   
51 1917 logo
 Eg:- .1917 vajira
   
52 Black pink logo
 Eg:- .blackpink vajira
                   
 
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
cmd({ pattern: "thunder2", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-thunder-text-effect-online-881.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
cmd({ pattern: "rainbow2", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/rainbow-equalizer-text-effect-902.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
    })
     //---------------------------------------------------------------------------
cmd({ pattern: "sunset", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "gradient", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "lightglow", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "firework", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/firework-sparkle-text-effect-930.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "greenneon", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/green-neon-text-effect-874.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "freeglow", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "devilwings", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "bokeh", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "holographic", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/holographic-3d-text-effect-975.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "glowingneon", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
//---------------------------------------------------------------------------
cmd({ pattern: "galaxy", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "avengers", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "space", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "carbon", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/carbon-text-effect-833.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "breakwall", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/break-wall-text-effect-871.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "balloon", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/gold-foil-balloon-text-effect-922.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "sand", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-summery-sand-writing-text-effect-988.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "pornhub", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "wicker", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/wicker-text-effect-online-932.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "halloween", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "videogame", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/video-game-classic-8-bit-text-effect-1037.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
   })
     //---------------------------------------------------------------------------
cmd({ pattern: "deepsea", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "horror", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/horror-blood-text-effect-online-883.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "whitebear", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "joker", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "metallic", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-metallic-text-effect-free-online-1041.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "steel", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/steel-text-effect-online-921.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "harrypotter", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-harry-potter-text-effect-online-1025.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "underwater", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "luxury", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/3d-luxury-gold-text-effect-online-1003.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "glue", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "fabric", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/fabric-text-effect-online-964.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "toxic", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/toxic-text-effect-online-901.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({ pattern: "ancient", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
 cmd({
             pattern: "cloud",
             category: "textpro",
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
             pattern: "sand",
             category: "textpro",
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
cmd({ pattern: "shadow", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-gradient-text-shadow-effect-online-1141.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "slime", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-green-slime-text-effect-online-1097.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "lava", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/lava-text-effect-online-914.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "liquid", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-liquid-metal-text-effect-1112.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "rock", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/rock-text-effect-online-915.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "skeleton", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/skeleton-text-effect-online-929.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "marvel", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "marvel", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "batman", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/make-a-batman-logo-online-free-1066.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "burger", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-burger-3d-text-effect-1111.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "foggy", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/write-text-on-foggy-window-online-free-1015.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "drug", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/plastic-bag-drug-text-effect-867.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
//---------------------------------------------------------------------------
cmd({ pattern: "juice", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/fruit-juice-text-effect-861.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
