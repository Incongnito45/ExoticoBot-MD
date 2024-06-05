let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `Vuelva en ${timers.toTimeString()}`
//SOLO ES PARA OWNERS 
let img = imagenRB
let dia = Math.floor(Math.random() * 50000)
let servercoins = Math.floor(Math.random() * 50000)
let servidor = Math.floor(Math.random() * 50000)
let paquetes = Math.floor(Math.random() * 50000)
let tok = Math.floor(Math.random() * 50000)
let exotico = Math.floor(Math.random() * 50000)
let expp = Math.floor(Math.random() * 50000)

global.db.data.users[m.sender].limit += dia
global.db.data.users[m.sender].exoticocoins += servercoins
global.db.data.users[m.sender].exoticoserver += servidor
global.db.data.users[m.sender].exoticopaquete += paquetes
global.db.data.users[m.sender].money += exotico
global.db.data.users[m.sender].joincount += tok
global.db.data.users[m.sender].exp += expp
  
let texto = `
*💎: ${dia}*
*🪙: ${tok}*
*💰: ${exotico}*
*⚡: ${expp}*

_ESPECIAL:_

*☁️: ${servercoins}*
*💻: ${servidor}*
*🎁: ${paquetes}*`
const fkontak = { "key": {"participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo"}, "message": {"contactMessage": {"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, "participant": "0@s.whatsapp.net"}
await conn.sendButton(m.chat, texto, wm, img, [['Mi info', '/minfo']], null, null, fkontak)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['exoticobot']
handler.tags = ['owner']
handler.command = ['owneregalo', 'recursosowner', 'exowner'] 
handler.level = 1
handler.rowner = true
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
