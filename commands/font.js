const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const fs = require('fs-extra')
  
  //---------------------------------------------------------------------------
cmd({

            pattern: "font",           
            desc: "(menu cmdlist).",
            category: "textpro",
            react: "📍",
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
                    url: 'https://telegra.ph/file/e2c140df787d603632e7f.jpg',
                },

                caption: `
*⦁──👑𝙆𝙄𝙉𝙂-𝙑𝘼𝙅𝙄𝙍𝘼-𝙈𝘿👑──⦁*

💓𝗵𝗲𝗹𝗹𝗼𝘄 ${citel.pushName}💓

Fᴀɴᴄʏ ᴛᴇxᴛ ɢᴇɴᴇʀᴀᴛᴏʀ

Exᴀᴍᴘʟᴇ: .ꜰᴀɴᴄʏ 46 Iᴢᴜᴋᴜ

1 IZUKU ʙOT
2 ⊥Oᙠ ∩⋊∩ZI
3 I⃣   Z⃣   U⃣   K⃣   U⃣    B⃣   O⃣   T⃣
4 I⃞    Z⃞    U⃞    K⃞    U⃞     B⃞    O⃞    T⃞
5 TOᙠ U⋊UƸI
6 Ȉ̸̞̤̖̣͓͌̄̾̃͠Ž̴̭͓̪̮͗̌́͆́̅̈́Ú̵̱͎͇͒K̷̢̲̹̟͕̞̙̻̄̕͘Ú̴̳̦̭͙̪̹̼̥̻̟̊̽̀̽̄ ̸̛̪̙͈̤̥́̑͌̒̐̓͝͝B̶̧̥̩̪̞̭͖̈́́Ơ̵͎̋̉̀̊͋͊̚T̶̙̝͖̹̻͓̀̾
7 ⒾⓏⓊⓀⓊ ⒷⓄⓉ
8 I̶Z̶U̶K̶U̶ ̶B̶O̶T̶
9 I̴Z̴U̴K̴U̴ ̴B̴O̴T̴
10 I̷Z̷U̷K̷U̷ ̷B̷O̷T̷
11 I̲Z̲U̲K̲U̲ ̲B̲O̲T̲
12 I̳Z̳U̳K̳U̳ ̳B̳O̳T̳
13 I♥Z♥U♥K♥U♥ ♥B♥O♥T
14 I͎Z͎U͎K͎U͎ ͎B͎O͎T͎
15 I͓̽Z͓̽U͓̽K͓̽U͓̽ ͓̽B͓̽O͓̽T͓̽
16 ✋︎☪︎🕆︎😐︎🕆︎ 👌︎⚐︎❄︎
17 ＩZＵKＵ　BＯＴ
18 IZUҜU βΩT
19 |乙ㄩҜㄩ 乃ㄖㄒ
20 ꀤꁴꀎꀘꀎ ꌃꂦ꓄
21 ጎጊሁጕሁ ጌዐፕ
22 𝐈𝐙𝐔𝐊𝐔 𝐁𝐎𝐓
23 𝑰𝒁𝑼𝑲𝑼 𝑩𝑶𝑻
24 𝐼𝑍𝑈𝐾𝑈 𝐵𝑂𝑇
25 𝓲ɀꪊ𝘬ꪊ ᥇ꪮ𝓽
26 𝙸𝚉𝚄𝙺𝚄 𝙱𝙾𝚃
27 iຊนkน ๖໐t
28 ıʑųƙų ცơɬ
29 ﾉ乙ひズひ 乃のｲ
30 丨乙ㄩҜㄩ 乃ㄖㄒ
31 🄸🅉🅄🄺🅄 🄱🄾🅃
32 ᎥፚᏬᏦᏬ ᏰᎧᏖ
33 IᘔᑌKᑌ ᗷOT
34 ɨʐʊӄʊ ɮօȶ
35 𝙸𝚉𝚄𝙺𝚄 𝙱𝙾𝚃
36 𝙄𝙕𝙐𝙆𝙐 𝘽𝙊𝙏
37 𝗜𝗭𝗨𝗞𝗨 𝗕𝗢𝗧
38 𝐈𝐙𝐔𝐊𝐔 𝐁𝐎𝐓
39 𝘐𝘡𝘜𝘒𝘜 𝘉𝘖𝘛
40 IZUKU BOT
41 łⱫɄ₭Ʉ ฿Ø₮
42 ÌZÚKÚ ßÖ†
43 ιzυкυ вσт
44 IZЦKЦ BӨƬ
45 įɀԱҠԱ βටͲ
46 ᵢZᵤₖᵤ Bₒₜ
47 ᴵᶻᵁᴷᵁ ᴮᴼᵀ
48 เչยкย ๒๏Շ
49 𝕀ℤ𝕌𝕂𝕌 𝔹𝕆𝕋
50 𝕴𝖅𝖀𝕶𝖀 𝕭𝕺𝕿
51 🅸🆉🆄🅺🆄 🅱🅾🆃
52 𝓘𝓩𝓤𝓚𝓤 𝓑𝓞𝓣
53 ℑℨ𝔘𝔎𝔘 𝔅�𝔗
54 ＩＺＵＫＵ ＢＯＴ
55 𝑰𝒁𝑼𝑲𝑼 𝑩𝑶𝑻
56 𝛪𝛧𝑈𝛫𝑈 𝐵𝛩𝑇
57 𝞘𝙕𝙐𝞙𝙐 𝞑𝞗𝙏
58 𝚰𝚭𝐔𝐊𝐔 𝚩𝚯𝚻
59 ᏆᏃᑌᏦᑌ ᗷᝪᎢ

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
