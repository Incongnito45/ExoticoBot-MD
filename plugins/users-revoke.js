let handler = async (m, { conn }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 

let res = await conn.groupRevokeInvite(m.chat)
conn.reply(m.chat, '᥀·࣭࣪̇˖🪐◗ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙚𝙡 𝙣𝙪𝙚𝙫𝙤 𝙚𝙣𝙡𝙖𝙘𝙚 𝙧𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙞𝙙𝙤!!!', + '\n\n*https://chat.whatsapp.com/' + res + '*', fkontak, m)}
handler.command = ['nuevolink', 'nuevoenlace', 'revoke', 'resetlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
