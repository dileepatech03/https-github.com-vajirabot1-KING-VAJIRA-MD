/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/

const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1 } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')

    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "menu",
            react: "📃",
            category: "menu1",
            filename: __filename,
            desc: "is bot alive??"
        },
        async(Void, citel, text, isAdmins) => {
            let alivemessage = Config.ALIVE_MESSAGE || `*A bot developed by Dumidu.*`
            const alivtxt = `
```👋 Hello Vajira Rathnayaka```

```🫧 King Vajira Commands Menu``` 

📅 12/11/2023
⏰ 02:48:12  
📡 Uptime: 10 hours, 17 minutes, 15 seconds
🚁 Platform : Heroku
🧑‍💻 Developer: *Vajiraa Rathnayaka*
🐋 Web : *https://bit.ly/King vajira*

🔢 Reply below number ,

*1 | ʀᴇᴀᴄᴛɪᴏɴ ᴄᴏᴍᴍᴀɴᴅꜱ*

*2 | ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅꜱ*

*3 | ᴇxᴛʀᴀ ᴄᴏᴍᴍᴀɴᴅꜱ*

*4 | ɢᴀᴍᴇꜱ ᴄᴏᴍᴍᴀɴᴅꜱ*

*5 | ɢᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅꜱ*

*6 | ꜰᴜɴ ᴄᴏᴍᴍᴀɴᴅꜱ*

*7 | ɢᴇɴᴇʀᴀʟ ᴄᴏᴍᴍᴀɴᴅꜱ*

*8 | ᴛᴏᴏʟ ᴄᴏᴍᴍᴀɴᴅꜱ*

*9 | ᴅᴏᴡɴ ᴄᴏᴍᴍᴀɴᴅꜱ*

*10 | ᴜᴛɪʟɪᴛʏ ᴄᴏᴍᴍᴀɴᴅꜱ*

*11 | ʟɪꜱᴛ ᴄᴏᴍᴍᴀɴᴅꜱ*

*12 | ᴛᴇxᴛᴘʀᴏ ᴄᴏᴍᴍᴀɴᴅꜱ*

*13 | ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ*

*14 | ᴍɪꜱᴄ ᴄᴏᴍᴍᴀɴᴅꜱ*

*15 | ꜱᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*

*16 | ᴅᴏᴡɴ2 ᴄᴏᴍᴍᴀɴᴅꜱ*

*17 | ᴇᴄᴏɴᴏᴍʏ ᴄᴏᴍᴍᴀɴᴅꜱ*

*18 | ᴜꜱᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*

*19 | ᴀɪ ᴄᴏᴍᴍᴀɴᴅꜱ*

*20 | ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅꜱ*

*21 | ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅꜱ*

*22 | ꜰʀᴀɴᴋ ᴄᴏᴍᴍᴀɴᴅꜱ*

*23 | ɴᴇᴡꜱ ᴄᴏᴍᴍᴀɴᴅꜱ*

*24 | ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅꜱ*

*25 | ᴍᴏᴅᴇʀᴀᴛ ᴄᴏᴍᴍᴀɴᴅꜱ*


ᴋɪɴɢ ᴠᴀᴊɪʀᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ
ꜱᴛᴀʙʟᴇ ᴠᴇʀꜱɪᴏɴ : ɪɪ
`;
            let aliveMessage = {
                image: {
                    url: await botpic(),
                },
                caption: alivtxt,
                footer: tlang().footer,
                headerType: 4,
            };
             return Void.sendMessage(citel.chat, aliveMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "cmd",
            desc: "cmd1",
            category: "general"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n`
for (let i = 0; i < commands.length; i++) 
{
     if(commands[i].pattern==undefined) continue
     str +=       `╭ ${i+1} *${fancytext(commands[i].pattern,1)}*\n` 
     if(commands[i].desc=undefined) commands[i].desc=""
     str += `╰➛ ${fancytext(commands[i].desc,1)}\n`
}
            return await Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To find owner number",
        category: "general",
        react: "🧑‍💻",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return citel.reply(arr.join('\n'));


})
