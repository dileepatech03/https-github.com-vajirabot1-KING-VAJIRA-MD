const { tlang,cmd } = require('../lib')
const Config = require('../config')
const axios = require('axios')
// Put here your url with modified words and urls
const url = 'https://gist.github.com/vajirabot1/8408dce754dc57efaecbdd100ac93ddd/raw'

/**
 cmd({
            pattern: "bgmnsew",
            category: "owner",
            use: '',
        },
**/ 
cmd({ on: "body" }, async(Void, citel) => {
     if (Config.autoreaction === 'true' && citel.text.startsWith(prefix)) {
  let { data } = await axios.get(url)
  for (vr in data){
 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   
}
})
