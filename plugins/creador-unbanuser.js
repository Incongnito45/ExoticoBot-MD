let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) throw `${IDexotic.respoUser2}\n\n${IDexotic.porEjemplo}\n*${usedPrefix + command} @${global.owner[0][0]}*`
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${IDexotic.respoUser2}\n\n${IDexotic.porEjemplo}\n*${usedPrefix + command} @${global.owner[0][0]}*`
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `${IDexotic.banUserB}`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.group = true
handler.admin = true 
export default handler
