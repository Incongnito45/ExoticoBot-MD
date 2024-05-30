import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {

let texto = `${IDexotic.respoMensaje}`
	
if (!m.quoted) return await conn.reply(m.chat, texto, m)
try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}
handler.help = ['delete']
handler.tags = ['group']
handler.command = /^(eliminar|del(ete)?)$/i

handler.group = false
handler.admin = true
handler.botAdmin = true

export default handler
