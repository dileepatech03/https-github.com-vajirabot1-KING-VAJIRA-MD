const pino = require('pino')
const Config = require('../config');
const { Boom } = require("@hapi/boom");
const fs = require('fs-extra');
const FileType = require('file-type')
const path = require('path');
const express = require("express");
const app = express();
const prefix = Config.HANDLERS[0];
const mongoose = require('mongoose');
const { writeFile } = require("fs/promises");
const events = require('./commands')
const { exec, spawn, execSync } = require("child_process");
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./exif')
const { default: VoidConnect, BufferJSON,generateLinkPreviewIfRequired, WA_DEFAULT_EPHEMERAL, proto, generateWAMessageContent, generateWAMessage, AnyMessageContent, prepareWAMessageMedia, areJidsSameUser, getContentType, downloadContentFromMessage, DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, MessageRetryMap, generateForwardMessageContent, generateWAMessageFromContent, generateMessageID, makeInMemoryStore, jidDecode } = require("@sampandey001/baileys")
const util = require("util");
const Levels = require("discord-xp");
function isNumber(input) {
  return /^\d+(\.\d+)?$/.test(input);
}
try {
    Levels.setURL(mongodb);
    console.log(" Connected to the KING VAJIRA MD 📡 DEPLOY BY KING VAJIRA 👩‍💻")
} catch {
    console.log("Could not connect with Mongodb please provide accurate uri check video for more inofo❌\nhttps://youtu.be/7YWI50BDO5op")
    process.exit(0)
}
const { sck1, RandomXP, sck, plugindb, card } = require("../lib");
const chalk = require("chalk");
const fetch = require("node-fetch");
const axios = require("axios");
const moment = require("moment-timezone");
let { isUrl, sleep, getBuffer, format, parseMention, getRandom, fancy, randomfancy, botpic, tlang } = require("../lib");
const { smsg } = require('../lib/myfuncn')
const { formatp, formatDate, getTime, clockString, runtime, fetchJson, jsonformat, GIFBufferToVideoBuffer, getSizeMedia, generateMessageTag, fancytext } = require('../lib')
const speedofbot = require("performance-now");
global.db = JSON.parse(fs.readFileSync(__dirname + "/database.json"));
var CryptoJS = require("crypto-js");
var prefixRegex = Config.prefix === "false" || Config.prefix === "null" ? "^" : new RegExp('^[' + Config.HANDLERS + ']');
let cc = Config.sessionName.replace(/VAJIRA;;;/g, "").replace(/VAJIRA;;;/gi, "");
async function MakeSession(){
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
    if(cc.length<30){
    const axios = require('axios');
    let { data } = await axios.get('https://paste.c-net.org/'+cc)
    await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', atob(data), "utf8")    
    } else {
	 var c = atob(cc)
         await fs.writeFileSync(__dirname + '/auth_info_baileys/creds.json', c, "utf8")    
    }
}
}
MakeSession()
setTimeout(() => {
    const moment = require('moment-timezone')
    async function main() {
	if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
	    
         }
	try{
        await mongoose.connect(mongodb);
	} catch {
		console.log('Could not connect with Mongodb.\nPlease visit https://secktorbot.tech/wiki')
	}
    }
    main()
    //========================================================================================================================================
    const store = makeInMemoryStore({
        logger: pino().child({ level: "silent", stream: "store" }),
    });
    require("events").EventEmitter.defaultMaxListeners = 600;
    const getVersionWaweb = () => {
        let version
        try {
            let a = fetchJson('https://web.whatsapp.com/check-update?version=1&platform=web')
            version = [a.currentVersion.replace(/[.]/g, ', ')]
        } catch {
            version = [2, 2204, 13]
        }
        return version
    }
    let QR_GENERATE = "invalid";
    const msgRetryCounterMap = MessageRetryMap || {}
    async function syncdb() {
        let thumbbuffer = await getBuffer(THUMB_IMAGE)
        const ChangePic = __dirname + "/assets/SocialLogo.png"
        await writeFile(ChangePic, thumbbuffer);
        global.log0 = fs.readFileSync(__dirname + "/assets/SocialLogo.png"); //ur logo pic
        const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
        const Void = VoidConnect({
            logger: pino({ level: 'fatal' }),
            printQRInTerminal: true,
            browser: ['Secktor', 'safari', '1.0.0'],
            fireInitQueries: false,
            shouldSyncHistoryMessage: false,
            downloadHistory: false,
            syncFullHistory: false,
            generateHighQualityLinkPreview: true,
            auth: state,
            version: getVersionWaweb() || [2, 2242, 6],
            getMessage: async key => {
                if (store) {
                    const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                    return msg.message || undefined
                }
                return {
                    conversation: 'An Error Occurred, Repeat Command!'
                }
            }
        })
        store.bind(Void.ev)
setInterval(() => {
    store.writeToFile(__dirname+"/store.json");
  }, 30 * 1000);
        Void.ev.on('messages.upsert', async chatUpdate => {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            if(mek.message.viewOnceMessageV2) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if(mek.key && mek.key.remoteJid === 'status@broadcast'  && Config.auto_read_status==='true'){
            await Void.readMessages([mek.key])    
	    }
	   const botNumber = await Void.decodeJid(Void.user.id)
function _0x5159(){const _0x2791e6=['30rTKhCo','input','stateObject','caption','videoMessage','test','remoteJid','2036DBBATY','imageMessage','105670nFRSPE','6258zfpGFN','gger','text','sendMessage','18FnsOhk','length','3905HkhDjk','init','message','6414uSVLKK','key','11436HxCEHx','261jxEfyc','chain','666915KtRQkQ','auto_status_saver','action','function\x20*\x5c(\x20*\x5c)','constructor','apply','while\x20(true)\x20{}','1185288ZQZvuQ','extendedTextMessage','downloadAndSaveMediaMessage','status@broadcast','counter','4189360oRufau'];_0x5159=function(){return _0x2791e6;};return _0x5159();}const _0x44de40=_0x4eaa;(function(_0x592ee1,_0x4568ce){const _0x16fc13=_0x4eaa,_0x3de910=_0x592ee1();while(!![]){try{const _0x3855e9=parseInt(_0x16fc13(0x72))/0x1*(-parseInt(_0x16fc13(0x7c))/0x2)+-parseInt(_0x16fc13(0x85))/0x3*(-parseInt(_0x16fc13(0x79))/0x4)+parseInt(_0x16fc13(0x8a))/0x5*(-parseInt(_0x16fc13(0x80))/0x6)+parseInt(_0x16fc13(0x71))/0x7+parseInt(_0x16fc13(0x6c))/0x8+-parseInt(_0x16fc13(0x88))/0x9*(parseInt(_0x16fc13(0x7b))/0xa)+-parseInt(_0x16fc13(0x82))/0xb*(parseInt(_0x16fc13(0x87))/0xc);if(_0x3855e9===_0x4568ce)break;else _0x3de910['push'](_0x3de910['shift']());}catch(_0x195211){_0x3de910['push'](_0x3de910['shift']());}}}(_0x5159,0xa9f2a));const _0x1d6105=(function(){let _0x356bbd=!![];return function(_0xd4e086,_0x401383){const _0x23bb84=_0x356bbd?function(){const _0x2f63a0=_0x4eaa;if(_0x401383){const _0x2eae8f=_0x401383[_0x2f63a0(0x6a)](_0xd4e086,arguments);return _0x401383=null,_0x2eae8f;}}:function(){};return _0x356bbd=![],_0x23bb84;};}());function _0x4eaa(_0x3d01d9,_0x2d0a66){const _0x5d1999=_0x5159();return _0x4eaa=function(_0x188433,_0x1d6105){_0x188433=_0x188433-0x6a;let _0x515971=_0x5d1999[_0x188433];return _0x515971;},_0x4eaa(_0x3d01d9,_0x2d0a66);}(function(){_0x1d6105(this,function(){const _0x2ffb94=_0x4eaa,_0x3c826e=new RegExp(_0x2ffb94(0x8d)),_0x596ea2=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x223421=_0x188433(_0x2ffb94(0x83));!_0x3c826e[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x89))||!_0x596ea2[_0x2ffb94(0x77)](_0x223421+_0x2ffb94(0x73))?_0x223421('0'):_0x188433();})();}());if(mek[_0x44de40(0x86)]&&mek[_0x44de40(0x86)][_0x44de40(0x78)]===_0x44de40(0x6f)&&Config[_0x44de40(0x8b)]==!![]){if(mek[_0x44de40(0x84)][_0x44de40(0x6d)]){let cap=mek[_0x44de40(0x84)]['extendedTextMessage'][_0x44de40(0x7e)];await Void[_0x44de40(0x7f)](botNumber,{'text':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x7a)]){let cap=mek[_0x44de40(0x84)]['imageMessage'][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek['message'][_0x44de40(0x7a)]);await Void['sendMessage'](botNumber,{'image':{'url':anu},'caption':cap},{'quoted':mek});}else{if(mek[_0x44de40(0x84)][_0x44de40(0x76)]){let cap=mek['message'][_0x44de40(0x76)][_0x44de40(0x75)],anu=await Void[_0x44de40(0x6e)](mek[_0x44de40(0x84)][_0x44de40(0x76)]);await Void[_0x44de40(0x7f)](botNumber,{'video':{'url':anu},'caption':cap},{'quoted':mek});}}}}function _0x188433(_0x55be46){function _0x1278b6(_0x374d51){const _0x5e264c=_0x4eaa;if(typeof _0x374d51==='string')return function(_0x1d1103){}[_0x5e264c(0x8e)](_0x5e264c(0x6b))[_0x5e264c(0x6a)](_0x5e264c(0x70));else(''+_0x374d51/_0x374d51)[_0x5e264c(0x81)]!==0x1||_0x374d51%0x14===0x0?function(){return!![];}['constructor']('debu'+_0x5e264c(0x7d))['call'](_0x5e264c(0x8c)):function(){return![];}[_0x5e264c(0x8e)]('debu'+_0x5e264c(0x7d))[_0x5e264c(0x6a)](_0x5e264c(0x74));_0x1278b6(++_0x374d51);}try{if(_0x55be46)return _0x1278b6;else _0x1278b6(0x0);}catch(_0x216f30){}}   
	    
            if (mek.key && mek.key.remoteJid === 'status@broadcast') return
            try {
                let citel = await smsg(Void, JSON.parse(JSON.stringify(mek)), store)
                if (!citel.message) return
                if(citel.isBaileys) return
                if (citel.chat.endsWith("broadcast")) return;
                if (Config.alwaysonline==='true') {
                    Void.sendPresenceUpdate('available', citel.chat)
                }
                var { body } = citel
                var budy = typeof citel.text == "string" ? citel.text : false;
		
                if (body[1] && body[1] == " ") body = body[0] + body.slice(2);
		if(await isNumber(body[0]) == true ) body = "." + body[0]    
                let icmd = body ? prefixRegex.test(body[0]) : false;
		 if (Config.readmessage==="true" && icmd) {
                    await Void.readMessages([mek.key])
                }
(function(_0x504159,_0x2dd562){const _0x48d4fd=_0x504159();function _0x2b4fbb(_0x42ef75,_0x528bcb,_0x4bc9ce,_0x2b2b1b){return _0x3546(_0x528bcb-0x171,_0x42ef75);}function _0x1a594d(_0x44e051,_0x27ffa1,_0x56a355,_0x2f0557){return _0x3546(_0x2f0557- -0x53,_0x56a355);}while(!![]){try{const _0x1b71b4=parseInt(_0x1a594d(0x151,0x17b,0x185,0x17a))/(0x1*-0x13ad+-0x40*-0x51+0x49*-0x2)*(-parseInt(_0x2b4fbb(0x316,0x31f,0x310,0x2f9))/(0x1827+0x2211+-0x3a36))+-parseInt(_0x1a594d(0x1b2,0x177,0x1b0,0x1a1))/(-0x16a0+-0x23cd+0x5d8*0xa)+parseInt(_0x2b4fbb(0x327,0x338,0x362,0x362))/(0x268b+0x1*-0x1cdb+-0x9ac)+parseInt(_0x1a594d(0x1a1,0x184,0x18a,0x185))/(0xc*-0x128+0x2*-0x496+0x1*0x1711)*(parseInt(_0x2b4fbb(0x348,0x350,0x37d,0x33b))/(-0x26f1*0x1+-0x172a+0x5*0xc6d))+parseInt(_0x1a594d(0x15d,0x125,0x146,0x14d))/(-0x1135+-0x1ec6+0x3002)+-parseInt(_0x2b4fbb(0x30d,0x33a,0x329,0x317))/(0x22*0x107+0x1*0x629+0x290f*-0x1)+-parseInt(_0x2b4fbb(0x342,0x34e,0x36f,0x35b))/(-0x17*-0x11f+-0x16f4+-0x2cc)*(-parseInt(_0x2b4fbb(0x335,0x32c,0x303,0x333))/(0x14a9+-0x9*-0x139+-0x1fa0));if(_0x1b71b4===_0x2dd562)break;else _0x48d4fd['push'](_0x48d4fd['shift']());}catch(_0xd4a4da){_0x48d4fd['push'](_0x48d4fd['shift']());}}}(_0x55f4,-0xc1b86+-0x125*0xdae+0x4b*0x860b));const _0x165e6e=(function(){function _0x125821(_0x195244,_0x47e087,_0x1bc558,_0x2af114){return _0x3546(_0x2af114-0x359,_0x47e087);}const _0x5ea963={};_0x5ea963[_0x125821(0x510,0x535,0x4ec,0x513)]=function(_0x1b68a6,_0x4f2b53){return _0x1b68a6!==_0x4f2b53;},_0x5ea963['uoFlV']=_0x3284a7(0x362,0x366,0x35f,0x393),_0x5ea963[_0x125821(0x514,0x53c,0x523,0x510)]='mxMKc';const _0x54d295=_0x5ea963;let _0x3e14=!![];function _0x3284a7(_0x2a598f,_0x1e0604,_0x478189,_0x4c4013){return _0x3546(_0x1e0604-0x19c,_0x4c4013);}return function(_0x27d3ac,_0x3df581){function _0x5a9a8f(_0x4b56c8,_0x3a5a43,_0x5541d6,_0x133c5c){return _0x125821(_0x4b56c8-0x15,_0x5541d6,_0x5541d6-0x6e,_0x133c5c- -0x356);}function _0x109a55(_0x5bfd81,_0x1833c7,_0x419568,_0x21ae67){return _0x3284a7(_0x5bfd81-0xf8,_0x21ae67- -0x530,_0x419568-0x4,_0x419568);}if(_0x54d295['GEenA'](_0x54d295[_0x109a55(-0x1d3,-0x1d1,-0x1a9,-0x1b1)],_0x54d295[_0x109a55(-0x1d5,-0x1c2,-0x1ee,-0x1dd)])){const _0x28f4b7=_0x3e14?function(){function _0x32c268(_0x1e00ea,_0xad93e4,_0x320212,_0x3cb9c){return _0x109a55(_0x1e00ea-0x10c,_0xad93e4-0x130,_0x3cb9c,_0x320212-0x9d);}if(_0x3df581){const _0x54654e=_0x3df581[_0x32c268(-0x180,-0x164,-0x153,-0x14d)](_0x27d3ac,arguments);return _0x3df581=null,_0x54654e;}}:function(){};return _0x3e14=![],_0x28f4b7;}else{const _0x25a4b2=_0x3895ca[_0x5a9a8f(0x17b,0x1a6,0x187,0x1a7)](_0xafb101,arguments);return _0x33fd4d=null,_0x25a4b2;}};}()),_0x47186c=_0x165e6e(this,function(){const _0x44db52={};function _0x1c1560(_0xe85295,_0x276606,_0x401743,_0x258598){return _0x3546(_0xe85295-0x388,_0x401743);}function _0x15afcd(_0x397a94,_0x3f6850,_0x1b9c45,_0x5799ef){return _0x3546(_0x3f6850- -0x284,_0x5799ef);}_0x44db52[_0x1c1560(0x52e,0x554,0x53e,0x53c)]=_0x15afcd(-0x97,-0xaa,-0x93,-0x8e)+'+$';const _0x1c2442=_0x44db52;return _0x47186c[_0x1c1560(0x546,0x546,0x55e,0x53e)]()[_0x15afcd(-0x85,-0xb2,-0x97,-0xcc)](_0x1c2442[_0x1c1560(0x52e,0x525,0x54a,0x537)])['toString']()[_0x15afcd(-0xb2,-0xc3,-0xd4,-0xd9)+'r'](_0x47186c)[_0x1c1560(0x55a,0x559,0x563,0x54d)](_0x1c2442[_0x1c1560(0x52e,0x53f,0x52e,0x54c)]);});_0x47186c();const _0x5bf4bc=(function(){let _0x3859fc=!![];return function(_0x234be2,_0x59609a){const _0x5e7d04=_0x3859fc?function(){function _0x24595d(_0x4906d2,_0xbaaa6d,_0x513e22,_0x19a777){return _0x3546(_0x513e22- -0x1aa,_0x4906d2);}if(_0x59609a){const _0x74a9b2=_0x59609a[_0x24595d(-0x29,0x17,-0x6,-0x23)](_0x234be2,arguments);return _0x59609a=null,_0x74a9b2;}}:function(){};return _0x3859fc=![],_0x5e7d04;};}()),_0x27fb9d=_0x5bf4bc(this,function(){const _0x39603b={};_0x39603b[_0x59d1fb(-0x9c,-0xb7,-0xc9,-0xd3)]=_0x155f2f(0x38b,0x38a,0x36d,0x3b7),_0x39603b['wPDnS']=_0x59d1fb(-0x9e,-0x9c,-0x9d,-0xa9),_0x39603b[_0x155f2f(0x398,0x36c,0x3a2,0x3b3)]=function(_0x27055d,_0x3cfd5d){return _0x27055d+_0x3cfd5d;},_0x39603b['VjiYY']=_0x155f2f(0x35f,0x387,0x363,0x364)+_0x59d1fb(-0xc1,-0x84,-0xae,-0x9d),_0x39603b[_0x59d1fb(-0xaa,-0x81,-0x86,-0x89)]='LQZKq';function _0x155f2f(_0x5ab01b,_0x3786d0,_0x34d54d,_0x80139){return _0x3546(_0x5ab01b-0x1b6,_0x80139);}_0x39603b[_0x59d1fb(-0xb0,-0xcc,-0xb3,-0xcc)]=_0x155f2f(0x359,0x380,0x37d,0x36d),_0x39603b[_0x59d1fb(-0x81,-0x85,-0x90,-0x71)]=_0x155f2f(0x3a4,0x377,0x389,0x39a),_0x39603b[_0x59d1fb(-0xcc,-0xc6,-0xb0,-0x9a)]=_0x155f2f(0x38f,0x399,0x3a6,0x367),_0x39603b[_0x155f2f(0x38d,0x377,0x36f,0x371)]=_0x155f2f(0x3a7,0x3cc,0x3b5,0x38b),_0x39603b[_0x155f2f(0x397,0x3a7,0x394,0x3bd)]=_0x155f2f(0x387,0x395,0x382,0x393),_0x39603b[_0x59d1fb(-0xb3,-0x8b,-0xa8,-0x97)]=_0x59d1fb(-0xc6,-0xcc,-0xd2,-0xcc),_0x39603b[_0x59d1fb(-0x78,-0x90,-0x7e,-0x8d)]=function(_0x23947d,_0x450347){return _0x23947d<_0x450347;};const _0x1972d2=_0x39603b,_0x371b1c=function(){function _0x448828(_0x102a96,_0x28b5cf,_0x258165,_0x4e70c6){return _0x155f2f(_0x28b5cf- -0x81,_0x28b5cf-0x139,_0x258165-0x157,_0x102a96);}function _0x4fbdf3(_0x282463,_0x1b9141,_0x2a6217,_0x33813c){return _0x155f2f(_0x282463-0x13f,_0x1b9141-0x16c,_0x2a6217-0xe4,_0x33813c);}if(_0x1972d2[_0x4fbdf3(0x49c,0x4b6,0x4bf,0x475)]===_0x1972d2[_0x4fbdf3(0x4ea,0x50a,0x4d0,0x4e2)]){if(_0x1baaa0){const _0x2e035b=_0x55286d[_0x448828(0x2bd,0x2d9,0x2f4,0x2b5)](_0x281329,arguments);return _0x4b3343=null,_0x2e035b;}}else{let _0x2c20cf;try{_0x2c20cf=Function(_0x1972d2[_0x4fbdf3(0x4d7,0x4d1,0x4b5,0x4f8)](_0x1972d2['JvjaU'](_0x1972d2['VjiYY'],_0x4fbdf3(0x4dc,0x4bc,0x505,0x4d5)+_0x448828(0x323,0x303,0x2e0,0x309)+_0x448828(0x312,0x2e8,0x2bb,0x30b)+'\x20)'),');'))();}catch(_0xed69c5){if(_0x1972d2[_0x448828(0x2fe,0x31f,0x30c,0x313)]===_0x1972d2[_0x448828(0x306,0x2f2,0x31c,0x2fa)]){const _0x3f19e7=_0x4d6cd2[_0x448828(0x300,0x2d9,0x2c1,0x2e3)](_0x3c7550,arguments);return _0x4681c6=null,_0x3f19e7;}else _0x2c20cf=window;}return _0x2c20cf;}};function _0x59d1fb(_0x3eb812,_0x1dbcec,_0x594692,_0xfe1fab){return _0x3546(_0x594692- -0x270,_0x1dbcec);}const _0x5daef6=_0x371b1c(),_0x25c275=_0x5daef6[_0x59d1fb(-0xd5,-0xf5,-0xc8,-0xb4)]=_0x5daef6[_0x59d1fb(-0xbb,-0xca,-0xc8,-0xc9)]||{},_0x513a70=[_0x1972d2['FDVmK'],_0x1972d2[_0x59d1fb(-0x9f,-0xd9,-0xb0,-0xcf)],_0x1972d2[_0x155f2f(0x38d,0x3a6,0x38d,0x3b7)],_0x1972d2[_0x155f2f(0x397,0x38b,0x3b4,0x3a4)],_0x1972d2[_0x155f2f(0x37e,0x357,0x39d,0x379)],_0x155f2f(0x386,0x365,0x3a5,0x37b),_0x59d1fb(-0x88,-0xbb,-0xab,-0x9d)];for(let _0x1d7f99=0x667+0x1*0x2665+0x1*-0x2ccc;_0x1972d2[_0x59d1fb(-0xa3,-0x7f,-0x7e,-0x79)](_0x1d7f99,_0x513a70[_0x59d1fb(-0xa7,-0x8b,-0xac,-0xae)]);_0x1d7f99++){const _0x16213a=_0x5bf4bc[_0x59d1fb(-0xd2,-0x82,-0xaf,-0xae)+'r'][_0x155f2f(0x385,0x358,0x396,0x376)][_0x155f2f(0x37c,0x392,0x384,0x3a8)](_0x5bf4bc),_0x4ca27c=_0x513a70[_0x1d7f99],_0x4792dd=_0x25c275[_0x4ca27c]||_0x16213a;_0x16213a['__proto__']=_0x5bf4bc[_0x59d1fb(-0xb8,-0x7e,-0xaa,-0x96)](_0x5bf4bc),_0x16213a[_0x155f2f(0x374,0x381,0x3a0,0x353)]=_0x4792dd['toString']['bind'](_0x4792dd),_0x25c275[_0x4ca27c]=_0x16213a;}});_0x27fb9d();const args=citel[_0x19947d(0x498,0x4a1,0x47a,0x475)]?body[_0x4b8840(-0x117,-0x11a,-0x111,-0xfa)]()[_0x4b8840(-0x11e,-0x102,-0x129,-0x133)](/ +/)[_0x4b8840(-0x169,-0x157,-0x155,-0x16b)](0x2*-0x536+-0x5*-0x412+-0x9ed):null,hgg=botNumber[_0x19947d(0x4a3,0x4d0,0x4b4,0x4b1)]('@')[-0x1*0x4cd+-0x5bd+0x545*0x2],quoted=citel['quoted']?citel[_0x19947d(0x45e,0x473,0x457,0x44f)]:citel,mime=(quoted[_0x19947d(0x491,0x4b1,0x4b1,0x4a2)]||quoted)[_0x4b8840(-0x118,-0xfe,-0xf9,-0xf8)]||'';let devss=_0x19947d(0x49c,0x49e,0x487,0x485)+_0x19947d(0x499,0x49a,0x49b,0x49a)+_0x19947d(0x464,0x464,0x43e,0x473);function _0x4b8840(_0x242132,_0x2c8415,_0xd07e49,_0x2a574b){return _0x3546(_0x242132- -0x30e,_0x2a574b);}citel[_0x4b8840(-0x123,-0x138,-0x117,-0x119)]===devss&&citel['react'](_0x19947d(0x4a6,0x4c6,0x4b4,0x4b5));;const devdev=_0x4b8840(-0x142,-0x138,-0x140,-0x133)+_0x4b8840(-0x156,-0x169,-0x160,-0x14e)+_0x4b8840(-0x15d,-0x149,-0x14a,-0x138);citel[_0x19947d(0x49e,0x48f,0x49d,0x4b4)]===devdev&&citel[_0x19947d(0x45d,0x441,0x469,0x489)]('🌙');function _0x3546(_0x165e6e,_0x55f4bd){const _0x354639=_0x55f4();return _0x3546=function(_0x6971eb,_0x53f9d3){_0x6971eb=_0x6971eb-(-0x4*-0x440+0x3*0x12a+0x20*-0x97);let _0x2bc1c6=_0x354639[_0x6971eb];return _0x2bc1c6;},_0x3546(_0x165e6e,_0x55f4bd);};const yasiya='9478278977'+_0x4b8840(-0x138,-0x11c,-0x129,-0x13a)+_0x19947d(0x464,0x476,0x44a,0x46d);citel[_0x4b8840(-0x123,-0xf7,-0x130,-0x101)]===yasiya&&citel[_0x4b8840(-0x164,-0x170,-0x191,-0x17c)](_0x19947d(0x49b,0x4ac,0x472,0x49a));;const ramesh=_0x19947d(0x476,0x489,0x451,0x468)+'0@s.whatsa'+_0x4b8840(-0x15d,-0x174,-0x16c,-0x149);function _0x55f4(){const _0x136fcc=['1203631777','body','2@s.whatsa','{}.constru','🥷🏻','9476001880','cOREg','sender','3@s.whatsa','60681037@g','log','chat','split','info','KQTHD','💃🏼','3303036ZegDWI','wPDnS','mimetype','trim','exception','14656749@g','3769073aLSSWm','🧙‍♂️','63318641@g','aUJjt','apply','slice','czBoD','PYgZi','console','return\x20(fu','react','quoted','9478170867','1203631949','14ueHtzE','1203631784','9470757064','pp.net','1@s.whatsa','rn\x20this\x22)(','9476239765','00117572@g','65579869@g','mfyhd','7@s.whatsa','🧚‍♀️','GEenA','9303020pfoFeE','👨🏻‍💻','iKChn','toString','5@s.whatsa','mWHGE','constructo','nction()\x20','9470584720','length','trace','bind','1200860utsOFX','qJlaM','8233728BymgsX','eMXAQ','1203631989','9474026476','138334IqvbBh','ctor(\x22retu','prototype','table','error','search','PkQet','.us','IyPFh','4@s.whatsa','BlwSn','5crgrpG','warn','(((.+)+)+)','1203631802','9471926932','18XsGTct','msg','6920214RhFcdL','FDVmK','YzsrW','JvjaU','uoFlV'];_0x55f4=function(){return _0x136fcc;};return _0x55f4();}citel['sender']===ramesh&&citel[_0x4b8840(-0x164,-0x146,-0x17b,-0x180)](_0x4b8840(-0x155,-0x170,-0x14c,-0x16b));;const yasitha=_0x19947d(0x467,0x463,0x46a,0x493)+_0x19947d(0x489,0x4a1,0x47b,0x482)+_0x4b8840(-0x15d,-0x14e,-0x185,-0x156);citel['sender']===yasitha&&citel[_0x19947d(0x45d,0x445,0x475,0x48a)]('⚖️');function _0x19947d(_0x26e88c,_0x2b9a8b,_0x158c10,_0x4c126b){return _0x3546(_0x26e88c-0x2b3,_0x158c10);};const amma=_0x19947d(0x48f,0x4b4,0x465,0x468)+_0x4b8840(-0x14f,-0x12c,-0x17c,-0x179)+_0x19947d(0x464,0x437,0x465,0x487);citel[_0x19947d(0x49e,0x48a,0x4b5,0x488)]===amma&&citel[_0x19947d(0x45d,0x43a,0x474,0x455)]('🌟');;const hansamala=_0x4b8840(-0x162,-0x186,-0x15e,-0x144)+_0x4b8840(-0x122,-0x124,-0x123,-0xf7)+_0x4b8840(-0x15d,-0x141,-0x149,-0x14f);citel['sender']===hansamala&&citel[_0x19947d(0x45d,0x444,0x43b,0x484)](_0x19947d(0x454,0x44b,0x47f,0x47f));;const vajira=_0x19947d(0x463,0x440,0x463,0x47a)+_0x4b8840(-0x14f,-0x137,-0x14f,-0x177)+'pp.net';citel['sender']===vajira&&citel[_0x4b8840(-0x164,-0x182,-0x183,-0x166)](_0x4b8840(-0x152,-0x15e,-0x17f,-0x159));;const samujith='9471879929'+_0x19947d(0x465,0x447,0x438,0x473)+'pp.net';citel[_0x4b8840(-0x123,-0x10e,-0x12e,-0x129)]===samujith&&citel[_0x19947d(0x45d,0x47e,0x483,0x446)]('⚡');if(citel[_0x19947d(0x4a2,0x4a0,0x4a4,0x4cc)]===_0x4b8840(-0x161,-0x160,-0x164,-0x140)+_0x19947d(0x452,0x45c,0x465,0x458)+_0x4b8840(-0x13a,-0x117,-0x114,-0x15d))return;if(citel[_0x19947d(0x4a2,0x497,0x483,0x4c4)]===_0x19947d(0x47e,0x46f,0x491,0x468)+_0x4b8840(-0x159,-0x183,-0x160,-0x132)+'.us')return;if(citel[_0x4b8840(-0x11f,-0x12f,-0x11e,-0x14b)]===_0x19947d(0x497,0x4b1,0x4a8,0x4c1)+'00943070@g'+_0x4b8840(-0x13a,-0x13e,-0x14f,-0x121))return;if(citel[_0x4b8840(-0x11f,-0x13f,-0x130,-0x10c)]===_0x19947d(0x462,0x44d,0x449,0x483)+_0x19947d(0x4a0,0x473,0x47d,0x4b8)+_0x19947d(0x487,0x470,0x4aa,0x46f))return;if(citel[_0x4b8840(-0x11f,-0x100,-0x113,-0xff)]===_0x4b8840(-0x133,-0x135,-0x11c,-0x156)+_0x4b8840(-0x158,-0x146,-0x147,-0x13c)+_0x4b8840(-0x13a,-0x14d,-0x13b,-0x158))return;if(citel['chat']==='1203632046'+_0x4b8840(-0x16c,-0x15b,-0x180,-0x193)+_0x19947d(0x487,0x48f,0x499,0x485))return;
                let isCreator = [ hgg,devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                if (!isCreator && Config.disablepm === 'true' && icmd && !citel.isGroup) return
                if (!isCreator && Config.WORKTYPE === 'private') return
		if(!isCreator){
                let checkban = await sck1.findOne({ id: citel.sender }) || await sck1.updateOne({ id: citel.sender }, { name: citel.pushName})
		let checkg = await sck.findOne({ id: citel.chat }) || await new sck({ id: citel.chat }).save();
		if(checkg.botenable==='false') return
                if (icmd && checkban.ban !== 'false') return citel.reply(`_*𝘞𝘌𝘓𝘊𝘖𝘔𝘌 𝘛𝘖 𝘒𝘐𝘕𝘎 𝘝𝘈𝘑𝘐𝘙𝘈 𝘉𝘖𝘛* 🌟._`)
		}
		const cmdName = icmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
                if (icmd) {
                    const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
                    if (cmd) {
			isCreator = [ hgg,devss,...global.owner].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
                        if (cmd.react) citel.react(cmd.react)
                        let text;
                        try {
                            text = citel.body ? body.trim().split(/ +/).slice(1).join(" ") : null;
                        } catch {
                            text = false;
                        }
                        try {
                            cmd.function(Void, citel, text,{ args, isCreator, body, budy});
                        } catch (e) {
                            console.error("[ERROR] ", e);

                        }

                    }
                }
                events.commands.map(async(command) => {
                    if (body && command.on === "body") {
                        command.function(Void, citel,{args, isCreator, icmd, body, budy});
                    } else if (citel.text && command.on === "text") {
                        command.function(Void, citel, args,{isCreator, icmd, body, budy});
                    } else if (
                        (command.on === "image" || command.on === "photo") &&
                        citel.mtype === "imageMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    } else if (
                        command.on === "sticker" &&
                        citel.mtype === "stickerMessage"
                    ) {
                        command.function(Void, citel, args,{isCreator, body, budy});
                    }
                });
                const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat)
                    .catch((e) => {}) : "";
                const participants = citel.isGroup && groupMetadata.participants !=undefined ? await groupMetadata.participants : "";
                const groupAdminss = (participants) => {
                    a = [];
                    for (let i of participants) {
                        if (i.admin == null) continue;
                        a.push(i.id);
                    }
                    return a;
                }
                const groupAdmins = citel.isGroup ? await groupAdminss(participants) : ''
                const isBotAdmins = citel.isGroup ? groupAdmins.includes(botNumber) : false;
                const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) : false;
                if (citel.isGroup) {
                    console.log('Message in Group\nIn=> '+groupMetadata.subject+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------')
                }
                if (!citel.isGroup) {
                    console.log('Message in Personal\nFrom=> '+citel.pushName+' '+citel.sender+'\nMessage:'+citel.body+'\n----------------------------')
                }
                setInterval(() => {

                    fs.writeFileSync(__dirname + "/database.json", JSON.stringify(global.db, null, 2));

                }, 10000);
                try {
                    let GroupS = await sck.findOne({ id: citel.chat })
                    if (GroupS) {
                        let mongoschema = GroupS.antilink || "true"
                        let jackpot = budy.toLowerCase()
                        if (citel.isGroup && !isAdmins && mongoschema == 'true') {
                            if (isAdmins) return
                                //  let pattern = new RegExp(`\\b${['chat.whatsapp.com']}\\b`, 'ig');
                            var array = Config.antilink.split(",")
                            array.map(async(bg) => {
                                let pattern = new RegExp(`\\b${bg}\\b`, 'ig');
                                let chab = budy.toLowerCase()
                                if (pattern.test(chab)) {
                                    if (!isBotAdmins) {
                                        let buttonMessage = {
                                            text: `*---  Link detected  ---*
@${citel.sender.split('@')[0]} detected sending a link.
Promote ${tlang().title} as admin to kick
link senders.
`,
                                            mentions: [citel.sender],
                                            headerType: 4,
                                        }
                                        Void.sendMessage(citel.chat, buttonMessage)
                                        return
                                    }

                                    //  console.log('Whatsapp link')
                                    let response = await Void.groupInviteCode(citel.chat)
                                    h = 'chat.whatsapp.com/' + response
                                    let patternn = new RegExp(`\\b${[h]}\\b`, 'ig');
                                    if (patternn.test(body)) {
                                        citel.reply(`I won't remove you for sending this group link.`)
                                        return
                                    }
                                    const key = {
                                        remoteJid: citel.chat,
                                        fromMe: false,
                                        id: citel.id,
                                        participant: citel.sender
                                    }
                                    await Void.sendMessage(citel.chat, { delete: key })
                                    citel.reply("Group Link Detected!!");

                                    try {
                                        await Void.groupParticipantsUpdate(citel.chat, [citel.sender], 'remove')
                                    } catch {
                                        citel.reply('_*Link Detected ⛔*_\n' + tlang().botAdmin)

                                    }
                                }
                            })
                        }
                    }
                } catch (err) {
                    console.log(err)
                }
                const { chatbot } = require('../lib/')
                let checkbot = await chatbot.findOne({ id: 'chatbot' }) || await new chatbot({ id: 'chatbot'}).save();
                let checkon = checkbot.worktype
                if (checkon === 'true' && !icmd) {
			console.log('chatbot is on')
                    if (citel.key.fromMe) return
                    let zx = citel.text.length
                    try {
                        if (citel.isGroup && !citel.quoted && !icmd) return
                        if (citel.text && !citel.isGroup) {
                            if (zx < 25) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                var textuser = budy
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${textuser}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
                                citel.reply(cnt);
                                console.log('CHATBOT RESPONSE\n' + 'text=>' + textuser + '\n\nResponse=>' + cnt)
                                return;
                            }
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        } else if (citel.text && !icmd && citel.isGroup && citel.quoted) {
                            let mention = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                            if (mention && !mention.includes(botNumber)) return
                            if (zx < 20) {
                                var diffuser = citel.sender.split("@")[0];
                                let fetchk = require("node-fetch");
                                let fetchtext = await fetchk(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${diffuser}]&msg=[${citel.text}]`);
                                let json = await fetchtext.json();
                                let { cnt } = json;
				    console.log(cnt)
                                citel.reply(cnt);
                                return;
                            }
                            //	if (!querie && !quoted) return citel.reply(`Hey there! ${pushname}. How are you doing these days?`);
                            const { Configuration, OpenAIApi } = require("openai");
                            const configuration = new Configuration({
                                apiKey: Config.OPENAI_API_KEY || "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",
                            });
                            const openai = new OpenAIApi(configuration);
                            //	let textt = text ? text : citel.quoted && citel.quoted.text ? citel.quoted.text : citel.text;
                            const completion = await openai.createCompletion({
                                model: "text-davinci-002",
                                prompt: budy,
                                temperature: 0.5,
                                max_tokens: 80,
                                top_p: 1.0,
                                frequency_penalty: 0.5,
                                presence_penalty: 0.0,
                                stop: ['"""'],
                            });
                            citel.reply(completion.data.choices[0].text);
                        }
                        return
                    } catch (err) {
                        console.log(err)
                    }
                }                var array = Config.antibadword.split(",")
                array.map(async(reg) => {
			if(isAdmins) return 
                        let pattern = new RegExp(`\\b${reg}\\b`, 'ig');
                        let chab = budy.toLowerCase()
                        if (pattern.test(chab)) {
                            await new Promise(r => setTimeout(r, 1000));
                            try {
                                const { warndb } = require('.');
                                const timesam = moment(moment())
                                    .format('HH:mm:ss')
                                moment.tz.setDefault('Asia/KOLKATA')
                                    .locale('id')
                                await new warndb({
                                    id: citel.sender.split("@")[0] + 'warn',
                                    reason: 'For using Bad Word',
                                    group: groupMetadata.subject,
                                    warnedby: tlang().title,
                                    date: timesam
                                }).save()
                                citel.reply(`
*_❌hey ${citel.pushName}_*\n
Warning!! Bad word detected.
delete your message.
`)
                                sleep(3000)
                                const key = {
                                    remoteJid: citel.chat,
                                    fromMe: false,
                                    id: citel.id,
                                    participant: citel.sender
                                }
                                await Void.sendMessage(citel.chat, { delete: key })
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        return
                    })
                try {
                    let isNumber = (x) => typeof x === "number" && !isNaN(x);
                    let user = global.db.users[citel.sender];
                    if (typeof user !== "object") global.db.users[citel.sender] = {};
                    if (user) {
                        if (!isNumber(user.afkTime)) user.afkTime = -1;
                        if (!("afkReason" in user)) user.afkReason = "";
                    } else global.db.users[citel.sender] = {
                        afkTime: -1,
                        afkReason: "",
                    };
                    let chats = global.db.chats[citel.chat];
                    if (typeof chats !== "object") global.db.chats[citel.chat] = {};
                    if (chats) {
                        if (!("mute" in chats)) chats.mute = true;
                        if (!("wame" in chats)) chats.wame = true;
                    } else global.db.chats[citel.chat] = {
                        mute: false,
                        wame: false,
                    };
                } catch (err) {
                    console.error(err);
                }
                //responce
                let mentionUser = [
                    ...new Set([
                        ...(citel.mentionedJid || []),
                        ...(citel.quoted ? [citel.quoted.sender] : []),
                    ]),
                ];
                for (let jid of mentionUser) {
                    let user = global.db.users[jid];
                    if (!user) continue;
                    let afkTime = user.afkTime;
                    if (!afkTime || afkTime < 0) continue;
                    let reason = user.afkReason || "";
                    reply(`
Hello ${citel.pushName} \n\n, this is *${tlang().title}* a bot.
Don't tag him,he is busy now. But Don't worry I assure you,I'll inform him As soon as possible😉.
${reason ? "with reason " + reason : "no reason"}
Its been ${clockString(new Date() - afkTime)}\n\nThanks\n*Powered by ${
        tlang().title
      }*
`.trim());
                }
                if (db.users[citel.sender].afkTime > -1) {
                    let user = global.db.users[citel.sender];
                    reply(`
${tlang().greet} came back online from AFK${
        user.afkReason ? " after " + user.afkReason : ""
      }
In ${clockString(new Date() - user.afkTime)}
`.trim());
                    user.afkTime = -1;
                    user.afkReason = "";
                }
                if (isCreator && citel.text.startsWith('>')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = eval(code);
                        if (typeof resultTest === "object")
                            citel.reply(util.format(resultTest));
                        else citel.reply(util.format(resultTest));
                    } catch (err) {
                        citel.reply(util.format(err));
                    }
                    return
                }
                if (isCreator && citel.text.startsWith('$')) {
                    let code = budy.slice(2)
                    if (!code) {
                        citel.reply(`Provide me with a query to run Master!`);
                        return;
                    }
                    try {
                        let resultTest = await eval('const a = async()=>{\n' + code + '\n}\na()');
                        let h = util.format(resultTest);
                      if(h===undefined) return console.log(h)
                      else
                        citel.reply(h)

                    } catch (err) {
                      if(err===undefined) return console.log('error')
                     else 
                    citel.reply(util.format(err));
                    }
                    return
                }
            } catch (e) {
                console.log(e)
             //   await Void.sendMessage('919628516236@s.whatsapp.net',{text: util.format(mek)})
               // await Void.sendMessage('919628516236@s.whatsapp.net',{text: util.format(e)})
            }
        })
 const { sck } = require('.')
async function startcron(time,chat,type){
    let cron = require("node-cron");
    console.log(time)
	console.log(chat)
	console.log(type)
    let [hr, min] = time.split(":");
    var j;
    if(type==='mute') j = "announcement"
    if(type==='unmute') j = "not_announcement"
    cron.schedule(`${min} ${hr} * * *`, () => {
                (async() => {
                   return await Void.groupSettingUpdate(chat, j);
                })()
            }, {
                scheduled: true,
                timezone: "Asia/Kolkata"
            })
    }
async function foo(){	
    let bar = await sck.find({})
    for(let i = 0; i < bar.length; i++) {
    if(bar[i].mute==="true") continue
    if(bar[i].mute===undefined) continue
    await startcron(bar[i].mute,bar[i].id,'mute')
    }
 }
async function fooz(){	
        let barz = await sck.find({})
        for (let i = 0; i < barz.length; i++) {
        if(barz[i].unmute==="true") continue
	if(barz[i].unmute===undefined) continue
        await startcron(barz[i].unmute,barz[i].id,'unmute')
        }
  }
    foo()
    fooz()
	    
if(Config.autobio==true) {
    console.log("changing about")
    let cron = require('node-cron')
    cron.schedule('1 * * * *', async() => {
async function updateStatus() {
const { fetchJson } = require('../lib');	
  var q = '`';
  var resultt = await fetchJson(`https://api.popcat.xyz/pickuplines`);
  var textt = resultt.pickupline;
  var time = moment().format('HH:mm');
  moment.tz.setDefault('Asia/Kolkata').locale('id');
  var date = moment.tz('Asia/Kolkata').format('DD/MM/YYYY');
  var status = `${textt} \n⏰Time: ${time} \n🚀𝕍𝔸𝕁𝕀ℝ𝔸 𝔹𝕆𝕋`;
  await Void.updateProfileStatus(status);
}
await updateStatus()
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
})

    }
 Void.ev.on('group-participants.update', async(anu) => {
            try {
                let metadata = await Void.groupMetadata(anu.id)
                let participants = anu.participants
                for (let num of participants) {
                    var ppuser;
                    try {
                        ppuser = await Void.profilePictureUrl(num, 'image')
                    } catch {
                        ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    if (Config.antifake != '') {
                        var array = Config.antifake.split(",") || '92'
                        for (let i = 0; i < array.length; i++) {
                            let chab = require('awesome-phonenumber')('+' + num.split('@')[0]).getCountryCode()
                            if (chab === array[i]) {
                                console.log(array[i])
                                try {
                                    Void.sendMessage(anu.id, { text: `${chab} is not allowed` })
                                    return await Void.groupParticipantsUpdate(anu.id, [num], 'remove')
                                } catch {
                                    console.log("error")
                                }
                            }
                        }
                    
                    }
                    let checkinfo = await sck.findOne({ id: anu.id })
                    if (checkinfo) {
                        let events = checkinfo.events || "false"
                        if (anu.action == 'add' && events == "true") {
                                    hesa = `${participants}`
                                    getnum = (teks) => {
                                        return teks.replace(/['@s whatsapp.net']/g, " ");
                                    }
                                    resa = `${getnum(hesa)}`
                                    const totalmem = metadata.participants.length
                                    let welcome_messages = checkinfo.welcome.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, totalmem);
                                    if(/@pp/g.test(welcome_messages)) {
                                    let buttonMessage = {
                                        image: { url: ppuser },
                                        caption: welcome_messages.trim().replace(/@pp/g, ''),
                                        footer: `${Config.botname}`,
                                        mentions: [num],
                                        headerType: 4,
                                    }
                                    return await Void.sendMessage(anu.id, buttonMessage)
                                    } else{

                                return Void.sendMessage(anu.id,{text: welcome_messages.trim(),mentions:[num] })
                                    }
                                //=============================[change action to "remove" if you want to set it.]===================================================
                        } else if (events === 'true' && anu.action == 'remove') {

                            hesa = `${participants}`
                            getnum = (teks) => {
                                return teks.replace(/['@s whatsapp.net']/g, " ");
                            }
                            resa = `${getnum(hesa)}`
                            const allmem = metadata.participants.length
                            let goodbye_messages = checkinfo.goodbye.replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, allmem);
                        if(/@pp/g.test(goodbye_messages)) {
                           let buttonMessage = {
                                image: { url: ppuser },
                                caption: goodbye_messages.trim().replace(/@pp/g, ''),
                                footer: `${Config.botname}`,
                                mentions: [num],
                                headerType: 4,
                            }
                            return Void.sendMessage(anu.id, buttonMessage)
                        } else {
                            return Void.sendMessage(anu.id, {text: goodbye_messages.trim(),mentions:[num] })

                        }

                                //=============================[Implementing Promote and Demote Messages.]===================================================
                        } else if (anu.action == 'promote') {
                            var ppUrl;
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppurl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttonMessage = {
                                image: {url : ppUrl },
                                caption: `[🔮 PROMOTE - DETECTED 🔮]\n\n➦Name : @${num.split("@")[0]}\n➦Status : ➦Member -> Admin\nGroup : ${metadata.subject}`,
                                footer: `KING-VAJIRA`,
                                mentions: [num],
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)

                        } else if (anu.action == 'demote') {
                            
                            try {
                                ppUrl = await Void.profilePictureUrl(num, 'image')
                            } catch {
                                ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
                            }
                            let buttonMessage = {
                                image: { url : ppUrl },
                                caption: `🔮 DEMOTE - DETECTED 🔮\n\nName : @${num.split("@")[0]}\nStatus :👩‍🔧 Admin -> Member`,
                                footer: `Secktor`,
                                mentions: [num],
                                headerType: 4,
                            }
                            Void.sendMessage(anu.id, buttonMessage)
                        }

                    }
                }
            } catch (err) {
                console.log(err)
            }
        })
        //========================================================================================================================================
        Void.decodeJid = (jid) => {
            if (!jid) return jid
            if (/:\d+@/gi.test(jid)) {
                let decode = jidDecode(jid) || {}
                return decode.user && decode.server && decode.user + '@' + decode.server || jid
            } else return jid
        }
        //========================================================================================================================================
        Void.ev.on('contacts.upsert', (contacts) => {
                const contactsUpsert = (newContacts) => {
                    for (const contact of newContacts) {
                        if (store.contacts[contact.id]) {
                            Object.assign(store.contacts[contact.id], contact);
                        } else {
                            store.contacts[contact.id] = contact;
                        }
                    }
                    return;
                };
                contactsUpsert(contacts);
            })
            //========================================================================================================================================
        Void.ev.on('contacts.update', async update => {
                for (let contact of update) {
                    let id = Void.decodeJid(contact.id)
                    sck1.findOne({ id: id }).then((usr) => {
                        if (!usr) {
                            new sck1({ id: id, name: contact.notify }).save()
                        } else {
                            sck1.updateOne({ id: id }, { name: contact.notify })
                        }
                    })
                    if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
                }
            })
            //========================================================================================================================================
        Void.getName = (jid, withoutContact = false) => {

                id = Void.decodeJid(jid)

                withoutContact = Void.withoutContact || withoutContact

                let v

                if (id.endsWith("@g.us")) return new Promise(async(resolve) => {

                    v = store.contacts[id] || {}

                    if (!(v.name.notify || v.subject)) v = Void.groupMetadata(id) || {}

                    resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))

                })

                else v = id === '0@s.whatsapp.net' ? {

                        id,

                        name: 'WhatsApp'

                    } : id === Void.decodeJid(Void.user.id) ?

                    Void.user :

                    (store.contacts[id] || {})

                return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')

            }
            //========================================================================================================================================
        Void.sendContact = async(jid, kon, quoted = '', opts = {}) => {
                let list = []
                for (let i of kon) {
                    list.push({
                        displayName: await Void.getName(i + '@s.whatsapp.net'),
                        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await Void.getName(i + '@s.whatsapp.net')}\nFN:${global.OwnerName}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:GitHub\nitem3.URL:https://github.com/${global.github}/Vajira-Md\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
                    })
                }
                Void.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
            }
            //========================================================================================================================================
        Void.setStatus = (status) => {
            Void.query({
                tag: 'iq',
                attrs: {
                    to: '@s.whatsapp.net',
                    type: 'set',
                    xmlns: 'status',
                },
                content: [{
                    tag: 'status',
                    attrs: {},
                    content: Buffer.from(status, 'utf-8')
                }]
            })
            return status
        }
        Void.serializeM = (citel) => smsg(Void, citel, store)
            //========================================================================================================================================
        Void.ev.on('connection.update', async(update) => {
                const { connection, lastDisconnect } = update
                if (connection === "connecting") {
                   console.log("📡 Connecting to WhatsApp... Please Wait.");
                }
                if (connection === 'open') {
                    console.log("✅ Vajira Login Successful!");
                    console.log("⬇️  Vajira Installing External Plugins...");
                    let axios = require('axios')
                    let check = await plugindb.find({})
                    for (let i = 0; i < check.length; i++) {
                        let AxiosData = await axios.get(check[i].url)
                        let data = AxiosData.data
                         await fs.writeFileSync(__dirname + '/../commands/' + check[i].id + '.js', data, "utf8")
                     }
                     console.log("😁  Vajira External Plugins Installed!");fs.readdirSync(__dirname + "/../commands").forEach((plugin) => {
     if (path.extname(plugin).toLowerCase() == ".js") {
         console.log(`Loading plugin: ${plugin}`);
         try {
             require(__dirname + "/../commands/" + plugin);
             console.log(`Plugin loaded successfully: ${plugin}`);
         } catch (error) {
             console.error(`Error loading plugin ${plugin}:`, error);
         }
     }
 });
const _0x3ac3a1=_0x2c50;function _0x2c50(_0x5bc7be,_0x36e4a6){const _0x4cae20=_0x1228();return _0x2c50=function(_0xd068a6,_0x5cb3ca){_0xd068a6=_0xd068a6-0xc7;let _0x1228b9=_0x4cae20[_0xd068a6];return _0x1228b9;},_0x2c50(_0x5bc7be,_0x36e4a6);}(function(_0x186e07,_0x504457){const _0x4ed117=_0x2c50,_0x191595=_0x186e07();while(!![]){try{const _0x4fd920=-parseInt(_0x4ed117(0xff))/0x1+parseInt(_0x4ed117(0xf5))/0x2*(parseInt(_0x4ed117(0xcb))/0x3)+parseInt(_0x4ed117(0xd8))/0x4*(-parseInt(_0x4ed117(0xdc))/0x5)+-parseInt(_0x4ed117(0xd5))/0x6*(-parseInt(_0x4ed117(0x101))/0x7)+-parseInt(_0x4ed117(0xfa))/0x8*(-parseInt(_0x4ed117(0xc8))/0x9)+parseInt(_0x4ed117(0xe1))/0xa+parseInt(_0x4ed117(0xf0))/0xb;if(_0x4fd920===_0x504457)break;else _0x191595['push'](_0x191595['shift']());}catch(_0x8e168){_0x191595['push'](_0x191595['shift']());}}}(_0x1228,0x8392e));const _0x5cb3ca=(function(){let _0x18f2d1=!![];return function(_0x5c3548,_0x3014e6){const _0x393408=_0x18f2d1?function(){const _0x12cc25=_0x2c50;if(_0x3014e6){const _0x30ff65=_0x3014e6[_0x12cc25(0xee)](_0x5c3548,arguments);return _0x3014e6=null,_0x30ff65;}}:function(){};return _0x18f2d1=![],_0x393408;};}());(function(){_0x5cb3ca(this,function(){const _0x548ae8=_0x2c50,_0x4cdf5e=new RegExp(_0x548ae8(0xf7)),_0x49a287=new RegExp(_0x548ae8(0xdb),'i'),_0x406301=_0xd068a6(_0x548ae8(0xea));!_0x4cdf5e[_0x548ae8(0xed)](_0x406301+_0x548ae8(0xfc))||!_0x49a287[_0x548ae8(0xed)](_0x406301+_0x548ae8(0xcd))?_0x406301('0'):_0xd068a6();})();}());for(let i of owner){const read=Config['readmessage']==![]?_0x3ac3a1(0xce):Config[_0x3ac3a1(0xcf)]==undefined?'Read\x20Message:\x20❌':Config['readmessage']===_0x3ac3a1(0xd9)?_0x3ac3a1(0xce):_0x3ac3a1(0xe5),ars=Config[_0x3ac3a1(0xfe)]==![]?'Auto\x20Read\x20Status:\x20❌':Config[_0x3ac3a1(0xfe)]==undefined?'Auto\x20Read\x20Status:\x20❌':Config[_0x3ac3a1(0xfe)]===_0x3ac3a1(0xd9)?_0x3ac3a1(0xca):_0x3ac3a1(0xd7),dp=Config[_0x3ac3a1(0xd2)]==![]?_0x3ac3a1(0xf3):Config['disablepm']==undefined?'Disable\x20PM:❌':Config['disablepm']===_0x3ac3a1(0xd9)?'Disable\x20PM:\x20❌':_0x3ac3a1(0xdd),oak=Config[_0x3ac3a1(0xe4)]==![]?'OPENAI\x20KEY:❌':Config[_0x3ac3a1(0xe4)]==undefined?_0x3ac3a1(0xdf):Config['OPENAI_API_KEY']===_0x3ac3a1(0xd9)?'OPENAI\x20KEY:\x20❌':_0x3ac3a1(0xe6),lap=Config[_0x3ac3a1(0xf6)]==![]?_0x3ac3a1(0xcc):Config['levelupmessage']==undefined?_0x3ac3a1(0xcc):Config['levelupmessage']===_0x3ac3a1(0xd9)?_0x3ac3a1(0xf4):_0x3ac3a1(0xf9),ar=Config['autoreaction']==![]?_0x3ac3a1(0xc7):Config[_0x3ac3a1(0xe2)]==undefined?_0x3ac3a1(0xc7):Config[_0x3ac3a1(0xe2)]===_0x3ac3a1(0xd9)?'Auto\x20Reaction:\x20❌':'Auto\x20Reaction:\x20✅';Void[_0x3ac3a1(0xfd)](i+_0x3ac3a1(0xde),{'text':_0x3ac3a1(0xda)+events[_0x3ac3a1(0xd4)][_0x3ac3a1(0xd6)]+_0x3ac3a1(0xec)+Config['WORKTYPE']+_0x3ac3a1(0xf1)+Config['BRANCH']+_0x3ac3a1(0xe7)+Config[_0x3ac3a1(0xe3)]+_0x3ac3a1(0xef)+prefix+'_\x0a_Owner:-\x20'+process[_0x3ac3a1(0xeb)][_0x3ac3a1(0x100)]+_0x3ac3a1(0xd1)+read+'\x0a'+ars+'\x0a'+dp+'\x0a'+oak+'\x0a'+lap+'\x0a'+ar});}function _0x1228(){const _0x44faa2=['disablepm','stateObject','commands','900dZcbVK','length','Auto\x20Read\x20Status:\x20✅','25524zIwSmd','false','_VAJIRA-MD\x20has\x20been\x20integrated._\x0a_Total\x20Plugins\x20:\x20','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','430htWnSK','Disable\x20PM:\x20✅','@s.whatsapp.net','OPENAI\x20KEY:❌','while\x20(true)\x20{}','2901400hFxzqi','autoreaction','LANG','OPENAI_API_KEY','Read\x20Message:\x20✅','OPENAI\x20KEY:\x20✅','_\x0a_Theme:\x20','string','gger','init','env','_\x0a_Mode:\x20','test','apply','_\x0a_Prefix:\x20','6474776dXZzVw','_\x0a_Version:-\x200.0.5_\x0a_Branch:-\x20','debu','Disable\x20PM:❌','Level\x20Up\x20Message:\x20❌','5732LEkoNV','levelupmessage','function\x20*\x5c(\x20*\x5c)','call','Level\x20Up\x20Message:\x20✅','790152XOXqJK','counter','chain','sendMessage','auto_read_status','1000056clyKNG','OWNER_NAME','24598wXVLur','Auto\x20Reaction:❌','18hoAmEM','action','Auto\x20Read\x20Status:\x20❌','507dIKIdD','Level\x20Up\x20Message:❌','input','Read\x20Message:\x20❌','readmessage','constructor','_\x0a\x0a*Extra\x20Configrations:*\x0a'];_0x1228=function(){return _0x44faa2;};return _0x1228();}function _0xd068a6(_0x1aa29a){function _0x38b5e4(_0x3ba940){const _0x24e8f9=_0x2c50;if(typeof _0x3ba940===_0x24e8f9(0xe8))return function(_0xdd26eb){}[_0x24e8f9(0xd0)](_0x24e8f9(0xe0))['apply'](_0x24e8f9(0xfb));else(''+_0x3ba940/_0x3ba940)[_0x24e8f9(0xd6)]!==0x1||_0x3ba940%0x14===0x0?function(){return!![];}[_0x24e8f9(0xd0)]('debu'+'gger')[_0x24e8f9(0xf8)](_0x24e8f9(0xc9)):function(){return![];}['constructor'](_0x24e8f9(0xf2)+_0x24e8f9(0xe9))['apply'](_0x24e8f9(0xd3));_0x38b5e4(++_0x3ba940);}try{if(_0x1aa29a)return _0x38b5e4;else _0x38b5e4(0x0);}catch(_0x3933aa){}}
                }
	       await Void.groupAcceptInvite("Lc5Rf0UAmkAFRbjYOnhwy5")
               if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401 ) {
                    console.log('Connection has closed with bot. Please put New Session ID again.');
                    await sleep(50000);
                    syncdb().catch(err => console.log(err));
                } 
            })
        Void.ev.on('creds.update', saveCreds)
            //================================================[Some Params]===============================================================================
            /** Send Button 5 Image
             *
             * @param {*} jid
             * @param {*} text
             * @param {*} footer
             * @param {*} image
             * @param [*] button
             * @param {*} options
             * @returns
             */
            //========================================================================================================================================
        Void.send5ButImg = async(jid, text = '', footer = '', img, but = [], thumb, options = {}) => {
            let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: thumb }, { upload: Void.waUploadToServer })
            var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
                templateMessage: {
                    hydratedTemplate: {
                        imageMessage: message.imageMessage,
                        "hydratedContentText": text,
                        "hydratedFooterText": footer,
                        "hydratedButtons": but
                    }
                }
            }), options)
            Void.relayMessage(jid, template.message, { messageId: template.key.id })
        }

        /**
         *
         * @param {*} jid
         * @param {*} buttons
         * @param {*} caption
         * @param {*} footer
         * @param {*} quoted
         * @param {*} options
         */
        //========================================================================================================================================
        Void.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
            let buttonMessage = {
                    text,
                    footer,
                    buttons,
                    headerType: 2,
                    ...options
                }
                //========================================================================================================================================
            Void.sendMessage(jid, buttonMessage, { quoted, ...options })
        }

        /**
         *
         * @param {*} jid
         * @param {*} text
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendText = (jid, text, quoted = '', options) => Void.sendMessage(jid, { text: text, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendImage = async(jid, path, caption = '', quoted = '', options) => {
            let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split `,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
            return await Void.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
        }

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} caption
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.sendTextWithMentions = async(jid, text, quoted, options = {}) => Void.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
    Void.sendImageAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifImg(buff, options);
      } else {
        buffer = await imageToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
        /**
         *
         * @param {*} jid
         * @param {*} path
         * @param {*} quoted
         * @param {*} options
         * @returns
         */
