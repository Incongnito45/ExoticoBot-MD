import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let exoticomenu = `
╔•─•𝄽͢͡🎰⊰𝗝𝗨𝗘𝗚𝗢𝗦 𝗕𝗢𝗧⊱🎰͢͡𝅃•─•╮
┋𝄽͢͡🎮› _${usedPrefix}ahorcado_
┋𝄽͢͡🎮› _${usedPrefix}gay_  *mention*
┋𝄽͢͡🎮› _${usedPrefix}gay2_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}lesbiana_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}pajero_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}pajera_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}puto_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}puta_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}manco_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}manca_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}rata_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}prostituto_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}prostituta_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}doxear_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}violar_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}formarpareja_ 
┋𝄽͢͡🎮› _${usedPrefix}amor_ 
┋𝄽͢͡🎮› _${usedPrefix}odio_ 
┋𝄽͢͡🎮› _${usedPrefix}personalidad_ 
┋𝄽͢͡🎮› _${usedPrefix}pregunta_
┋𝄽͢͡🎮› _${usedPrefix}reto_ 
┋𝄽͢͡🎮› _${usedPrefix}verdad_ 
┋𝄽͢͡🎮› _${usedPrefix}ruleta_
┋𝄽͢͡🎮› _${usedPrefix}sorteo_
┋𝄽͢͡🎮› _${usedPrefix}topgays_ 
┋𝄽͢͡🎮› _${usedPrefix}topotakus_
┋𝄽͢͡🎮› _${usedPrefix}top_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}suitpvp_  *@user*
┋𝄽͢͡🎮› _${usedPrefix}delttt_
┋𝄽͢͡🎮› _${usedPrefix}cancion_
┋𝄽͢͡🎮› _${usedPrefix}acertijo_
┋𝄽͢͡🎮› _${usedPrefix}akinator_
┋𝄽͢͡🎮› _${usedPrefix}pajeame_
┋𝄽͢͡🎮› _${usedPrefix}mates_
┋𝄽͢͡🎮› _${usedPrefix}pista_
┋𝄽͢͡🎮› _${usedPrefix}ppt_
┋𝄽͢͡🎮› _${usedPrefix}slot_
┋𝄽͢͡🎮› _${usedPrefix}tictactoe_
╚•─•𝄽͢͡🎰⊰•┈┈┈┈┈┈┈┈•⊱🎰͢͡𝅃•─•╯


⋄𝆭  𝆭  𝅦⸙͡「𝅦𝙀𝙭𝆭𝙤𝙩𝙞𝙘𝆭𝙤𝘽𝆭𝙤𝙩𝅦-𝙈𝘿𝅦」͡⸙𝅦 𝆭  𝆭 ⋄`.trim()
    
const viexotic = ['https://qu.ax/uLtU.mp4',
'https://qu.ax/ukVe.mp4',
'https://qu.ax/lMxG.mp4',
'https://qu.ax/hAag.mp4',
'https://qu.ax/SNLc.mp4',
'https://qu.ax/ysCL.mp4']
try {
await conn.sendMessage(m.chat, { video: { url: viexotic.getRandom() }, gifPlayback: true, caption: exoticomenu, contextInfo: atomofc })
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: imagenRB.getRandom() }, gifPlayback: false, caption: exoticomenu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { video: viexotic.getRandom(), gifPlayback: true, caption: exoticomenu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, menuImg2, 'exoticomenu.jpg', exoticomenu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 
} catch (e) {
await m.reply(errorAB)
console.log(`${errorBB}`)
console.log(e)}}

handler.command = /^(menujuegos|menugames)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
