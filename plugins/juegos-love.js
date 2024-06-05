let handler = async(m, { conn, text, usedPrefix, command }) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
const pp = 'https://telegra.ph/file/708d83423d13fcd16dace.jpg'

let love = `᥀·࣭࣪̇˖💖◗ 𝙀𝙡 𝙖𝙢𝙤𝙧 𝙙𝙚 ${name} 𝙦𝙪𝙚 𝙨𝙞𝙚𝙣𝙩𝙚 𝙥𝙤𝙧 𝙩𝙞 𝙚𝙨: *${Math.floor(Math.random() * 100)}%* 𝙙𝙚 𝙪𝙣 *100%*`

conn.sendMessage(m.chat, {text: love, mentions: [m.sender]}, {quoted: m})

}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(love|amor|Love)$/i

handler.register = true

export default handler