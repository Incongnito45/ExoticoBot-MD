import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙩𝙞𝙣𝙩𝙤𝙠 𝙞𝙢𝙜\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} https://vm.tiktok.com/`
if (!(text.includes('http://') || text.includes('https://'))) throw `᥀·࣭࣪̇˖🚫◗ 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙏𝙞𝙠𝙏𝙤𝙠 𝙄𝙈𝙂.`
if (!text.includes('tiktok.com')) throw `᥀·࣭࣪̇˖🔗◗ 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙞𝙢𝙖𝙜𝙚𝙣𝙚𝙨...`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/tiktokslide?apikey=${global.lolkeysapi}&url=${text}`)
let anu = await res.json()
if (anu.status != '200') throw Error(anu.message)
anu = anu.result
if (anu.length == 0) throw Error('Error : no data')
let c = 0 
for (let x of anu) {
if (c == 0) await conn.sendMessage(m.chat, { image: { url: x }, caption: `᥀·࣭࣪̇˖✅◗ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪𝙨 𝙞𝙢𝙖𝙜𝙚𝙣𝙚𝙨!!!` }, { quoted : m })
else await conn.sendMessage(m.sender, { image: { url: x } }, { quoted : m })
c += 1
}
} catch (e) {
await conn.reply(m.chat, `${errorAB}`, fkontak, m)
console.log(`${errorBB}`)
console.log(e)
handler.limit = false
}}
handler.menu = ['tiktokslide <url>']
handler.tags = ['search']
handler.command = /^((tt|tiktok)imagen)$/i
handler.register = false
//handler.level = 0
handler.limit = 1
export default handler
