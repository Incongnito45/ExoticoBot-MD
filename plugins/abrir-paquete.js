let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `Failed.... Again.`
let img = 'https://img.freepik.com/vector-gratis/cofre-monedas-oro-piedras-preciosas-cristales-trofeo_107791-7769.jpg?w=2000'
let diamantes = Math.floor(Math.random() * 30)
let tokbot = Math.floor(Math.random() * 10)
let exotico = Math.floor(Math.random() * 4000)
let expp = Math.floor(Math.random() * 5000)
let exocoins = Math.floor(Math.random() * 50)
global.db.data.users[m.sender].limit += diamantes
global.db.data.users[m.sender].money += exotico
global.db.data.users[m.sender].joincount += tokbot
global.db.data.users[m.sender].exp += expp
global.db.data.users[m.sender].exoticocoins += exocoins  
let texto = `꧁『🎊 PAQUETE ABIERTO 🎊』꧂

「☁️」 *${exocoins}* 𝙎𝙚𝙧𝙫𝙚𝙧𝘾𝙤𝙞𝙣𝙨.
•══════════════•
「💰」 *${tokbot}* 𝙏𝙤𝙠𝙚𝙣𝙨.
「💎」 *${diamantes}* 𝘿𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨.
「⭐」 *${expp}* 𝙀𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖.
「🪙」 *${exotico}* 𝘽𝙤𝙩𝘾𝙤𝙞𝙣𝙨.`
const fkontak = {"key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": {"contactMessage": {"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, "participant": "0@s.whatsapp.net"}
await conn.sendButton(m.chat, '⌔ִ𝅄⧉𝅦 𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋 ┃ 𝘔𝘶𝘭𝘵𝘪𝘉𝘰𝘵-𝘔𝘋𝅦 𝆭  𝅦 𝆭 \n•────────────────────•\n', texto, img, [['𝗧𝗜𝗘𝗡𝗗𝗔 𝗘𝗫𝗢𝗧𝗜𝗖𝗢 🏪', '/tiendaexotico']], null, [['𝗖𝗢𝗠𝗣𝗥𝗔𝗥 𝗣𝗔𝗤𝗨𝗘𝗧𝗘 🎁', `https://wa.me/p/7354021068032280/5493873232212`]], fkontak)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['abrirpaquete', 'verpaquete'] 
handler.exoticopaquete = 1
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds
  return hours + " Horas " + minutes + " Minutos"
}
