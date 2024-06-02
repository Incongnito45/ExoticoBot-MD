let { MessageType } = (await import(global.baileys)).default
let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender]
conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝙏𝙪𝙨 𝙧𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙞𝙡𝙞𝙢𝙞𝙩𝙖𝙙𝙤𝙨, 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙖 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m)
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
