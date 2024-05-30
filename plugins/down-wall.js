import { wallpaper } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${IDexotic.faltaTexto}\n\n*${usedPrefix + command} Exotico Galaxy`
try {
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
conn.sendButton(m.chat, `${IDexotic.rsExito}\n`, `${IDexotic.botInfo}`, img, [
[IDexotic.botonSiguiente, `${usedPrefix + command} ${text}`],
[IDexotic.botonDonar, `#donar`],
[IDexotic.botonMasB, `#msearch`]], null, null, fkontak)
} catch (e) {
await conn.reply(m.chat, `${IDexotic.ErrorA}`, m)
console.log(`${IDexotic.ErrorB}`)
console.log(e)
handler.limit = false
}}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.register = true
export default handler 