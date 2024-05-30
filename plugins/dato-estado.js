let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagenRB
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `😃👋🏻 𝙃𝙤𝙡𝙖 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖: ${name}
𝙚𝙨𝙩𝙖 𝙚𝙨 𝙡𝙖 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙙𝙚𝙡 𝙗𝙤𝙩: ${vs}

𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩:
${wm}`
await conn.sendButton(m.chat, estado, IDexotic.botInfo, pp, [
[IDexotic.botonInfoA, '.minfo'],
[IDexotic.botonWork, '/work'],
[IDexotic.botonDonar, '#donar']], null, [
[IDexotic.fBotonCanal, `${mycanal}`]], m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|heygata|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
