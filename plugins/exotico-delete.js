import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let texto = `᥀·࣭࣪̇˖⚙️◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙙𝙚 𝙖𝙡𝙜𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙨𝙪 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.`
if (!m.quoted) return await conn.reply(m.chat, texto, m)
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
}
catch { return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })}}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^(eliminar|del(ete)?)$/i
handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler
