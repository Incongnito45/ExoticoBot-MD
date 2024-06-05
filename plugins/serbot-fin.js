let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, IDexotic.sesionSubBot, m)
else {
await conn.reply(m.chat, '〘✅〙𝙎𝙪𝙗𝘽𝙤𝙩 𝙖𝙥𝙖𝙜𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.\n\n• 𝙐𝙨𝙖 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: _#esubbot_\n𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙘𝙤𝙣𝙚𝙘𝙩𝙖𝙧𝙩𝙚.', m)
conn.ws.close()}}
handler.command = /^(berhenti|pausarsub|pausarbot)$/i
handler.owner = true  
handler.fail = null
export default handler
