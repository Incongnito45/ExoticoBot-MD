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
╔•─•𝄽͢͡🎧⊰𝗔𝗨𝗗𝗜𝗢𝗦 𝗕𝗢𝗧⊱🎧͢͡𝅃•─•╮
┋𝄽͢͡🎧› _${usedPrefix}menuaudios_
┋ACTIVAR AUDIOS: *#on audios*
┋•┈┈┈┈┈┈┈┈┈•
┋𝄽͢͡🔊› _Baneado_
┋𝄽͢͡🔊› _Feliz navidad_
┋𝄽͢͡🔊› _A nadie le importa_
┋𝄽͢͡🔊› _Sexo_
┋𝄽͢͡🔊› _Vete a la vrg_
┋𝄽͢͡🔊› _Ara ara_
┋𝄽͢͡🔊› _Hola_
┋𝄽͢͡🔊› _Bot puto_
┋𝄽͢͡🔊› _Feliz cumpleaños_
┋𝄽͢͡🔊› _Pasa pack Bot_
┋𝄽͢͡🔊› _Atencion grupo_
┋𝄽͢͡🔊› _Un pato_
┋𝄽͢͡🔊› _Te amo_
┋𝄽͢͡🔊› _Yamete_
┋𝄽͢͡🔊› _Te diagnostico con gay_
┋𝄽͢͡🔊› _Bañate_
┋𝄽͢͡🔊› _Vivan los novios_
┋𝄽͢͡🔊› _Marica quien_
┋𝄽͢͡🔊› _Es puto_
┋𝄽͢͡🔊› _La biblia_
┋𝄽͢͡🔊› _Onichan_
┋𝄽͢͡🔊› _Homero chino_
┋𝄽͢͡🔊› _Oh me vengo_
┋𝄽͢͡🔊› _Buenos dias_
┋𝄽͢͡🔊› _Audio hentai_
┋𝄽͢͡🔊› _Fiesta del admin_
┋𝄽͢͡🔊› _Viernes_
┋𝄽͢͡🔊› _Mierda de Bot_
┋𝄽͢͡🔊› _Me olvidé_
┋𝄽͢͡🔊› _Murio el grupo_
┋𝄽͢͡🔊› _Siuuu_
┋𝄽͢͡🔊› _Rawr_
┋𝄽͢͡🔊› _UwU_
┋𝄽͢͡🔊› _:c_
┋𝄽͢͡🔊› _a_
┋𝄽͢͡🔊› _Hey_
┋𝄽͢͡🔊› _Enojado_
┋𝄽͢͡🔊› _Enojada_
┋𝄽͢͡🔊› _Chao_
┋𝄽͢͡🔊› _Hentai_
┋𝄽͢͡🔊› _Triste_
┋𝄽͢͡🔊› _Verdad que te engañe_
┋𝄽͢͡🔊› _Sus_
┋𝄽͢͡🔊› _Ohayo_
┋𝄽͢͡🔊› _La voz de hombre_
┋𝄽͢͡🔊› _Estoy triste_
┋𝄽͢͡🔊› _Me pican los cocos_
┋𝄽͢͡🔊› _Contexto_
┋𝄽͢͡🔊› _Me voy_
┋𝄽͢͡🔊› _Tengo los calzones del admin_
┋𝄽͢͡🔊› _Entrada épica_ 
┋𝄽͢͡🔊› _Esto va ser épico papus_
┋𝄽͢͡🔊› _Ingresa épicamente_
┋𝄽͢͡🔊› _Yoshi_
┋𝄽͢͡🔊› _No digas eso papu_
┋𝄽͢͡🔊› _Ma ma masivo_
┋𝄽͢͡🔊› _Fino señores_
┋𝄽͢͡🔊› _Bien pensado Woody_
┋𝄽͢͡🔊› _Jesucristo_
┋𝄽͢͡🔊› _Wtf_
┋𝄽͢͡🔊› _Una pregunta_
┋𝄽͢͡🔊› _Que sucede_
┋𝄽͢͡🔊› _Hablame_
┋𝄽͢͡🔊› _Niconico_
┋𝄽͢͡🔊› _Yokese_
┋𝄽͢͡🔊› _Omaiga_
┋𝄽͢͡🔊› _Nadie te preguntó_
┋𝄽͢͡🔊› _Bueno si_
┋𝄽͢͡🔊› _Usted está detenido_
┋𝄽͢͡🔊› _No me hables_
┋𝄽͢͡🔊› _No chu_
┋𝄽͢͡🔊› _El pepe_
┋𝄽͢͡🔊› _Pokémon_
┋𝄽͢͡🔊› _No me hagas usar esto_
┋𝄽͢͡🔊› _Esto va para ti_
┋𝄽͢͡🔊› _Abduzcan_
┋𝄽͢͡🔊› _Joder_
┋𝄽͢͡🔊› _Hablar primos_
┋𝄽͢͡🔊› _Mmm_
┋𝄽͢͡🔊› _Orale_
┋𝄽͢͡🔊› _Me anda buscando anonymous_
┋𝄽͢͡🔊› _Momento XD_
╚•─•𝄽͢͡🎧⊰•┈┈┈┈┈┈┈┈•⊱🎧͢͡𝅃•─•╯


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

handler.command = /^(menuaudios|menuads)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
