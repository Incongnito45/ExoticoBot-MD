let handler = async (m, { conn, command, text }) => {
if (!text) throw `᥀·࣭࣪̇˖👺◗ 𝙈𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖 𝙪𝙣𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖 𝙤 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
conn.reply(m.chat, `
*𝙏𝙚 𝙖𝙘𝙖𝙗𝙖𝙨 𝙙𝙚 𝙛𝙤𝙡𝙡𝙖𝙧 𝙖 *${text}* 

••••••••••••••••

*${text}* 
𝙏𝙚 𝙝𝙖𝙣 𝙫𝙞𝙤𝙡𝙖𝙙𝙤 :𝙫`, null, { mentions: [user] })
}

handler.command = /^(Follar|violar)/i
handler.fail = null
handler.register = true
export default handler
