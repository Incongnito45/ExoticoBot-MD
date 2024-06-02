let handler = async (m, { conn, args, text, usedPrefix, command }) => {
let who 
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let name = await conn.getName(m.sender)	
let user = global.db.data.users[who]
if (!global.db.data.settings[conn.user.jid].restrict) return conn.reply(m.chat, `᥀·࣭࣪̇˖🛡️◗ 𝙀𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖𝙨 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`, fkontak, m) 
if (!text) throw `᥀·࣭࣪̇˖🪐◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖 𝙞𝙣𝙫𝙞𝙩𝙖𝙧𝙡𝙤 𝙤 𝙖𝙜𝙧𝙚𝙜𝙖𝙧𝙡𝙤 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command}* +5493873232212`
if (text.includes('+')) throw  `᥀·࣭࣪̇˖🪐◗ 𝙁𝙤𝙧𝙢𝙖𝙩𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙚𝙡 𝙘𝙤𝙙𝙞𝙜𝙤 𝙞𝙣𝙩𝙚𝙧𝙣𝙖𝙘𝙞𝙤𝙣𝙖𝙡 𝙚𝙨 𝙤𝙗𝙡𝙞𝙜𝙖𝙩𝙤𝙧𝙞𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command}* +5493873232212`
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
await conn.reply(text+'@s.whatsapp.net', `᥀·࣭࣪̇˖✨◗ 𝙃𝙤𝙡𝙖𝙖!!, 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙩𝙚 𝙞𝙣𝙫𝙞𝙩𝙤 𝙖 𝙪𝙣 𝙜𝙧𝙪𝙥𝙤!!\n\n• 𝙎𝙤𝙮 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩, 𝙩𝙚 𝙚𝙨𝙩𝙖𝙢𝙤𝙨 𝙚𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤!!! 🪐✨\n\n• ${link}`, m, {mentions: [m.sender]})
m.reply(`*@${who.split`@`[0]}*\nhola`) 
}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(add|agregar|invitar|invite|añadir|\+)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
