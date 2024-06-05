let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 86400000
if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `𝗥𝗲𝗴𝗿𝗲𝘀𝗮 𝗲𝗻: ${timers.toTimeString()}`
let img = imagenRB
let dia = Math.floor(Math.random() * 50)
let tok = Math.floor(Math.random() * 50)
let exotico = Math.floor(Math.random() * 7000)
let expp = Math.floor(Math.random() * 10000)
global.db.data.users[m.sender].limit += dia
global.db.data.users[m.sender].money += exotico
global.db.data.users[m.sender].joincount += tok
global.db.data.users[m.sender].exp += expp
  
let texto = `
🌆 ¡¡¡𝗖𝗢𝗙𝗥𝗘 𝗔𝗕𝗜𝗘𝗥𝗧𝗢!!! 🌆

*💎 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀: ${dia}*
*🪙 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀: ${exotico}*
*⚡𝗫𝗣: ${expp}*
*💰 𝗧𝗼𝗸𝗲𝗻𝘀: ${tok}*`
const fkontak = {
	"key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": { "contactMessage": {"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, "participant": "0@s.whatsapp.net"}
await conn.sendButton(m.chat, texto, wm, img, [['𝗠𝗶 𝗜𝗻𝗳𝗼 🎩', '/minfo']], null, null, fkontak)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['rol']
handler.tags = ['coffe']
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'] 
handler.level = 5
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
