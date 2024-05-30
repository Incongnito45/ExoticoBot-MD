const handler = async (m) => {
m.reply(`${IDexotic.banChatB}`)
global.db.data.chats[m.chat].isBanned = false 
}
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.botAdmin = true
handler.admin = true
export default handler;
