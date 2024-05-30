let handler  = async (m, { conn }) => {
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, IDexotic.sesionSubBot, m)
else {
await conn.reply(m.chat, IDexotic.noSubBot, m)
conn.ws.close()}}
handler.command = /^(berhenti|stop|detener)$/i
handler.owner = true  
handler.fail = null
export default handler
