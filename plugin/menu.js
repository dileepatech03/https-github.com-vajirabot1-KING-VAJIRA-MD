const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/plugin')

    //---------------------------------------------------------------------------

cmd({

            pattern: "menu1",           
            alias :['මෙනු'],
            desc: "(menu cmdlist).",
            category: "downloader",
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
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*\n\nHello, ${citel.pushName},\n

𝙒𝙀𝙇𝘾𝙊𝙈𝙀 𝙏𝙊 𝙆𝙄𝙉𝙂 𝙑𝘼𝙅𝙄𝙍𝘼 𝘾𝙈𝘿 𝙇𝙄𝙎𝙏 🔐

𝙪𝙥𝙩𝙞𝙢𝙚 = 18 s
𝙥𝙡𝙖𝙩𝙛𝙧𝙤𝙢 = Heroku
𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 = ˂ツᴡᴍʀ ᴠᴀᴊɪʀᴀ ᴏꜰᴄ 👑

◍◈┈─┈『 *Reply a number* 』┈─┈◈◍

*1.1┃ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

*1.2┃ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅ*

*1.3┃ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

*1.4┃ᴡᴇʙ ᴄᴏᴍᴍᴀɴᴅ*

*1.5┃ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ*

*1.6┃ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅ*

*1.5┃ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

*ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ 2*
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