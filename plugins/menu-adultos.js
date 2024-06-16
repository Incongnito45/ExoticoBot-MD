import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `᥀·࣭࣪̇˖🗿◗ 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #on modohorny.` 
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
╔•─•𝄽͢͡🌆⊰𝗩𝗜𝗗𝗘𝗢 𝗛𝗢𝗧⊱🌆͢͡𝅃•─•╮
┋𝄽͢͡🍑› _${usedPrefix}vporno_
┋𝄽͢͡🍑› _${usedPrefix}vporno_
┋𝄽͢͡🍑› _${usedPrefix}vbisexual_
┋𝄽͢͡🍑› _${usedPrefix}vgay_
┋𝄽͢͡🍑› _${usedPrefix}vlesbiana_
┋𝄽͢͡🍑› _${usedPrefix}vrandom_
╚•─•𝄽͢͡🌆⊰•┈┈┈┈┈┈┈┈•⊱🌆͢͡𝅃•─•╯

╔•─•𝄽͢͡🔥⊰𝗜𝗠𝗔𝗚𝗘𝗡 𝗛𝗢𝗧⊱🔥͢͡𝅃•─•╮
┋𝄽͢͡🥵› _${usedPrefix}wacademy_
┋𝄽͢͡🥵› _${usedPrefix}wcosplay_
┋𝄽͢͡🥵› _${usedPrefix}wcum_
┋𝄽͢͡🥵› _${usedPrefix}wdb_
┋𝄽͢͡🥵› _${usedPrefix}wdb2_
┋𝄽͢͡🥵› _${usedPrefix}wero_
┋𝄽͢͡🥵› _${usedPrefix}wfem_
┋𝄽͢͡🥵› _${usedPrefix}wgenshin_
┋𝄽͢͡🥵› _${usedPrefix}wglass_
┋𝄽͢͡🥵› _${usedPrefix}whentai_
┋𝄽͢͡🥵› _${usedPrefix}whentai2_
┋𝄽͢͡🥵› _${usedPrefix}wkimetsu_
┋𝄽͢͡🥵› _${usedPrefix}wkitagawa_
┋𝄽͢͡🥵› _${usedPrefix}wlesbiana_
┋𝄽͢͡🥵› _${usedPrefix}wloli_
┋𝄽͢͡🥵› _${usedPrefix}wnaruto_
┋𝄽͢͡🥵› _${usedPrefix}wnintento_
┋𝄽͢͡🥵› _${usedPrefix}worgy_
┋𝄽͢͡🥵› _${usedPrefix}wpack_
┋𝄽͢͡🥵› _${usedPrefix}wpackgirl_
┋𝄽͢͡🥵› _${usedPrefix}wpackmen_
┋𝄽͢͡🥵› _${usedPrefix}wpanties_
┋𝄽͢͡🥵› _${usedPrefix}wpechos_
┋𝄽͢͡🥵› _${usedPrefix}wpene_
┋𝄽͢͡🥵› _${usedPrefix}wpokemon_
┋𝄽͢͡🥵› _${usedPrefix}wporno_
┋𝄽͢͡🥵› _${usedPrefix}wrezero_
┋𝄽͢͡🥵› _${usedPrefix}wtatsumaki_
┋𝄽͢͡🥵› _${usedPrefix}wtetas_
┋𝄽͢͡🥵› _${usedPrefix}wtrapito_
┋𝄽͢͡🥵› _${usedPrefix}wyuri_
┋𝄽͢͡🥵› _${usedPrefix}wyuri2_
╚•─•𝄽͢͡🔥⊰•┈┈┈┈┈┈┈┈•⊱🔥͢͡𝅃•─•╯

╔•─•𝄽͢͡⛩️⊰𝗔𝗡𝗜𝗠𝗘 𝗕𝗢𝗬 𝗛𝗢𝗧⊱⛩️͢͡𝅃•─•╮
┋𝄽͢͡🔥› _${usedPrefix}endeavor_ 
┋𝄽͢͡🔥› _${usedPrefix}takeda_ 
┋𝄽͢͡🔥› _${usedPrefix}asuma_ 
╚•─•𝄽͢͡⛩️⊰•┈┈┈┈┈┈┈┈•⊱⛩️͢͡𝅃•─•╯

╔•─•𝄽͢͡🍁⊰𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦⊱🍁͢͡𝅃•─•╮
┋𝄽͢͡🌇› _${usedPrefix}xvideos_  *enlace* 
┋𝄽͢͡🌇› _${usedPrefix}xnxx_  *enlace*
╚•─•𝄽͢͡🍁⊰•┈┈┈┈┈┈┈┈•⊱🍁͢͡𝅃•─•╯


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

handler.command = /^(menuhot|menuhorny)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
