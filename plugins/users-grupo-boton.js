let handler = async (m, { conn, command, usedPrefix }) => {
let pp = menusRB
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let grupobot = `᥀·࣭࣪̇˖🪐◗ 𝙃𝙤𝙡𝙖 ${name} ✨`
await conn.sendButton(m.chat, grupobot, '• 𝙎𝙚𝙡𝙚𝙘𝙘𝙞𝙤𝙣𝙖 𝙡𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙘𝙞𝙤𝙣.', pp, [
['𝘼𝙗𝙧𝙞𝙧 ✅', '.egrupo abrir'],
['𝘾𝙚𝙧𝙧𝙖𝙧 ❌', '#egrupo cerrar']], null, null, m)
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(grupo|group)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}