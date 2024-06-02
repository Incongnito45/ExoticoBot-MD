let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `᥀·࣭࣪̇˖💎◗ 𝙋𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙘𝙤𝙨𝙖𝙨 𝙜𝙪𝙖𝙧𝙙𝙖𝙙𝙖𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}listcmd*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw `᥀·࣭࣪̇˖❌◗ 𝙎𝙤𝙡𝙤 𝙡𝙤𝙨 𝙤𝙬𝙣𝙚𝙧𝙨 𝙮 𝙚𝙡 𝙗𝙤𝙩 𝙥𝙪𝙚𝙙𝙚 𝙧𝙚𝙖𝙡𝙞𝙯𝙖𝙧 𝙚𝙨𝙩𝙖 𝙖𝙘𝙘𝙞𝙤𝙣.`
delete sticker[hash]
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙎𝙚 𝙝𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙚𝙡 𝙘𝙤𝙣𝙩𝙚𝙣𝙞𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!`)}
handler.command = ['delcmd']
handler.rowner = true
export default handler
