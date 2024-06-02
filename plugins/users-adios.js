let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
conn.reply(m.chat, '᥀·࣭࣪̇˖🪐◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙡𝙖 𝙙𝙚𝙨𝙥𝙚𝙙𝙞𝙙𝙖 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙋𝙪𝙚𝙙𝙚 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙘𝙤𝙣: @user', fkontak, m)  
} else throw `᥀·࣭࣪̇˖✅◗ 𝘿𝙚𝙨𝙥𝙚𝙙𝙞𝙙𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!`
}
handler.command = ['setbye', 'despedida'] 
handler.botAdmin = true
handler.admin = true
handler.group = true
export default handler
