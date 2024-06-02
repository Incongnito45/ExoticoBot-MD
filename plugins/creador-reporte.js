let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `᥀·࣭࣪̇˖💎◗ 𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙚𝙧𝙧𝙤𝙧 𝙥𝙖𝙧𝙖 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙧𝙡𝙤 𝙖 𝙡𝙤𝙨 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} hola desarrolladores del bot, el comando #infobot no funciona.`
if (text.length < 8) throw `᥀·࣭࣪̇˖❕◗ 𝙀𝙡 𝙩𝙚𝙭𝙩𝙤 𝙚𝙨 𝙢𝙪𝙮 𝙘𝙤𝙧𝙩𝙤, 𝙢𝙞𝙣𝙞𝙢𝙤 𝙙𝙚𝙗𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙚𝙧 *10* 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨...`
if (text.length > 1000) throw `᥀·࣭࣪̇˖❕◗ 𝙇𝙞𝙢𝙞𝙩𝙚 𝙢𝙖𝙭𝙞𝙢𝙤 𝙙𝙚: *1000*, 𝙣𝙤 𝙨𝙚 𝙥𝙪𝙚𝙙𝙚 𝙚𝙣𝙫𝙞𝙖𝙧 𝙚𝙡 𝙩𝙚𝙭𝙩𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`
let teks = `
\`𝐑𝐄𝐏𝐎𝐑𝐓𝐄 𝐃𝐄 𝐄𝐑𝐑𝐎𝐑𝐄𝐒:\`

𝗨𝗦𝗨𝗔𝗥𝗜𝗢:
• wa.me/${m.sender.split`@`[0]}

𝗧𝗘𝗫𝗧𝗢:
• ${text}
`
conn.reply('5493873232212@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender]}})
conn.reply('5493873232221@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender]}})
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙍𝙚𝙥𝙤𝙧𝙩𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤 𝙖 𝙡𝙤𝙨 𝙤𝙬𝙣𝙚𝙧𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
