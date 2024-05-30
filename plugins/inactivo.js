let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`${IDexotic.faltaTexto} ire a trabajar`)
  
if (text.length < 10) return m.reply(`${IDexotic.faltaTextoB}`)
user.afk = + new Date
user.afkReason = text
await conn.reply(m.chat, `${IDexotic.afkB} *@${m.sender.split("@")[0]}*
${IDexotic.afkC}${text ? '\n\n' + IDexotic.afkD + text : IDexotic.aMotivo}`, m, { mentions: [m.sender] })
}

handler.command = /^afk$/i
handler.register = true
export default handler
