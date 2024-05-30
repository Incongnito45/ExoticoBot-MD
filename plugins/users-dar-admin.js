let handler = async (m, { conn,usedPrefix, command, text }) => {
if(isNaN(text) && !text.match(/@/g)){

}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `${IDexotic.respoUser2}\n\n${IDexotic.porEjemplo}\n*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `${IDexotic.respoUser2}\n\n${IDexotic.porEjemplo}\n*${usedPrefix + command} @${global.owner[0][0]}*`, fkontak, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} } catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, IDexotic.rsExito, fkontak, m)
}}
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler 
