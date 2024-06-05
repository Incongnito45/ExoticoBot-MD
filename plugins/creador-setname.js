let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `᥀·࣭࣪̇˖💎◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩.`
  try {
    await conn.updateProfileName(text)
    m.reply('᥀·࣭࣪̇˖✅◗ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!')
  } catch (e) {
    console.log(e)
    throw `᥀·࣭࣪̇˖❌◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname)$/i

handler.owner = true

export default handler