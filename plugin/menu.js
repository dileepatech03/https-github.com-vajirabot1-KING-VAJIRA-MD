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

            pattern: "menu2",           
            alias :['help3','list3','cmd3'],
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
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*


FIRST NAME : VAJIRA

SECOND NAME : RATHNAYAKA

COUNTRY : US

ADDRESS 1 : heroku cc 2023 bin

CITY : NEW YORK

STATE : NEW YORK

ZIP CODE : 10080\n◍◈┈─┈『 Reply a number 』┈─┈◈◍\n\n1.1┃ ᴅᴏᴡɴʟᴏᴅᴇʀ ᴄᴏᴍᴍᴀɴᴅ\n1.2┃ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅ\n1.3┃ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅ\n1.4┃ᴡᴇʙ ᴄᴏᴍᴍᴀɴᴅ\n1.5┃ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ\n1.5┃ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅ\n1.5┃ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅ\n

5148121009026432|08|2025|833

5148121009088184|08|2025|166

5148121009340221|08|2025|334

5148121009672763|08|2025|808

5148121009537453|08|2025|248

5148121009726403|08|2025|818

5148121009768132|08|2025|676

5148121009870383|08|2025|511

5148121009806742|08|2025|766

5148121009557634|08|2025|641

5148121009825403|08|2025|346

5148121009806072|08|2025|546

5148121009143336|08|2025|413

5148121009800604|08|2025|144

5148121009586328|08|2025|516

5148121009670403|08|2025|687

5148121009661006|08|2025|571

5148121009183266|08|2025|730

5148121009106580|08|2025|043

5148121009337276|08|2025|645

5148121009734563|08|2025|438

5148121009721883|08|2025|342

5148121009585817|08|2025|011

5148121009200714|08|2025|563

5148121009355542|08|2025|431

5148121009510872|08|2025|100

5148121009071040|08|2025|550

5148121009465366|08|2025|272

5148121009700630|08|2025|232

5148121009748415|08|2025|245

*By Vajira 👑*
`,

                footer: tlang().footer,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });
        }
    )
