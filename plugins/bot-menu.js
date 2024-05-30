let handler = async (m, { conn, command, usedPrefix }) => {
let menu = `
Bienvenido al menu.

> use el comando:
#allmenu
`
await conn.sendFile(m.chat, 'https://telegra.ph/file/6d9527186fd0587a79e61.jpg', 'menu.jpg', menu.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🌌 M E N U 🍁 EXOTICO  🌌`,
body: `Seleccione los botones.`,
mediaType: 1,
sourceUrl: exoticoAll,
thumbnailUrl: 'https://telegra.ph/file/6d9527186fd0587a79e61.jpg'
}}
}, { mentions: m.sender })

}
handler.command = /^(menu|help|)$/i
export default handler
