let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `᥀·࣭࣪̇˖🪐◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙛𝙤𝙧𝙢𝙖𝙩𝙤 𝙫𝙖𝙡𝙞𝙙𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} abrir*`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙂𝙧𝙪𝙥𝙤 𝙖𝙗𝙞𝙚𝙧𝙩𝙤!!!`)
}
  
if (isClose === 'announcement'){
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙂𝙧𝙪𝙥𝙤 𝙘𝙚𝙧𝙧𝙖𝙙𝙤!!!`)
}}
handler.help = ['egroup open / close', 'egrupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(egrupo|egroup|grupoconfig)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler

