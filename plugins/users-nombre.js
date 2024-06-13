let Presence = (await import(global.baileys)).default
let handler  = async (m, { conn, args, text }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
if (!text) return conn.reply(m.chat, '᥀·࣭࣪̇˖🪐◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n\n ' + usedPrefix + ` MultiBot-OFC`, fkontak, m)
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
conn.reply(m.chat, '᥀·࣭࣪̇˖✅◗ 𝙉𝙊𝙈𝘽𝙍𝙀 𝙂𝙍𝙐𝙋𝘼𝙇 𝘾𝙊𝙉𝙁𝙄𝙂𝙐𝙍𝘼𝘿𝙊 𝘾𝙊𝙉 𝙀𝙓𝙄𝙏𝙊!!!', fkontak, m)
} catch (e) { 
throw `᥀·࣭࣪̇˖🚫◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`;
}}
handler.command = /^(setname|newnombre|nuevonombre)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler 
