let { MessageType } = (await import(global.baileys)).default
let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
conn.reply(m.chat, `${IDexotic.rsExito}`, m)
global.db.data.users[m.sender].limit = Infinity
global.db.data.users[m.sender].level = Infinity
global.db.data.users[m.sender].money = Infinity
}
handler.help = ['rol']
handler.tags = ['rols']
handler.command = /^(exoticgod|ilimitado)$/i
handler.rowner = true
handler.fail = null
export default handler
