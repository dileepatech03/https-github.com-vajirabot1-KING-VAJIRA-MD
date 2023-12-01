const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "setting",           
            desc: "(setting list).",
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
                    url: await botpic(),
                },

                caption: `
*⦁──👑𝙑𝘼𝙅𝙄𝙍𝘼 𝙎𝙀𝙏𝙏𝙄𝙉𝙂 𝙇𝙄𝙎𝙏👑──⦁*

COMMING SOON...

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴡᴍʀ ᴠᴀᴊɪʀᴀ*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
