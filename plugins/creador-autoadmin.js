let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw '᥀·࣭࣪̇˖💎◗ 𝙇𝙞𝙨𝙩𝙤, 𝙖𝙝𝙤𝙧𝙖 𝙚𝙧𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 𝙘𝙧𝙚𝙖𝙙𝙤𝙧.'
  if (isAdmin) throw `᥀·࣭࣪̇˖🛡️◗ 𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙙𝙖𝙧𝙩𝙚 𝙖𝙙𝙢𝙞𝙣 𝙥𝙤𝙧 𝙦𝙪𝙚 𝙣𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙙𝙚 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤...`
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.|atad|autoadmin$/i
handler.rowner = true
handler.botAdmin = true
export default handler
