let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let d = `${IDexotic.Usuario}
• ${name}

Diamantes:
*${global.db.data.users[who].limit}`
conn.sendButton(m.chat, d, wm, null, [
[IDexotic.botonRegalo, '#claim'],
[IDexotic.botonMinarA, '.minar']
], null, null, m)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
