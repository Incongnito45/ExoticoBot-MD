let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `${IDexotic.Restrict}`, fkontak, m) 
if (!text) throw `${IDexotic.respoUser2}\n\n${IDexotic.porEjemplo}\n*${usedPrefix + command}* 549383838`
if (text.includes('+')) throw  `${IDexotic.respoUser2}\n\n${IDexotic.porEjemplo}\n*${usedPrefix + command}* 8373727372`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.reply(text+'@s.whatsapp.net', `Te esperamos\n\n${link}`, m, {mentions: [m.sender]})
m.reply(`*@${who.split`@`[0]}*\nhola`) 
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
