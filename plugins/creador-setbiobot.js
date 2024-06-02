let handler = async (m, { conn, text }) => {
   if (!text) throw `᥀·࣭࣪̇˖💎◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙡𝙖 𝙗𝙞𝙤𝙜𝙧𝙖𝙛𝙞𝙖 𝙙𝙚𝙡 𝙗𝙤𝙩.`
     try {
		await conn.updateProfileStatus(text).catch(_ => _)
		conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝘽𝙞𝙤𝙜𝙧𝙖𝙛𝙞𝙖 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙖 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`, m)
} catch {
       throw '᥀·࣭࣪̇˖❌◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'
     }
}
handler.help = ['setbotbio <teks>']
handler.tags = ['owner']
handler.command = /^setbiobot|setbotbio$/i
handler.owner = true

export default handler
