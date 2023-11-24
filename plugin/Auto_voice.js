/**
//---------------------------------------------------------------------------
██╗░░░██╗░█████╗░░░░░░██╗██╗██████╗░░█████╗░░░░░░███╗░░░███╗██████╗░
██║░░░██║██╔══██╗░░░░░██║██║██╔══██╗██╔══██╗░░░░░████╗░████║██╔══██╗
╚██╗░██╔╝███████║░░░░░██║██║██████╔╝███████║░░░░░██╔████╔██║██║░░██║
░╚████╔╝░██╔══██║██╗░░██║██║██╔══██╗██╔══██║░░░░░██║╚██╔╝██║██║░░██║
░░╚██╔╝░░██║░░██║╚█████╔╝██║██║░░██║██║░░██║░░░░░██║░╚═╝░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░
//---------------------------------------------------------------------------
**/

const { tlang } = require('../lib')

const Config = require('../config')

const axios = require('axios')

// Put here your url with modified words and urls

const url = 'https://gist.githubusercontent.com/vajirabot1/e85975bede499a66c13e8a14bb688309/raw'//url කියන තැනට ඔයාගෙ voice send ek link ek dhenn



cmd({ on: "body" }, async (Void,citel,text)=> {

 if (Config.autovoice === 'true' && citel.text.startsWith(prefix));

  let { data } = await axios.get(url)

  for (vr in data){

 if((new RegExp(`\\b${vr}\\b`,'gi')).test(citel.text)) return Void.sendMessage(citel.chat,{audio: { url : data[vr]},mimetype: 'audio/mpeg',ptt:true},{quoted:citel})   

}

})
