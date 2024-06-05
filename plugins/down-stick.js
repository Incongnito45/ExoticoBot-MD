import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙂𝙚𝙩𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙥𝙖𝙘𝙠.\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} https://getstickerpack.com/stickers/flork-memes-4-1`
try {  
let url = text
let res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': true }}, { quoted: m })
await delay(5000)
}} catch (e) {
await m.reply(errorAB)
console.log(`${errorBB}`)
console.log(e)
handler.limit = false
}}
handler.command = /^stickerpack$/i
handler.limit = 1
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
