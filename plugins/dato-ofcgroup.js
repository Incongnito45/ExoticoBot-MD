let handler = async (m, { conn, command }) => {
let media = menusRB
let str = `𝗚𝗥𝗨𝗣𝗢𝗦 𝗢𝗙𝗜𝗔𝗟𝗘𝗦 𝗗𝗘 𝗘𝗫𝗢𝗧𝗜𝗖𝗢𝗕𝗢𝗧

𝙂𝙧𝙪𝙥𝙤 𝙣𝙪𝙢𝙚𝙧𝙤 1:
${grupo1}

𝙂𝙧𝙪𝙥𝙤 𝙣𝙪𝙢𝙚𝙧𝙤 2:
${grupo2}

𝙂𝙧𝙪𝙥𝙤 𝙣𝙪𝙢𝙚𝙧𝙤 3:
${grupo3}`
await conn.sendButton(m.chat, str, `𝙇𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨 𝙖𝙪𝙣 𝙣𝙤 𝙚𝙨𝙩𝙖𝙣 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨.`, media,
[['𝗠𝗶 𝗜𝗻𝗳𝗼 🪐', '.minfo']],
null, [
['ExoticoBot-MD', `${atomofc}`]], fkontak)}
handler.command = /^grupoex|exogroup|exoticgroup|grupoexotico|grupoexotic|exoticogrupo|gruposofc$/i
handler.exp = 33
export default handler
