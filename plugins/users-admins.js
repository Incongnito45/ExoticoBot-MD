let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, text, command }) => {
  if (!text) return m.reply(`᥀·࣭࣪̇˖🪐◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖𝙧 𝙖 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙙𝙤𝙧𝙚𝙨, 𝙨𝙞𝙚𝙢𝙥𝙧𝙚 𝙮 𝙘𝙪𝙖𝙣𝙙𝙤 𝙨𝙚𝙖 𝙞𝙢𝙥𝙤𝙧𝙩𝙖𝙣𝙩𝙚...`)
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*• ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `𝙈𝙚𝙣𝙨𝙖𝙟𝙚: _${pesan}_`

let textoA = 
`
\`𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙋𝘼𝙍𝘼 𝘼𝘿𝙈𝙄𝙉𝙎\`

${oi}\n\n`

let textoB = 
`${listAdmin}`.trim()
await conn.sendFile(m.chat, pp, 'error.jpg', textoA + textoB, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
