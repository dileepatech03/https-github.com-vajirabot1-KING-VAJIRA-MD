const { tlang, ringtone, cmd,fetchJson, sleep, botpic,ffmpeg, getBuffer, pinterest, prefix, Config } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const {GDriveDl} = require('../lib/scraper.js')
const fbInfoVideo = require('fb-info-video'); 
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const cheerio = require('cheerio')
const fs  = require('fs-extra');
const axios= require('axios');
var videotime = 36000 // 300 min
var dlsize = 1000 // 1000mb



    //---------------------------------------------------------------------------

cmd({
            pattern: "fb2",
            desc: "text to speech.",
            category: "downloader",
            react: "✅",
            filename: __filename,
            use: '<Hii,this is vajira>',
        },
       async(Void, citel, text) => {
           var _0x43ef=["\x72\x65\x70\x6C\x79","\x20","\x73\x70\x6C\x69\x74","","\x63\x68\x61\x74","\x75\x72\x6C","\x72\x65\x73\x75\x6C\x74","\x62\x6F\x74\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65","\x74\x68\x65\x6E","\x66\x61\x63\x65\x62\x6F\x6F\x6B\x64\x6C\x76\x32","\x45\x72\x72\x6F\x72\x20\x77\x68\x69\x6C\x65\x20\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x69\x6E\x67\x20\x79\x6F\x75\x72\x20\x72\x65\x71\x75\x65\x73\x74"];if(!memo){return person[_0x43ef[0]]("\x2A\x5F\x47\x69\x76\x65\x20\x6D\x65\x20\x66\x61\x63\x65\x62\x6F\x6F\x6B\x20\x76\x69\x64\x65\x6F\x20\x6C\x69\x6E\x6B\x5F\x2A")};let txt=memo?memo[_0x43ef[2]](_0x43ef[1])[0]:_0x43ef[3];try{bocil[_0x43ef[10]](memo)[_0x43ef[9]](async (_0x2bacx2)=>{return sigma[_0x43ef[8]](person[_0x43ef[4]],{video:{url:_0x2bacx2[_0x43ef[6]][0][_0x43ef[5]]},caption:("\u2570\u2508\u27A4\x20\uD835\uDE76\uD835\uDE74\uD835\uDE7D\uD835\uDE74\uD835\uDE81\uD835\uDE70\uD835\uDE83\uD835\uDE74\uD835\uDE73\x20\uD835\uDE71\uD835\uDE88\x20"+name[_0x43ef[7]]+_0x43ef[3]),width:550,height:470},{quoted:person})})}catch(e){return person[_0x43ef[0]](_0x43ef[11])}})
   

async function tiktokdl (url) {
    const gettoken = await axios.get("https://tikdown.org/id");
    const $ = cheerio.load(gettoken.data);
    const token = $("#download-form > input[type=hidden]:nth-child(2)").attr("value");
    const param = {
        url: url,
        _token: token,
    };
    const { data } = await axios.request("https://tikdown.org/getAjax?", {
        method: "post",
        data: new URLSearchParams(Object.entries(param)),
        headers: {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
        },
    });
    var getdata = cheerio.load(data.html);
    if (data.status) {
        return {
            status: true,
            thumbnail: getdata("img").attr("src"),
            video: getdata("div.download-links > div:nth-child(1) > a").attr("href"),
            audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"),
        };
    } else return { status: false };
};
