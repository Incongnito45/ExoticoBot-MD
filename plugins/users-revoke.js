let handler = async (m, { conn }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 

let res = await conn.groupRevokeInvite(m.chat)
conn.reply(m.chat, IDexotic.linkGrupo, + '\n\n*https://chat.whatsapp.com/' + res + '*', fkontak, m)}
handler.command = ['nuevolink', 'nuevoenlace', 'revoke', 'resetlink'] 
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
