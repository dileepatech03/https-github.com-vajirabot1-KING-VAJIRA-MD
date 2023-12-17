const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "menu",           
            desc: "(menu cmdlist).",
            category: "_help",
            react: "👨‍💻",
            filename: __filename,
            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {
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
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබට අවශ්‍ය අංකය පහතින් තෝරන්න.*
*Select the number you want*
◉───────────────────
 Eg:- .1.1       
        
┌─────────❂────────┐
├ *${prefix}3.0┃ Whatsapp.com*
├ *${prefix}3.1┃ FMWhatsapp.com*
├ *${prefix}3.2┃ GBWhatsapp.com*
├ *${prefix}3.3┃ YOWhatsapp.com*
└─────────❂────────┘

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

cmd(
    {
        pattern: "3.0", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file
            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_whatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_whatsapp.name,
                    caption: '👑 KING-VAJITA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern:"3.1", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_fmwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_fmwhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern: "3.2", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_gbwhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_gbwhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);

//---------------------------------------------------------------------------

cmd(
    {
        pattern: "3.3", // Change the command pattern to something you prefer
        react: "🧩",      
        filename: __filename
    },
    async (Void, citel, text) => {
        try {
            const wamod = await fetchJson(`https://kaveesha-sithum-api.cyclic.cloud/fouadwa-scraper`);

            // Send the APK file

            await Void.sendMessage(
                citel.chat,
                {
                    document: { url: wamod.result.com_yowhatsapp.link },
                    mimetype: "application/vnd.android.package-archive",
                    fileName: wamod.result.com_yowhatsapp.name,
                    caption: '👑 KING-VAJIRA-MD 👑\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ 👨‍💻'
                },
                { quoted: citel }
            );

        } catch (error) {
            citel.reply(error.toString()); // Convert the error to a string before sending
        }
    }
);
