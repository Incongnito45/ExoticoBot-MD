/*let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`᥀·࣭࣪̇˖🎒◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ire a trabajar`)
  
if (text.length < 10) return m.reply(`᥀·࣭࣪̇˖⚙️◗ 𝙀𝙡 𝙩𝙚𝙭𝙩𝙤 𝙚𝙨 𝙙𝙚𝙢𝙖𝙨𝙞𝙖𝙙𝙤 𝙘𝙤𝙧𝙩𝙤, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙙𝙚 𝙖𝙡 𝙢𝙚𝙣𝙤𝙨 10 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨.`)
user.afk = + new Date
user.afkReason = text
await conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 *@${m.sender.split("@")[0]}* 𝙚𝙨𝙩𝙖𝙧𝙖 𝙞𝙣𝙖𝙘𝙩𝙞𝙫𝙤, 𝙣𝙤 𝙡𝙤 𝙚𝙩𝙞𝙦𝙪𝙚𝙩𝙚.

`, m, { mentions: [m.sender] })
}

handler.command = /^afk$/i
handler.register = true
export default handler
*/