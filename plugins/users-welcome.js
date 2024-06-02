let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
conn.reply(m.chat, '᥀·࣭࣪̇˖🪐◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙡𝙖 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.', fkontak, m)
} else throw `᥀·࣭࣪̇˖🪐◗ 𝙇𝙖 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖 𝙝𝙖 𝙨𝙞𝙙𝙤 𝙢𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`
}
handler.command = ['setwelcome', 'bienvenida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
