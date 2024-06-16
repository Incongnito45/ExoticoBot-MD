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
let pp = videoRandom

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

if (!/web|desktop|unknown/gi.test(dispositivo)) {  
let menu = `👋🏻 𝘏𝘰𝘭𝘢 ${user.registered === true ? user.name : taguser}
• ${horarioFecha}`.trim()
      
const buttonParamsJson = JSON.stringify({
title: "VER LISTA",
description: "⦑❕⦒ ⤷ Seleccione cualquier boton para ver los resultados.",
sections: [
{ title: "🗿  MENUS  🗿", highlight_label: "Popular",
rows: [
{ header: "👑 𝙈𝙀𝙉𝙐 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 👑", title: "𝘌𝘹𝘰𝘵𝘪𝘹𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de creadores.", id: usedPrefix + "menuowner" },
{ header: "🤖 𝙈𝙀𝙉𝙐 𝙎𝙀𝙍 𝘽𝙊𝙏 🤖", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de ser bot o sub bot.", id: usedPrefix + "menuserbot" },
{ header: "🚀 𝙈𝙀𝙉𝙐 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de descargas.", id: usedPrefix + "menudown" },
{ header: "👥 𝙈𝙀𝙉𝙐 𝙂𝙍𝙐𝙋𝘼𝙇 👥", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de grupos para ti.", id: usedPrefix + "menugrupal" },
{ header: "☁️ 𝙈𝙀𝙉𝙐 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 ☁️", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de informacion sobre el bot.", id: usedPrefix + "menuinfo" },
{ header: "👤 𝙈𝙀𝙉𝙐 𝙍𝙀𝘾𝙐𝙍𝙎𝙊𝙎 👤", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de recursos para saber tus logros.", id: usedPrefix + "menuperfil" },
{ header: "✨ 𝙈𝙀𝙉𝙐 𝙀𝘿𝙄𝙏 𝘽𝙊𝙏 ✨", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de edit bot, lo puedes usar para editar el bot.", id: usedPrefix + "menueditbot" },
{ header: "🔍 𝙈𝙀𝙉𝙐 𝘽𝙐𝙎𝘾𝘼𝘿𝙊𝙍 🔍", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de buscadores, sea google o otro.", id: usedPrefix + "menusearch" },
{ header: "🎶 𝙈𝙀𝙉𝙐 𝙀𝘿𝙄𝙏 𝘼𝙐𝘿𝙄𝙊𝙎 🎶", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de edit audios, edita tus audios aqui.", id: usedPrefix + "menueditaudios" },
{ header: "🎰 𝙈𝙀𝙉𝙐 𝙅𝙐𝙀𝙂𝙊𝙎 🎰", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de juegos, entretenerte y subir de nivel.", id: usedPrefix + "menujuegos" },
{ header: "💡 𝙈𝙀𝙉𝙐 𝙄𝙉𝙏𝙀𝙇𝙄𝙂𝙀𝙉𝘾𝙄𝘼 💡", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de inteligencia, chatgpt, bot, bard, estan aqui.", id: usedPrefix + "menuia" },
{ header: "🛸 𝙈𝙀𝙈𝙐 𝙄𝙉𝙎𝙏𝘼𝙇𝘼𝙍 𝘽𝙊𝙏𝙎 🛸", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de instalacion, instala bots para tu uso.", id: usedPrefix + "menuinstall" },
{ header: "🧰 𝙈𝙀𝙉𝙐 𝙃𝙀𝙍𝙍𝘼𝙈𝙄𝙀𝙉𝙏𝘼𝙎 🧰", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de herramientas utiles.", id: usedPrefix + "menuhrms" },
{ header: "🎧 𝙈𝙀𝙉𝙐 𝘼𝙐𝘿𝙄𝙊𝙎 🎧", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de audios para entretener.", id: usedPrefix + "menuaudios" },
{ header: "🍃 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘽𝙊𝙏 🍃", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de stickers bot, etiqueta a alguien para usar estos stickers.", id: usedPrefix + "menustickbot" },
{ header: "🪐 𝙈𝙀𝙉𝙐 𝘽𝘼𝙉 𝙔 𝙐𝙉𝘽𝘼𝙉 🪐", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de ban o unban, para banear a las personas en un grupo.", id: usedPrefix + "menuban" },
{ header: "🎊 𝙈𝙀𝙉𝙐 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 🎊", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de stickers, crea tus stickers aqui.", id: usedPrefix + "menusticker" },
{ header: "🍷 𝙈𝙀𝙉𝙐 𝙀𝘿𝙄𝙏 𝙂𝙍𝙊𝙐𝙋 🍷", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de edit group, edita tu grupo aqui.", id: usedPrefix + "menueditgroup" },
{ header: "⛩️ 𝙈𝙀𝙉𝙐 𝘼𝙉𝙄𝙈𝙀 𝙍𝘼𝙉𝘿𝙊𝙈 ⛩️", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de animes, entretiene y mira!", id: usedPrefix + "menuanime" },
{ header: "🍇 𝙈𝙀𝙉𝙐 𝙀𝙁𝙀𝘾𝙏𝙊𝙎 🍇", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de efectos aqui.", id: usedPrefix + "menuefectos" },
{ header: "🍸 𝙈𝙀𝙉𝙐 𝙀𝙓𝙊𝙏𝙄𝘾𝙊 𝘽𝙊𝙏 🍸", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de exotico bot, ajustes nuevos en el bot.", id: usedPrefix + "menuexotico" },
{ header: "🥃 𝙈𝙀𝙉𝙐 𝙊𝙉 𝙔 𝙊𝙁𝙁 🥃", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de on y off, activa y desactiva funciones.", id: usedPrefix + "menunf" },
{ header: "🌌 𝙈𝙀𝙉𝙐 𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙄𝘿𝙊𝙍 🌌", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de convertidor, convierte varias cosas en otro.", id: usedPrefix + "menuconvert" },
{ header: "🎒 𝙈𝙀𝙉𝙐 𝙍𝙋𝙂 🎒", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu de rpg, gana recursos y sube de nivel.", id: usedPrefix + "menurpg" },
{ header: "🗿 𝙈𝙀𝙉𝙐 𝘾𝙊𝙈𝙋𝙇𝙀𝙏𝙊 🗿", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Mira el menu completo, las funciones ocultas estan aqui.", id: usedPrefix + "allmenu" }
]},
{ title: "🍇  ATAJOS  🍇", highlight_label: "Popular",
rows: [
{ header: "☁️ 𝙍𝙚𝙥𝙤𝙧𝙩𝙚", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Reporta los errores para notificar a todos los creadores del bot.", id: usedPrefix + "reporte" },
{ header: "🗿 𝙎𝙤𝙥𝙤𝙧𝙩𝙚", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Soporte para ExoticoBot-MD, comenta los problemas o errores.", id: usedPrefix + "asistenciaexotic" },
{ header: "🌌 𝙄𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Instala el bot para usarlo.", id: usedPrefix + "installexotico" },
{ header: "🤖 𝘾𝙝𝙖𝙩𝙂𝙋𝙏", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "Seleccione esto si desea saber el ping del Bot", id: usedPrefix + "chatgpt Hola" },
{ header: "👤 𝙂𝙧𝙪𝙥𝙤𝙨 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵", description: "Unete a los grupos oficiales del bot.", id: usedPrefix + "grupoex" }
]},
{ title: "🥃  CANAL  🥃", highlight_label: "Popular",
rows: [
{ header: "🪐 𝘾𝘼𝙉𝘼𝙇 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 🪐", title: "𝘌𝘹𝘰𝘵𝘪𝘤𝘰𝘉𝘰𝘵-𝘔𝘋", description: "No te pierdas de las novedades del bot.", id: usedPrefix + "ofchannel" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: `⦑❕⦒ ⤷ Seleccione los botones por favor.` },
header: { title: `╭• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•\n┃          𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐𝙎\n╰• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈•\n`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})
      
} else { 
let cocomilk = `que wea`.trim()
await conn.sendFile(m.chat, multiMenus, 'exotico.jpg', cocomilk, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'Bienvenido(a) usuario(a) 👋🏻', previewType: 0, thumbnail: imagenRB, sourceUrl: exoticoAll}}}) 
}} catch (e) {
await m.reply(errorAB)
console.log(`${errorBB}`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help|submenus|menulist|menulista\?)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  