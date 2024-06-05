import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙚𝙡 𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} Galaxias`
try {
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
conn.sendButton(m.chat, `• 🌌 𝙁𝙊𝙉𝘿𝙊 𝘿𝙀 𝙋𝘼𝙉𝙏𝘼𝙇𝙇𝘼 🌌 •`, `𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿`, img, [['𝙊𝙩𝙧𝙤 🌅', `${usedPrefix + command} ${text}`], ['𝙈𝙞 𝙄𝙣𝙛𝙤 ☁️', `#minfo`]], null, null, fkontak)
} catch (e) {
await conn.reply(m.chat, `${errorAB}`, m)
console.log(`${errorBB}`)
console.log(e)
handler.limit = false
}}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.register = false
export default handler 