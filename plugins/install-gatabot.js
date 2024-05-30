let handler = async (m, { conn, command, usedPrefix }) => {
let pp = imagenRB
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `
💖✨🐱 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝙂𝘼𝙏𝘼𝘽𝙊𝙏 🐱✨💖

• 𝘗𝘳𝘪𝘮𝘦𝘳 𝘱𝘢𝘴𝘰:
𝘋𝘦𝘴𝘤𝘢𝘳𝘨𝘢𝘳 𝘵𝘦𝘳𝘮𝘶𝘹.
𝘱𝘶𝘭𝘴𝘦 𝘦𝘯 𝘦𝘭 𝘣𝘰𝘵𝘰𝘯 𝘥𝘦 𝙏𝙚𝙧𝙢𝙪𝙭

• 𝘚𝘦𝘨𝘶𝘯𝘥𝘰 𝘱𝘢𝘴𝘰:
𝘤𝘰𝘱𝘪𝘢𝘳 𝘰 𝘦𝘴𝘤𝘳𝘪𝘣𝘪𝘳 𝘦𝘴𝘵𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰
𝘦𝘯 𝘵𝘦𝘳𝘮𝘶𝘹.
━━━━━━━━━━━━━━━
termux-setup-storage

apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn

git clone https://github.com/GataNina-Li/GataBot-MD && cd GataBot-MD

yarn install && npm install

npm start
━━━━━━━━━━━━━━━
Pega los comandos uno
por uno, no todo junto al
mismo tiempo.`
await conn.sendButton(m.chat, estado, IDexotic.botInfo, pp, [
[IDexotic.botonInfoA, '.minfo']], null, [
['Termux', `${mycanal}`]], m)
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
