import util from 'util'
import path from 'path'

async function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {

let user = a => '@' + a.split('@')[0]
if (!text) throw `᥀·࣭࣪̇˖🎮◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} Exotico`
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let k = Math.floor(Math.random() * 70)
let vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`
let top = `᥀·࣭࣪̇˖✅◗ 𝙂𝘼𝙉𝘼𝙎𝙏𝙀!!!\n\n𝘜𝘚𝘜𝘈𝘙𝘐𝘖: ${user(a)}\n𝘨𝘢𝘯𝘢𝘴𝘵𝘦 𝘦𝘭 𝘴𝘰𝘳𝘵𝘦𝘰!!! ✨`
let txt = ''
let count = 0
for (const c of top) {
await new Promise(resolve => setTimeout(resolve, 15))
txt += c
count++

if (count % 10 === 0) {
conn.sendPresenceUpdate('composing' , m.chat);
}
}
await conn.sendMessage(m.chat, { text: txt.trim(), mentions: conn.parseMention(txt) }, {quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100} )

}
handler.help = ['sorteo']
handler.command = ['sorteo']
handler.tags = ['fun']
handler.group = true

export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}