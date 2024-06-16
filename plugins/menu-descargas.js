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
╔•─•𝄽͢͡📡⊰𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦⊱📡͢͡𝅃•─•╮
┋𝄽͢͡🌐› _${usedPrefix}fb_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}fb2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}fb3_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ig_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ig2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ig3_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}twitter_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}twitter2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}twitter3_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}play_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}play2_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}play3_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}play4_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}apk_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}apk2_  *nombre*
┋𝄽͢͡🌐› _${usedPrefix}verig_  *usuario*
┋𝄽͢͡🌐› _${usedPrefix}igstory  *usuario*_
┋𝄽͢͡🌐› _${usedPrefix}mediafire_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}m_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}m2_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}imagen_  *texto*
┋𝄽͢͡🌐› _${usedPrefix}pinterest_  *texto*
┋𝄽͢͡🌐› _${usedPrefix}drive_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}tiktok_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}ttimagen_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}tiktokfoto_  *usuario*
┋𝄽͢͡🌐› _${usedPrefix}vertiktok_  *usuario*
┋𝄽͢͡🌐› _${usedPrefix}gitclone_  *enlace github*
┋𝄽͢͡🌐› _${usedPrefix}playdoc_  *enlace • nombre*
┋𝄽͢͡🌐› _${usedPrefix}playdoc2_  *enlace • nombre*
┋𝄽͢͡🌐› _${usedPrefix}audio_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}video_  *enlace*
┋𝄽͢͡🌐› _${usedPrefix}playlist_  *texto*
┋𝄽͢͡🌐› _${usedPrefix}playlist2_  *texto*
╚•─•𝄽͢͡📡⊰•┈┈┈┈┈┈┈┈•⊱📡͢͡𝅃•─•╯


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

handler.command = /^(menudown|menudescargas)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
