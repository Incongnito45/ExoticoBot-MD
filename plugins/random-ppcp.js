import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=9b817532fadff8fc7cb86862')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'Chica', IDexotic.botInfo, json.result.female, [[IDexotic.botonSiguiente, `/${command}`]], null, null, m)
conn.sendButton(m.chat, 'Chico', IDexotic.botInfo, json.result.male, [[IDexotic.botonSiguiente, `/${command}`]], null, null, m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple|compartirperfil|compartirfoto)$/i
export default handler