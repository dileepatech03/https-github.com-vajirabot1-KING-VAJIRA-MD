const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
 const maker = require('mumaker')
 let cap = `*_GENERATE BY KING-VAJIRA-MD_*`
     //---------------------------------------------------------------------------
cmd({

            pattern: "logo",           
            desc: "(setting list).",
            category: "Logo",
            react: "👨‍💻",
            filename: __filename,
            use: '<text>',

        },

        async (Void,citel,text,{isCreator}) => {
       if(!isCreator) return citel.reply(tlang().owner);
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
 Eg:- .1 vajira

2 Rainbow logo
 Eg:- .2 vajira
 
3 Sunset logo
 Eg:- .3 vajira
 
4 Gradient neon logo
 Eg:- .4 vajira
 
5 Light glow logo
 Eg:- .5 vajira
 
6 Firework logo
 Eg:- .6 vajira
 
7 Green neon logo
 Eg:- .7 vajira
 
8 Free glow logo
 Eg:- .8 vajira
 
9 Devil wings logo
 Eg:- .9 vajira
 
10 Bokeh text logo
 Eg:- .10 vajira
 
11 Holographic logo
 Eg:- .11 vajira
 
12 Glowing neon logo
 Eg:- .12 vajira
 
13 Light neon logo
 Eg:- .13 vajira
 
14 Avengers logo
 Eg:- .14 vajira
 
15 Space 3D logo
 Eg:- .15 vajira
 
16 Carbon logo
 Eg:- .16 vajira
 
17 Break wall logo
 Eg:- .17 vajira
 
18 Balloon logo
 Eg:- .18 vajira
 
19 Summery sand logo
 Eg:- .19 vajira
 
20 Pornhub logo
 Eg:- .20 vajira

21 Wicker logo
 Eg:- .21 vajira

22 Spooky halloween logo
 Eg:- .22 vajira
 
23 Video game logo
 Eg:- .23 vajira
  
 
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
cmd({ pattern: "1", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-thunder-text-effect-online-881.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
cmd({ pattern: "2", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/rainbow-equalizer-text-effect-902.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "3", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-sunset-light-text-effects-online-for-free-1124.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "4", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-gradient-neon-light-text-effect-online-1085.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "5", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "logo1", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://www.textstudio.com/logo/arcade-text-effect-832', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "6", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/firework-sparkle-text-effect-930.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "7", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/green-neon-text-effect-874.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "8", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/free-advanced-glow-text-effect-873.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "9", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "10", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "11", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/holographic-3d-text-effect-975.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "12", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
//---------------------------------------------------------------------------
cmd({ pattern: "13", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     })
     //---------------------------------------------------------------------------
cmd({ pattern: "14", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "15", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "16", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/carbon-text-effect-833.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "17", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/break-wall-text-effect-871.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "18", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/gold-foil-balloon-text-effect-922.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "19", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-summery-sand-writing-text-effect-988.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "20", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro(https://textpro.me/generate-a-free-logo-in-pornhub-style-online-977.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "21", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/wicker-text-effect-online-932.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "22", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
cmd({ pattern: "23", category: "textpro", desc: "Some text to image feature with various styles." }, async(Void, citel, text) => {
         if (!text) return citel.reply('_Need text._')
         let anu = await maker.textpro('https://textpro.me/video-game-classic-8-bit-text-effect-1037.html', text)
         Void.sendMessage(citel.chat, { image: { url: anu.image }, caption: cap }, { quoted: citel })
     //---------------------------------------------------------------------------
