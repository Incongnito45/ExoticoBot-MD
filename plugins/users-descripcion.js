let handler = async (m, { conn, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
conn.reply(m.chat, IDexotic.grupoDescA, fkontak, m)
}
handler.command = /^setdesk|setdesc|newdesc|descripción|descripcion$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
