let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
conn.reply(m.chat, IDexotic.grupoWelA, fkontak, m)
} else throw `${IDexotic.grupoWelB}`
}
handler.command = ['setwelcome', 'bienvenida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
