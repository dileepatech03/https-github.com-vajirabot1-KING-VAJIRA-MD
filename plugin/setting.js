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

1) To put Antilink type :
Eg:- .set ANTILINK:false

2) To on/off Auto reaction type :
Eg:- .set AUTO_REACTION:false/true

3) To on/off Auto read status type : 
Eg:- .set AUTO_READ_STATUS:false/true

4) To on/off Auto status save type :
Eg:- .set AUTO_STATUS_SAVER:false/true

5) To on/off heroku type :
Eg:- .set heroku:false/true

6) To put Heroku api key type :
Eg:- .set HEROKU_API_KEY:put api key

7) To put Heroku app name type :
Eg:- .set HEROKU_APP_NAME:put app name

8) To on/off Auto reaction type :
Eg:- .set HEROKU_API_KEY:put api key

9) To on/off Auto reaction type :
Eg:- .set HEROKU_API_KEY:put api key

10) To on/off Level up message type :
Eg:- .set LEVEL_UP_MESSAGE:false/true

11) To put Mongodb url type :
Eg:- .set MONGODB_URI:put mongodb url

12) To put Open api key type :
Eg:- .set OPENAI_API_KEY:put open api key

13) To put Owner name type :
Eg:- .set OWNER_NUMBER:put any name

14) To put Owner number type :
Eg:- .set OWNER_NUMBER:94766943622

15) To put Pack info type :
Eg:- .set PACK_INFO:put any name

16) To put prefix type :
Eg:- .set PREFIX:.

17) To on/off Auto Read message type :
Eg:- .set READ_MESSAGE:false/true

18) To put thumb image type :
Eg:- .set THUMB_IMAGE:put image url

19) To public/privert  type :
Eg:- .set WORKTYPE:public/privet


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
