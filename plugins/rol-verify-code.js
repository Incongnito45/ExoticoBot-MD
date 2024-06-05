import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
await conn.fakeReply(m.chat, sn, '5493873232212@s.whatsapp.net', `⬇️ 𝘾𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 𝙫𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣 ⬇️`, 'status@broadcast')
}
handler.help = ['myns']
handler.tags = ['xp']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler
