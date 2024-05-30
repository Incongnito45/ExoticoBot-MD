let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`${IDexotic.banChatA}`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat|banexotic|banchat2$/i
handler.rowner = true
export default handler
