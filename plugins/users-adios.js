let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
conn.reply(m.chat, IDexotic.grupoByeA, fkontak, m)  
} else throw `${IDexotic.grupoByeB}`
}
handler.command = ['setbye', 'despedida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
