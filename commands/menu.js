const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')

cmd({
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
