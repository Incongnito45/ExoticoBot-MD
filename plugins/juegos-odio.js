let handler = async (m, { conn, command, text }) => {
let odio = `᥀·࣭࣪̇˖👺◗ 𝙀𝙡 𝙤𝙙𝙞𝙤 𝙙𝙚 ${text} 𝙥𝙤𝙧 𝙩𝙞, 𝙚𝙨 𝙪𝙣: ${Math.floor(Math.random() * 100)}%`.trim()
m.reply(odio, null, { mentions: conn.parseMention(odio) })}
handler.command = /^(odio)$/i
export default handler