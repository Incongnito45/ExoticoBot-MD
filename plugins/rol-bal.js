let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let d = `𝗡𝗢𝗠𝗕𝗥𝗘:
• ${name}

𝗗𝗜𝗔𝗠𝗔𝗡𝗧𝗘𝗦:
*${global.db.data.users[who].limit}`
conn.sendButton(m.chat, d, wm, null, [
['𝙈𝙞𝙣𝙖𝙧 ⛏️', '#minar'],
['𝙈𝙞 𝙄𝙣𝙛𝙤 🎩', '.minfo']
], null, null, m)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
export default handler
