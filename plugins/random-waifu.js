import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${IDexotic.ErrorB}`
conn.sendButton(m.chat, `${command}`, IDexotic.botNombre, json.url, [[IDexotic.botonSiguiente, `/${command}`]], null, null, m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
export default handler