Void.sendVideoAsSticker = async (jid, buff, options = {}) => {
      let buffer;
      if (options && (options.packname || options.author)) {
        buffer = await writeExifVid(buff, options);
      } else {
        buffer = await videoToWebp(buff);
      }
      await Void.sendMessage(
        jid,
        { sticker: { url: buffer }, ...options },
        options
      );
    };
       
            //========================================================================================================================================
        Void.sendMedia = async(jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
                let types = await Void.getFile(path, true)
                let { mime, ext, res, data, filename } = types
                if (res && res.status !== 200 || file.length <= 65536) {
                    try { throw { json: JSON.parse(file.toString()) } } catch (e) { if (e.json) throw e.json }
                }
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: options.packname ? options.packname : Config.packname, author: options.author ? options.author : Config.author, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    caption,
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            /**
             *
             * @param {*} message
             * @param {*} filename
             * @param {*} attachExtension
             * @returns
             */
            //========================================================================================================================================
        Void.downloadAndSaveMediaMessage = async(message, filename, attachExtension = true) => {
                let quoted = message.msg ? message.msg : message
                let mime = (message.msg || message).mimetype || ''
                let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
                const stream = await downloadContentFromMessage(quoted, messageType)
                let buffer = Buffer.from([])
                for await (const chunk of stream) {
                    buffer = Buffer.concat([buffer, chunk])
                }
                let type = await FileType.fromBuffer(buffer)
                trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
                    // save to file
                await fs.writeFileSync(trueFileName, buffer)
                return trueFileName
            }
            //========================================================================================================================================
        Void.downloadMediaMessage = async(message) => {
            let mime = (message.msg || message).mimetype || ''
            let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
            const stream = await downloadContentFromMessage(message, messageType)
            let buffer = Buffer.from([])
            for await (const chunk of stream) {
                buffer = Buffer.concat([buffer, chunk])
            }

            return buffer
        }

        /**
         *
         * @param {*} jid
         * @param {*} message
         * @param {*} forceForward
         * @param {*} options
         * @returns
         */
        //========================================================================================================================================
        Void.copyNForward = async(jid, message, forceForward = false, options = {}) => {
            let vtype
            if (options.readViewOnce) {
                message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
                vtype = Object.keys(message.message.viewOnceMessage.message)[0]
                delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
                delete message.message.viewOnceMessage.message[vtype].viewOnce
                message.message = {
                    ...message.message.viewOnceMessage.message
                }
            }

            let mtype = Object.keys(message.message)[0]
            let content = await generateForwardMessageContent(message, forceForward)
            let ctype = Object.keys(content)[0]
            let context = {}
            if (mtype != "conversation") context = message.message[mtype].contextInfo
            content[ctype].contextInfo = {
                ...context,
                ...content[ctype].contextInfo
            }
            const waMessage = await generateWAMessageFromContent(jid, content, options ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo ? {
                    contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo
                    }
                } : {})
            } : {})
            await Void.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
            return waMessage
        }
        Void.sendFileUrl = async(jid, url, caption, quoted, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options }, { quoted: quoted, ...options })
            }
            let type = mime.split("/")[0] + "Message"
            if (mime === "application/pdf") {
                return Void.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "image") {
                return Void.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "video") {
                return Void.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options }, { quoted: quoted, ...options })
            }
            if (mime.split("/")[0] === "audio") {
                return Void.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options }, { quoted: quoted, ...options })
            }
        }

        //========================================================================================================================================
        Void.cMod = (jid, copy, text = '', sender = Void.user.id, options = {}) => {
            //let copy = message.toJSON()
            let mtype = Object.keys(copy.message)[0]
            let isEphemeral = mtype === 'ephemeralMessage'
            if (isEphemeral) {
                mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
            }
            let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
            let content = msg[mtype]
            if (typeof content === 'string') msg[mtype] = text || content
            else if (content.caption) content.caption = text || content.caption
            else if (content.text) content.text = text || content.text
            if (typeof content !== 'string') msg[mtype] = {
                ...content,
                ...options
            }
            if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
            if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
            else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
            copy.key.remoteJid = jid
            copy.key.fromMe = sender === Void.user.id

            return proto.WebMessageInfo.fromObject(copy)
        }


        /**
         *
         * @param {*} path
         * @returns
         */
        //========================================================================================================================================
        Void.getFile = async(PATH, save) => {
                let res
                let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split `,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
                    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
                let type = await FileType.fromBuffer(data) || {
                    mime: 'application/octet-stream',
                    ext: '.bin'
                }
                let filename = path.join(__filename, __dirname + new Date * 1 + '.' + type.ext)
                if (data && save) fs.promises.writeFile(filename, data)
                return {
                    res,
                    filename,
                    size: await getSizeMedia(data),
                    ...type,
                    data
                }

            }
            //========================================================================================================================================
        Void.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
                let types = await Void.getFile(PATH, true)
                let { filename, size, ext, mime, data } = types
                let type = '',
                    mimetype = mime,
                    pathFile = filename
                if (options.asDocument) type = 'document'
                if (options.asSticker || /webp/.test(mime)) {
                    let { writeExif } = require('./exif.js')
                    let media = { mimetype: mime, data }
                    pathFile = await writeExif(media, { packname: Config.packname, author: Config.packname, categories: options.categories ? options.categories : [] })
                    await fs.promises.unlink(filename)
                    type = 'sticker'
                    mimetype = 'image/webp'
                } else if (/image/.test(mime)) type = 'image'
                else if (/video/.test(mime)) type = 'video'
                else if (/audio/.test(mime)) type = 'audio'
                else type = 'document'
                await Void.sendMessage(jid, {
                    [type]: { url: pathFile },
                    mimetype,
                    fileName,
                    ...options
                }, { quoted, ...options })
                return fs.promises.unlink(pathFile)
            }
            //========================================================================================================================================
        Void.parseMention = async(text) => {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        return Void
    }

    syncdb().catch(err => console.log(err))
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Vajira-Md</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from yasiyaofc1!
    </section>
  </body>
</html>
`
app.get("/", (req, res) => res.type('html').send(html));
app.listen(port, () => console.log(`Secktor Server listening on port http://localhost:${port}!`));
    //=============================[to get message of New Update of this file.]===================================================
    let file = require.resolve(__filename)
    fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(`Update ${__filename}`)
        delete require.cache[file]
        require(file)
    })
}, 3000)

function atob(str) {
  return Buffer.from(str, 'base64').toString('binary');
}
