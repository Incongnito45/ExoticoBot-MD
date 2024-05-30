let Presence = (await import(global.baileys)).default
let handler  = async (m, { conn, args, text }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
if (!text) return conn.reply(m.chat, IDexotic.faltaTexto + usedPrefix + ` MultiBot-OFC`, fkontak, m)
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
conn.reply(m.chat, IDexotic.rsExito, fkontak, m)
} catch (e) { 
throw IDexotic.ErrorB
}}
handler.command = /^(setname|newnombre|nuevonombre)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler 
