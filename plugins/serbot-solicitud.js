let handler = async (m, { conn, command }) => {
let media = imagenRB
let str = `
¿COMO DESEA VINCULAR?`
await conn.sendButton(m.chat, str, wm, media,
[['☁️ 𝗤𝗥 ☁️', '.esubbot'], ['🔢 𝗖𝗢𝗗𝗜𝗚𝗢 🔢', '#premcode']],
null, null, fkontak)}
handler.command = /^serbot|serbotcode|jadibot|serjadibot$/i
handler.exp = 33
handler.private = true
export default handler

/*
let media = './Multi_Imagen/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let sersub = `╭• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈• •─• ⧐
╎ \`¿COMO DESEA VINCULAR?\`
╰• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈• •─• ⧐`
await conn.sendButton(m.chat, sersub, wm, media, 
[['CODE 🔢', '.esubbot --code'],
['QR 👁️‍🗨️', '#esubbot']
['PREMIUM 🏆', '/premserbot']], null, null, fkontak)}
handler.command = /^ser(bot|subbot)|serbot --code|$/i
handler.exp = 80
handler.private = true
export default handler
*/
