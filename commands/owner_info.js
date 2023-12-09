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
            category: "owner",
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻0766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯
◉───────────────────                    
*ඔබට අවශ්‍ය අංකය පහතින් තෝරන්න.*
◉───────────────────


*${prefix}2.0┃ ɪɴꜰᴏ ᴏꜰ ᴠᴀᴊɪʀᴀ*
*${prefix}2.1┃ ɪɴꜰᴏ ᴏꜰ ʏᴀꜱɪʏᴀ*


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

cmd({

            pattern: "2.0",           
            desc: "(menu cmdlist).",
            category: "owner",
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻0766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯
◉───────────────────                    
*ඔබට අවශ්‍ය අංකය පහතින් තෝරන්න.*
◉───────────────────


*${prefix}2.2┃ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ*
*${prefix}2.3┃ ꜰᴀᴄᴇʙᴏᴏᴋ ʟɪɴᴋ*
*${prefix}2.4┃ ʏᴛ ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ*
*${prefix}2.5┃ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ*
*${prefix}2.6┃ ᴍᴏʀᴇ ɪɴꜰᴏ ᴏꜰ ᴠᴀᴊɪʀᴀ*



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

const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "2.2",           
            desc: "(menu cmdlist).",
            category: "owner",
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻0766943622
╚══════════❍╯
◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

*1)➣ https://wa.me/+94766943622?text=᳆𝙃𝙄᭄👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼👑-𝙊𝙒𝙉𝙀𝙍•𝙄°𝙄𝙎°𝘼𝙉°𝙈𝙀𝙈𝘽𝙀𝙍°𝙊𝙁°𝙔𝙊𝙐*

2)➣ Message ᴠᴀᴊɪʀᴀ ᴍᴅ ᴏᴡɴᴇʀ on WhatsApp. https://wa.me/message/E376XRNXS3GCJ1

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

cmd({

            pattern: "2.3",           
            desc: "(menu cmdlist).",
            category: "owner",
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻0766943622
╚══════════❍╯
◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 ℙℝ𝕆𝔽𝕀𝕃𝔼...

*https://www.facebook.com/WMRTECH?mibextid=ZbWKwL*

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
    )  //---------------------------------------------------------------------------

cmd({

            pattern: "2.4",           
            desc: "(menu cmdlist).",
            category: "owner",
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻0766943622
╚══════════❍╯
◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 𝕐𝕋 ℂℍ𝔸ℕℕ𝔼𝕃...

*https://youtube.com/@gamingewingyt6216*

*😃➣ ꜱᴜʙꜱᴄʀɪʙᴇ*
*👍➣ ʟɪᴋᴇ ᴀʟʟ ᴠɪᴅᴇᴏꜱ*
*👥➣ ꜱʜᴀʀᴇ ᴍʏ ʏᴛ ʟɪɴᴋ*
*📃➣ ᴄᴏᴍᴍᴇɴᴛ ᴀʟʟ ᴠɪᴅᴇᴏꜱ*

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

cmd({

            pattern: "2.5",           
            desc: "(menu cmdlist).",
            category: "owner",
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻0766943622
╚══════════❍╯
◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 𝕐𝕋 ℂℍ𝔸ℕℕ𝔼𝕃...

*https://chat.whatsapp.com/Lc5Rf0UAmkAFRbjYOnhwy5*

*😃➣ ᴊᴏɪɴ ᴛᴏ ᴍʏ ɢʀᴏᴜᴏ*
*👥➣ ꜱʜᴀʀᴇ ᴍʏ ɢʀᴏᴜᴘ ʟɪɴᴋ*

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

cmd({

            pattern: "2.6",           
            desc: "(menu cmdlist).",
            category: "owner",
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻0766943622
╚══════════❍╯
◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 𝕐𝕋 ℂℍ𝔸ℕℕ𝔼𝕃...



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
