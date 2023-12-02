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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

◍◈┈─┈『 *Reply a number* 』┈─┈◈◍

*.1.1┃ ᴅᴏᴡɴʟᴏᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*

*.1.2┃ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*

*.1.3┃ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ*

*.1.4┃ ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅ*

*.1.5┃ ᴍɪꜱᴄ ᴄᴏᴍᴍᴀɴᴅ*

*.1.6┃ ɢᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅ*

*.1.7┃ ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅ*

*.1.8┃ ᴄᴏɴᴠᴇʀᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅ*

*.1.9┃ ᴇᴅɪᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅ*

*.1.10┃ ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅ*

*.1.10┃ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ*

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

//---------------------------------------------------------------------------
cmd({

            pattern: "1.1",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ꜱᴏɴɢ
║ 🎋► ᴠɪᴅᴇᴏ
║ 🎋► 3
║ 🎋► ɪɴꜱᴛᴀ
║ 🎋► ᴀᴘᴋ
║ 🎋► xɴxx
║ 🎋   ► ᴛᴛꜱ
║ 🎋► ʏᴛꜱ
║ 🎋► ᴠɪᴅᴇᴏ2
║ 🎋► ᴠɪᴅᴇᴏ3
║ 🎋► ᴘʟᴀʏ
║ 🎋► ʀɪɴɢᴛᴏɴᴇ
║ 🎋► ᴘɪɴᴛ
║ 🎋► ᴍᴇᴅɪᴀꜰɪʀᴇ
║ 🎋► ꜱᴏɴɢ2
║ 🎋► ꜱᴏɴɢ3
║ 🎋► ʏᴛᴍᴘ4
║ 🎋► ʏᴛᴍᴘ3
║ 🎋► ʏᴛᴅᴏᴄ
║ 🎋► ᴛᴠɪᴅᴇᴏ
║ 🎋► ꜰʙꜱ
║ 🎋► ꜰʙ
║ 🎋► ᴛɪᴋᴛᴏᴋ
║ 🎋► ᴅᴀᴅᴜ
║ 🎋► ᴠɪᴅᴇᴏ4
║ 🎋► ᴛᴇꜱᴛꜱᴏɴɢ
║ 🎋► ᴍᴏᴅ
║ 🎋► ɢɪᴛᴄʟᴏɴᴇ
║ 🎋► ꜱᴜʙᴅʟ
║ 🎋► ꜱᴜʙꜱ
║ 🎋► ᴡᴀʙᴇᴛᴀ
║ 🎋► ᴡʙɪ
║ 🎋► ᴡʙɪᴛ
║ 🎋► ᴡᴀᴍᴏᴅ
║ 🎋► ᴡᴀʙᴇᴛᴀɪɴꜰᴏ
║ 🎋► ᴘʟᴀʏʟɪꜱᴛ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.2",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ꜱᴇᴛᴛɪɴɢ
║ 🎋► ʜᴀᴄᴋ
║ 🎋► ɢᴇᴛᴀʟʟ
║ 🎋► ᴊᴏɪɴ
║ 🎋► ᴜɴʙʟᴏᴄᴋ
║ 🎋► ᴜᴊɪᴅ
║ 🎋► ᴊɪᴅ
║ 🎋► ʙʟᴏᴄᴋ
║ 🎋► ᴀᴅᴅɴᴏᴛᴇ
║ 🎋► ϙʀ
║ 🎋► ꜱʜᴇʟʟ
║ 🎋► ᴇᴠᴀʟ
║ 🎋► ᴅᴇʟɴᴏᴛᴇ
║ 🎋► ᴅᴇʟᴀʟʟɴᴏᴛᴇꜱ
║ 🎋► ʙᴀɴ
║ 🎋► ᴀʟʟɴᴏᴛᴇꜱ
║ 🎋► ᴀɴᴛɪᴅᴇʟᴇᴛᴇ
║ 🎋► ᴀɴᴛɪᴡᴏʀᴅ
║ 🎋► ᴠᴀᴊɪʀᴀ
║ 🎋► ʀᴇꜱᴛᴀʀᴛ
║ 🎋► ᴘᴀꜱᴛᴇ
║ 🎋► ᴘᴀꜱᴛᴇʙɪɴ
║ 🎋► ꜰᴜʟʟɢᴘᴘ
║ 🎋► ꜰᴜʟʟᴘᴘ
║ 🎋► ɢᴇᴛᴘᴘ
║ 🎋► ʙʟᴏᴄᴋʟɪꜱᴛ
║ 🎋► ϙᴜᴏᴛᴇᴅ
║ 🎋► ᴍᴇɴᴜ2
║ 🎋► ᴄᴍᴅ
║ 🎋► ᴏᴡɴᴇʀ
║ 🎋► ꜰɪʟᴇ
║ 🎋► ᴄᴘᴜ
║ 🎋► ʀᴇᴘᴏ
║ 🎋► ꜱᴛᴀᴛᴜꜱ
║ 🎋► ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
║ 🎋► ᴘɪɴɢ
║ 🎋► ᴀʟɪᴠᴇ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.3",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ꜱᴛɪᴄᴋᴇʀ
║ 🎋► ꜱᴜᴘᴘᴏʀᴛ
║ 🎋► ᴡᴀʀɴ
║ 🎋► ᴛᴀɢᴀʟʟ
║ 🎋► ʀᴇϙᴜᴇꜱᴛ
║ 🎋► ʀᴇᴛʀɪᴠᴇ
║ 🎋► ʀᴡᴀʀɴ
║ 🎋► ꜱᴀᴠᴇ
║ 🎋► ᴘᴏʟʟ
║ 🎋► ᴘʀᴏꜰɪʟᴇ
║ 🎋► ʀᴀɴᴋ
║ 🎋► ᴘʀᴏᴍᴏᴛᴇ
║ 🎋► ᴋɪᴄᴋ
║ 🎋► ᴍᴇᴍᴇɢᴇɴ
║ 🎋► ɢʀᴏᴜᴘ
║ 🎋► ɢʀᴏᴜᴘᴘɪᴄ
║ 🎋► ʜɪᴅᴇᴛᴀɢ
║ 🎋► ᴀᴅᴅ
║ 🎋► ɢᴇᴛᴊɪᴅꜱ
║ 🎋► ᴅᴇᴍᴏᴛᴇ
║ 🎋► ᴅᴇʟ
║ 🎋► ᴄʜᴇᴄᴋᴡᴀʀɴ
║ 🎋► ʙʀᴏᴀᴅᴄᴀꜱᴛ
║ 🎋► ᴀɴᴛɪʟɪɴᴋ
║ 🎋► ᴀᴄᴛ
║ 🎋► ᴅᴇᴀᴄᴛ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.4",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ɴᴀꜱᴀ
║ 🎋► ᴛᴇᴄʜɴᴇᴡꜱ
║ 🎋► ɴᴇᴡꜱ
║ 🎋► ʜɪʀᴜɴᴇᴡꜱ
║ 🎋► ᴅᴇʀᴀɴᴀ
║ 🎋► ꜱɪʀᴀꜱᴀ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.5",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴍɪꜱᴄ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ꜰɪɴᴅꜱᴏɴɢ
║ 🎋► ꜰɪɴᴅᴠɪᴅᴇᴏ
║ 🎋► ɢʀᴏᴜᴘʙʀᴏᴀᴅ
║ 🎋► ᴠᴠ
║ 🎋► ᴜᴘᴅᴀᴛᴇɴᴏᴡ
║ 🎋► ɢᴇᴛᴠᴀʀ
║ 🎋► ɢᴇᴛᴀʟʟᴠᴀʀ
║ 🎋► ꜱᴇᴛ
║ 🎋► ᴅᴇʟᴠᴀʀ
║ 🎋► ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
║ 🎋► ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
║ 🎋► ᴇxᴇᴄ
║ 🎋► ʀᴇᴀᴅᴍᴏʀᴇ
║ 🎋► ᴜᴘᴛɪᴍᴇ
║ 🎋► ᴡᴍ
║ 🎋► ᴘɪᴄᴋ
║ 🎋► ᴄᴀʟᴄ
║ 🎋► ꜰʟɪᴘᴛᴇxᴛ
║ 🎋► ᴍᴘ4ꜰʀᴏᴍᴜʀʟ
║ 🎋► ᴇᴍɪx
║ 🎋► ᴄʜᴀᴛʙᴏᴛ
║ 🎋► ᴇʙɪɴᴀʀʏ
║ 🎋► ᴅʙɪɴᴀʀʏ
║ 🎋► ʙᴏᴛ
║ 🎋► ᴜɴʙᴀɴ
║ 🎋► ᴜʀʟ
║ 🎋► ᴛʀᴛ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.6",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ɢᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ꜱᴛᴀʀᴛϙᴜɪᴢ
║ 🎋► ʀᴇꜱᴇᴛϙᴜɪᴢ
║ 🎋► ꜰʟᴀɢ
║ 🎋► ꜰʟᴀɢᴀɴꜱᴡᴇʀ
║ 🎋► ᴅᴇʟᴛɪᴄ
║ 🎋► ᴛɪᴄ
║ 🎋► ꜱʜɪᴘ
║ 🎋► ϙᴜᴇꜱᴛɪᴏɴ
║ 🎋► ᴛʀᴜᴛʜ
║ 🎋► ᴅᴀʀᴇ
║ 🎋► ꜰᴀᴄᴛ
║ 🎋► ϙᴜᴏᴛᴇꜱ
║ 🎋► ᴅᴇꜰɪɴᴇ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.7",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋Aɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ᴡᴀɪꜰᴜ
║ 🎋► ɴᴀʀᴜᴛᴏ
║ 🎋► ɴᴇᴋᴏ
║ 🎋► ꜰᴏxɢɪʀʟ
║ 🎋► ᴀɴɪᴍᴇɴᴇᴡꜱ
║ 🎋► ʟᴏʟɪ
║ 🎋► ᴘᴏᴋᴇᴍᴏɴ
║ 🎋► ᴍᴀɴɢᴀ
║ 🎋► ᴀɴɪᴍᴇ
║ 🎋► ᴡᴀʟʟᴘᴀᴘᴇʀ
║ 🎋► ᴄʜᴀʀᴀᴄᴛᴇʀ
║ 🎋► ʀᴀɴɪᴍᴇ
║ 🎋► ᴀɴɪᴍᴇ
║ 🎋► ᴀɴɪᴍᴇɴᴇᴡꜱ
║ 🎋► ᴀɴɪᴍᴇᴘɪᴄ
║ 🎋► ɴᴇᴋᴏ
║ 🎋► ᴀɴɪᴍᴇᴡᴀʟʟ
║ 🎋► ꜰᴏxɢɪʀʟ
║ 🎋► ʟᴏʟɪ
║ 🎋► ᴍᴀɴɢᴀ
║ 🎋► ᴡᴀɪꜰᴜ
║ 🎋► ᴘᴏᴋᴇᴘɪᴄ
║ 🎋► ᴘᴏᴋᴇᴍᴏɴ
║ 🎋► ᴘᴏᴋᴇ
║ 🎋► ʜᴜɢ
║ 🎋► ʜᴏʟᴅ
║ 🎋► ʜɪꜰɪ
║ 🎋► ʙɪᴛᴇ
║ 🎋► ʙʟᴜꜱʜ
║ 🎋► ᴘᴜɴᴄʜ
║ 🎋► ᴘᴀᴛ
║ 🎋► ᴋɪꜱꜱ
║ 🎋► ᴋɪʟʟ
║ 🎋► ʜᴀᴘᴘʏ
║ 🎋► ᴅᴀɴᴄᴇ
║ 🎋► ʏᴇᴇᴛ
║ 🎋► ᴡɪɴᴋ
║ 🎋► ꜱʟᴀᴘ
║ 🎋► ʙᴏɴᴋ
║ 🎋► ʙᴜʟʟʏ
║ 🎋► ᴄʀɪɴɢᴇ
║ 🎋► ᴄᴜᴅᴅʟᴇ
║ 🎋► ᴄᴏꜱᴘʟᴀʏ
║ 🎋► ᴇᴄᴄʜɪ
║ 🎋► ʜᴇɴᴛᴀɪ
║ 🎋► ʜᴇɴᴛᴀɪᴠɪᴅ
║ 🎋► ʀᴀɴᴀʟ
║ 🎋► ʀᴘᴜꜱꜱʏ
║ 🎋► ꜱᴏʟᴏ
║ 🎋► ᴠɪxᴇɴ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.8",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴄᴏɴᴠᴇʀᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ᴘʜᴏᴛᴏ
║ 🎋► ϙᴜᴏᴛᴇʟʏ
║ 🎋► ᴛᴏᴍᴘ4
║ 🎋► ꜰᴀɴᴄʏ
║ 🎋► ᴛɪɴʏ
║ 🎋► ᴛᴏᴀᴜᴅɪᴏ
║ 🎋► ᴄɪʀᴄʟᴇ
║ 🎋► ᴄʀᴏᴘ
║ 🎋► ʀᴏᴜɴᴅ
║ 🎋► ᴀᴛᴛᴘ
║ 🎋► ᴛᴛᴘ
║ 🎋► ꜱᴛᴇᴀʟ
║ 🎋► x4ᴍᴘ4
║ 🎋► x2ᴍᴘ4
║ 🎋► ᴍᴘ4ɪᴍᴀɢᴇ
║ 🎋► ꜱᴘᴇᴄᴛʀᴜᴍ
║ 🎋► ᴡᴀᴠᴇꜱ
║ 🎋► ꜰʀᴇϙᴜᴇɴᴄʏ
║ 🎋► ᴀᴠᴇᴄ
║ 🎋► ᴠᴏʟᴜᴍᴇᴀᴜᴅɪᴏ
║ 🎋► ᴄϙᴛᴀᴜᴅɪᴏ
║ 🎋► ᴍᴘ3ᴇϙ
║ 🎋► ᴍᴘ3ᴄʀᴜꜱʜᴇʀ
║ 🎋► ᴍᴘ3ʀᴇᴠᴇʀꜱᴇ
║ 🎋► ᴍᴘ4ᴠɪɴᴛᴀɢᴇ
║ 🎋► ᴍᴘ4ʀᴇᴠᴇʀꜱᴇ
║ 🎋► ᴍᴘ4ʙᴡ
║ 🎋► ʙᴡɪᴍᴀɢᴇ
║ 🎋► ᴠɪɴᴛᴀɢᴇɪᴍᴀɢᴇ
║ 🎋► ᴍᴘ4ᴇɴʜᴀɴᴄᴇ
║ 🎋► ʙʟᴜʀɪᴍᴀɢᴇ
║ 🎋► ᴍᴘ4ʙʟᴜʀ
║ 🎋► ᴍᴘ3ᴘɪᴛᴄʜ
║ 🎋► ᴍᴘ4ᴇᴅɢᴇ
║ 🎋► ᴍᴘ3ʟᴏᴡ
║ 🎋► x2ᴍᴘ3
║ 🎋► ᴇᴅɢᴇɪᴍᴀɢᴇ
║ 🎋► ᴇɴʜᴀɴᴄᴇɪᴍᴀɢᴇ
║ 🎋► ᴍᴘ3ᴠᴏʟᴜᴍᴇ
║ 🎋► ɢɪꜰ
║ 🎋► ᴠɢɪꜰ
║ 🎋► ɢʀᴇɴɪᴍᴀɢᴇ
║ 🎋► ɪɴᴛᴇʀᴘ
║ 🎋► ʀᴀɪɴʙᴏᴡ
║ 🎋► ᴍᴘ4ʀᴀɪɴʙᴏᴡ
║ 🎋► ɴᴇɢᴀᴛɪᴠᴇ
║ 🎋► ᴍᴘ4ɴᴇɢᴀᴛɪᴠᴇ
║ 🎋► ᴍᴘ4ᴀʀᴛ
║ 🎋► ᴀʀᴛɪᴍᴀɢᴇ
║ 🎋► ᴍᴘ4ꜱᴛᴀʙ
║ 🎋► ᴠɪᴠɪᴅ
║ 🎋► ᴄᴏʟᴏʀɪᴍᴀɢᴇ
║ 🎋► ᴍᴘ4ꜱʟᴏᴡᴍᴏ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.9",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴇᴅɪᴛᴏʀ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ᴘɪᴄᴇᴅɪᴛᴏʀ
║ 🎋► ᴀᴅꜱ
║ 🎋► ᴘɪxᴇʟᴀᴛᴇ
║ 🎋► ʜᴏʀɴʏ
║ 🎋► ʀᴀɪɴʙᴏ
║ 🎋► ʙᴡ
║ 🎋► ʙʀɪɢʜᴛ
║ 🎋► ʀᴇᴅ
║ 🎋► ʙʟᴜᴇ
║ 🎋► ɢʀᴇᴇɴ
║ 🎋► ɢᴀʏ
║ 🎋► ᴘᴀꜱꜱᴇᴅ
║ 🎋► ᴡᴀꜱᴛᴇᴅ
║ 🎋► ɢʟᴀꜱꜱ
║ 🎋► ᴜɴᴄᴏᴠᴇʀ
║ 🎋► ᴊᴀɪʟ
║ 🎋► ɪɴᴠᴇʀᴛ
║ 🎋► 2ɪɴᴠᴇʀᴛ
║ 🎋► ᴄᴏᴍʀᴀᴅᴇ
║ 🎋► ɢᴏʟᴅᴇɴ
║ 🎋► ꜱɪᴍᴘᴄᴀʀᴅ
║ 🎋► ᴛʜʀᴇꜱʜᴏʟᴅ
║ 🎋► ᴄʟᴏᴡɴ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.10",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ʟᴏɢᴏ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ᴅᴇᴇᴘꜱᴇᴀ
║ 🎋► ʜᴏʀʀᴏʀ
║ 🎋► ᴡʜɪᴛᴇʙᴇᴀʀ
║ 🎋► ᴊᴏᴋᴇʀ
║ 🎋► ᴍᴇᴛᴀʟʟɪᴄ
║ 🎋► ꜱᴛᴇᴇʟ
║ 🎋► ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
║ 🎋► ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
║ 🎋► ʟᴜxᴜʀʏ
║ 🎋► ɢʟᴜᴇ
║ 🎋► ꜰᴀʙʀɪᴄ
║ 🎋► ᴛᴏxɪᴄ
║ 🎋► ᴀɴᴄɪᴇɴᴛ
║ 🎋► ᴄʟᴏᴜᴅ
║ 🎋► ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
║ 🎋► ᴛʜᴜɴᴅᴇʀ
║ 🎋► ꜱᴄɪꜰɪ
║ 🎋► ꜱᴀɴᴅ
║ 🎋► ʀᴀɪɴʙᴏᴡ
║ 🎋► ᴘᴇɴᴄɪʟ
║ 🎋► ɴᴇᴏɴ
║ 🎋► ᴍᴀɢᴍᴀ
║ 🎋► ʟᴇᴀᴠᴇꜱ
║ 🎋► ɢʟɪᴛᴄʜ
║ 🎋► ᴅɪꜱᴄᴏᴠᴇʀʏ
║ 🎋► ᴄʜʀɪꜱᴛᴍᴀꜱ
║ 🎋► ᴄᴀɴᴅʏ
║ 🎋► 1917
║ 🎋► ʙʟᴀᴄᴋᴘɪɴᴋ
║ 🎋► ᴄᴀᴛ
║ 🎋► ᴘᴏᴛᴛᴇʀʏ
║ 🎋► ꜱʟɪᴄᴇ
╚══════════☉⚟

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
//---------------------------------------------------------------------------
cmd({

            pattern: "1.11",           
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

╔══════════❍╮
║🔸𝐎𝐖𝐍 𝐍𝐀𝐌𝐄 ➻ᴡᴍʀ•ᴠᴀᴊɪʀᴀ
║▪️𝐎𝐖𝐍 𝐍𝐔𝐁 ➻+94766943622
║🔹𝐁𝐎𝐓 𝐒𝐏𝐄𝐄𝐃 ➻000.23
║▫️𝐌𝐄𝐌𝐎𝐑𝐘 ➻64GB
╚══════════❍╯

╔═❋ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ❋══❍
║ 🎋► ᴀꜰᴋ
║ 🎋► ᴅᴇʟᴀꜰᴋ
║ 🎋► ɢᴊɪᴅ
║ 🎋► ᴄʜᴀᴛ
║ 🎋► ᴅᴀʟʟᴇ
║ 🎋► ᴛᴇᴍᴘᴍᴀɪʟ
║ 🎋► ᴄʜᴇᴄᴋᴍᴀɪʟ
║ 🎋► ꜱᴇᴛɢʀᴇᴇᴛɪɴɢ
║ 🎋► ꜱᴀᴠᴇɴᴏ
║ 🎋► ᴅᴇʟɴᴏ
║ 🎋► ᴀᴍᴜᴛᴇ
║ 🎋► ᴀᴜɴᴍᴜᴛᴇ
║ 🎋► ᴅᴜɴᴍᴜᴛᴇ
║ 🎋► ᴅᴍᴜᴛᴇ
║ 🎋► ɴᴘᴍ
║ 🎋► ꜱꜱ
║ 🎋► ᴍᴏᴠɪᴇ
║ 🎋► ᴡᴇᴀᴛʜᴇʀ
║ 🎋► ʜᴏʀᴏ
║ 🎋► ɢᴏᴏɢʟᴇ
║ 🎋► ɪᴍᴀɢᴇ
║ 🎋► ᴄᴏᴜᴘʟᴇᴘᴘ
║ 🎋► ɪꜱᴡᴀ
║ 🎋► ᴡɪᴋɪᴘᴇᴅɪᴀ
║ 🎋► ᴅᴀɪʟʏ
║ 🎋► ʀᴇꜱᴇᴛᴡᴀʟʟᴇᴛ
║ 🎋► ᴄᴀᴘᴀᴄɪᴛʏ
║ 🎋► ᴅᴇᴘᴏꜱɪᴛ
║ 🎋► ʟʙ
║ 🎋► ᴛʀᴀɴꜱꜰᴇʀ
║ 🎋► ᴡᴀʟʟᴇᴛ
║ 🎋► ɢɪᴠᴇ
║ 🎋► ʙᴀɴᴋ
║ 🎋► ʀᴏʙ
║ 🎋► ᴡɪᴛʜᴅʀᴀᴡ
║ 🎋► ɢᴀᴍʙʟᴇ
║ 🎋► ꜱʟᴏᴛ2
║ 🎋► ꜱʟᴏᴛ
╚══════════☉⚟

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
