const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 1000 // 1000mb
//---------------------------------------------------------------------------

cmd({

            pattern: "ownerinfo",           
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
                    url: 'https://telegra.ph/file/09ab24679fb3a297a8905.jpg',
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


${prefix}2.0┃ ɪɴꜰᴏ ᴏꜰ ᴠᴀᴊɪʀᴀ
${prefix}3.0┃ ɪɴꜰᴏ ᴏꜰ ʏᴀꜱɪʏᴀ


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
                    url: 'https://telegra.ph/file/935bd7b1b967dabdf2ddf.jpg',
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


${prefix}2.1┃ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ
${prefix}2.2┃ ꜰᴀᴄᴇʙᴏᴏᴋ ʟɪɴᴋ
${prefix}2.3┃ ʏᴛ ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ
${prefix}2.4┃ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ
${prefix}2.5┃ ᴍᴏʀᴇ ɪɴꜰᴏ ᴏꜰ ᴠᴀᴊɪʀᴀ



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

            pattern: "2.1",           
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
                    url: 'https://telegra.ph/file/1a2f5b270219832f8d47f.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

1)➣ https://wa.me/+94766943622?text=᳆𝙃𝙄᭄👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼👑-𝙊𝙒𝙉𝙀𝙍•𝙄°𝙄𝙎°𝘼𝙉°𝙈𝙀𝙈𝘽𝙀𝙍°𝙊𝙁°𝙔𝙊𝙐

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
                    url: 'https://telegra.ph/file/c66a8a36badddfd37a1e4.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 ℙℝ𝕆𝔽𝕀𝕃𝔼...

https://www.facebook.com/WMRTECH?mibextid=ZbWKwL

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
                    url: 'https://telegra.ph/file/c270ae79bb58a79c3f2fd.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 𝕐𝕋 ℂℍ𝔸ℕℕ𝔼𝕃...

https://youtube.com/@gamingewingyt6216

😃➣ ꜱᴜʙꜱᴄʀɪʙᴇ
👍➣ ʟɪᴋᴇ ᴀʟʟ ᴠɪᴅᴇᴏꜱ
👥➣ ꜱʜᴀʀᴇ ᴍʏ ʏᴛ ʟɪɴᴋ
📃➣ ᴄᴏᴍᴍᴇɴᴛ ᴀʟʟ ᴠɪᴅᴇᴏꜱ

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
                    url: 'https://telegra.ph/file/1a2f5b270219832f8d47f.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝕁𝕆𝕀ℕ 𝕄𝕐 𝔾ℝ𝕆𝕌ℙ...

https://chat.whatsapp.com/Lc5Rf0UAmkAFRbjYOnhwy5

😃➣ ᴊᴏɪɴ ᴛᴏ ᴍʏ ɢʀᴏᴜᴘ
👥➣ ꜱʜᴀʀᴇ ᴍʏ ɢʀᴏᴜᴘ ʟɪɴᴋ

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
                    url: 'https://telegra.ph/file/166a4209b62440baf0edf.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 ℂℍ𝔸𝕋...

COMMING SOON...

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
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------

cmd({

            pattern: "3.0",           
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
                    url: 'https://telegra.ph/file/f94c2dd16ca20b270db3a.jpg',
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


${prefix}3.1┃ ᴏᴡɴᴇʀ ɴᴜᴍʙᴇʀ
${prefix}3.2┃ ꜰᴀᴄᴇʙᴏᴏᴋ ʟɪɴᴋ
${prefix}3.3┃ ʏᴛ ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ
${prefix}3.4┃ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ
${prefix}3.5┃ ᴍᴏʀᴇ ɪɴꜰᴏ ᴏꜰ ᴠᴀᴊɪʀᴀ



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

            pattern: "3.1",           
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
                    url: 'https://telegra.ph/file/1a2f5b270219832f8d47f.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

1)➣ https://wa.me/+94760018802?text=꧁•༆⚖️ㅤᴍʀͥ.ʏͣᴀͫsɪʏᴀᴏғᴄㅤ💃🏻🪄🥷🏻

2)➣ Message ꜱᴀᴋᴜʀᴀ ᴍᴅ ᴏᴡɴᴇʀ on WhatsApp. https://wa.me/message/WV7ITXBMJAVQA1

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

            pattern: "3.2",           
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
                    url: 'https://telegra.ph/file/c66a8a36badddfd37a1e4.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 ℙℝ𝕆𝔽𝕀𝕃𝔼...

NO ACCOUNT

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

            pattern: "3.3",           
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
                    url: 'https://telegra.ph/file/c270ae79bb58a79c3f2fd.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 𝕐𝕋 ℂℍ𝔸ℕℕ𝔼𝕃...

https://youtube.com/@yasiya_yt

😃➣ ꜱᴜʙꜱᴄʀɪʙᴇ
👍➣ ʟɪᴋᴇ ᴀʟʟ ᴠɪᴅᴇᴏꜱ
👥➣ ꜱʜᴀʀᴇ ᴍʏ ʏᴛ ʟɪɴᴋ
📃➣ ᴄᴏᴍᴍᴇɴᴛ ᴀʟʟ ᴠɪᴅᴇᴏꜱ

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

            pattern: "3.4",           
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
                    url: 'https://telegra.ph/file/1a2f5b270219832f8d47f.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝕁𝕆𝕀ℕ 𝕄𝕐 𝔾ℝ𝕆𝕌ℙ...

https://chat.whatsapp.com/Lc5Rf0UAmkAFRbjYOnhwy5

😃➣ ᴊᴏɪɴ ᴛᴏ ᴍʏ ɢʀᴏᴜᴘ
👥➣ ꜱʜᴀʀᴇ ᴍʏ ɢʀᴏᴜᴘ ʟɪɴᴋ

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

            pattern: "3.5",           
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
                    url: 'https://telegra.ph/file/166a4209b62440baf0edf.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

◉───────────────────                    
*ඔබ ඉල්ලු අංකයට අවශ්‍ය විස්තරය.*
◉───────────────────

👨‍💻➣ℂ𝕃𝕀ℂ𝕂 𝕋ℍ𝔼 𝕃𝕀ℕ𝕂 𝕋𝕆 𝔾𝕆 𝕀ℕ𝕊𝕀𝔻𝔼 𝕄𝕐 ℂℍ𝔸𝕋...

COMMING SOON...

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




