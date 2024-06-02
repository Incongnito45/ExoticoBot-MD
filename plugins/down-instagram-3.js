let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} lol_human*`
try {
await m.reply(global.wait)    
const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`)
var anu = await res.json()
var anuku = anu.result
if (anuku == '') return m.reply(`𝘽𝙪𝙨𝙘𝙖𝙣𝙙𝙤...`)  
for (var i of anuku) {
let res = await axios.head(i)
let mime = res.headers['content-type'] 
if (/image/.test(mime)) await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => { return m.reply(`᥀·࣭࣪̇˖🚫◗ 𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙡𝙖 𝙞𝙢𝙖𝙜𝙚𝙣.`)})
if (/video/.test(mime)) await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => { return m.reply(`᥀·࣭࣪̇˖🚫◗ 𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤.`)})
conn.reply(m.chat, `${packname}`, m, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: '𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙙𝙤𝙧 𝙙𝙚 𝙝𝙞𝙨𝙩𝙤𝙧𝙞𝙖𝙨 𝙞𝙜', body: wm,          previewType: 0, thumbnail: imagenRB, sourceUrl: exoticoAll}}})
}} catch (e) {
await conn.reply(m.chat, `${errorAB}`, m)
console.log(`${errorBB}`)
console.log(e)
handler.limit = false
}}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.register = true
export default handler