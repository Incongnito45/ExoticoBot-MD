import fetch from 'node-fetch'
  let handler = async (m, { conn, args, text, command, usedPrefix }) => {
 if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣 𝙏𝙞𝙠𝙏𝙤𝙠.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Lol_Human*`
  try {
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
await conn.sendFile(m.chat, res, 'error.jpg', `🪐 𝙀𝙍𝙍𝙊𝙍 🪐`, m, false)
 conn.reply(m.chat, `${packname}`, m, {
  contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: '𝙁𝙤𝙩𝙤 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙙𝙚 𝙩𝙞𝙠𝙩𝙤𝙠', body: wm, previewType: 0, thumbnail: imagenRB, sourceUrl: exoticoAll}}}) 
} catch (e) {
await conn.reply(m.chat, `${errorAB}`, m)
 console.log(`${errorBB}`)
  console.log(e)
   handler.limit = false
}}
handler.help = ['tiktokfoto'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(tiktokfoto|tiktokphoto)$/i
handler.limit = 1
handler.register = true
export default handler