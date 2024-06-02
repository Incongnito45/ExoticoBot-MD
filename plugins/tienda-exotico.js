import { getDevice } from '@whiskeysockets/baileys'
import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
const dispositivo = await getDevice(m.key.id)
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = imagenRB
let pareja = global.db.data.users[m.sender].pasangan 
const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())
if (!/web|desktop|unknown/gi.test(dispositivo)) {  
let menu = `🌇 𝘽𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤(𝙖) 𝙖 𝙡𝙖 𝙩𝙞𝙚𝙣𝙙𝙖 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 ✨`.trim()    
const buttonParamsJson = JSON.stringify({
title: IDexotic.botonVerA,
description: "Infórmate por medios oficiales sobre GataBot",
sections: [
{ title: "🎊 𝙏𝙄𝙀𝙉𝘿𝘼 𝘿𝙀 𝙀𝙓𝙊𝙏𝙄𝘾𝙊 𝘽𝙊𝙏 🎊", highlight_label: "Popular",
rows: [
{ header: "✨☁️ 𝗦𝗘𝗥𝗩𝗜𝗗𝗢𝗥𝗘𝗦 ☁️✨", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "✨ Compre servidores basicos para poner tu bot!!", id: usedPrefix + "cuentasgb" },
{ header: "🏆☁️ 𝗦𝗘𝗥𝗩𝗜𝗗𝗢𝗥 / 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ☁️🏆", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "✨ Compre servidores premium y rapidos para poner tu bot!!", id: usedPrefix + "grupos" },
{ header: "✨🪙 𝗦𝗘𝗥𝗩𝗘𝗥 𝗖𝗢𝗜𝗡𝗦 🪙✨", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "🍂 Compre coins para su servidor, y mantener el bot en estado activo!!", id: usedPrefix + "donar" }
{ header: "🏆🪙 𝗦𝗘𝗥𝗩𝗘𝗥 𝗖𝗢𝗜𝗡𝗦 / 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🪙🏆", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "🍂 Compre una cantidad de coins para que tu servidor dure mas!!", id: usedPrefix + "serbot --code" },
{ header: "🎒🛍️ 𝗣𝗔𝗤𝗨𝗘𝗧𝗘𝗦 🛍️🎒", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "🎁 Compre paquetes de sorpresas, abrelos para tener tu recompensa!!", id: usedPrefix + "serbot" },
{ header: "🌐🤖 𝗦𝗘𝗥𝗩𝗘𝗥 𝗕𝗢𝗧𝗦 🤖🌐", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "🪄 Servidores que ya tienen un bot puesto, facil y seguro!!", id: usedPrefix + "ping" },
{ header: "🍃🏕️ 𝗥𝗣𝗚 𝗘𝗫𝗢𝗧𝗜𝗖𝗢 🏕️🍃", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "🎉 Juegue con los juegos de RPG-Exotico para ganar servidores o otras cosas!!", id: usedPrefix + "estado" },
{ header: "📱🛒 𝗣𝗥𝗢𝗗𝗨𝗖𝗧𝗢𝗦 🛒📱", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "🛍️ Quieres comprar otra cosa? presiona aqui para ver los artículos!!", id: usedPrefix + "verproductos" },
{ header: "♻️🍁 𝐕𝐎𝐋𝐕𝐄𝐑 𝐀𝐋 𝐌𝐄𝐍𝐔 🍁♻️", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "👑 Mira la lista de menus para disfrutar del bot!!", id: usedPrefix + "estado" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: `🌇🏪 𝙏𝙄𝙀𝙉𝘿𝘼 𝙀𝙓𝙊𝙏𝙄𝘾𝙊 🏪🌇` },
header: { title: ``, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})
} else { 
let menu = `ExoticoBot-MD`.trim()
await conn.sendFile(m.chat, imagenRB, 'exotico.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: IDexotic.botInfo, body: IDexotic.botDescrip, previewType: 0, thumbnail: imgAdvs, sourceUrl: exoticoAll}}}) 
}} catch (e) {
await m.reply(errorAB)
console.log(`${errorBB}`)
console.log(e)}}
handler.command = /^(tiendaexotico|tiendaofc|tienda\?)$/i
handler.register = true
export default handler
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
