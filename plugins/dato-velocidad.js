import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, command, isRowner}) => {
try {
let enlace = { contextInfo: { externalAdReply: {title: '𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿', body: '𝘗𝘳𝘶𝘦𝘣𝘢 𝘥𝘦 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘦𝘯 𝘦𝘭 𝘣𝘰𝘵.', sourceUrl: exoticoAll, thumbnailUrl: await(await fetch(imagenRB)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: paypal, mediaType: 'VIDEO', description: '', title: '𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿', body: '𝘗𝘳𝘶𝘦𝘣𝘢 𝘥𝘦 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘦𝘯 𝘦𝘭 𝘣𝘰𝘵.', thumbnailUrl: await(await fetch(imagenRB)).buffer(), sourceUrl: exoticoAll }}}
let dos = [enlace, enlace2]

let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

let old = performance.now()
await conn.reply(m.chat, `᥀·࣭࣪̇˖☄️◗ 𝙋𝙧𝙪𝙚𝙗𝙖 𝙙𝙚 𝙫𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿`, fkontak, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 😻 𝗦𝘂𝗽𝗲𝗿 𝗚𝗮𝘁𝗮𝗕𝗼𝘁-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})

let neww = performance.now()
let speed = neww - old
let caption = `𝗥𝗘𝗡𝗗𝗜𝗠𝗜𝗘𝗡𝗧𝗢𝗦:
• *${Math.round(neww - old)}* ms
• *${speed}* ms

𝗧𝗜𝗘𝗠𝗣𝗢 𝗘𝗝𝗘𝗖𝗨𝗧𝗔𝗕𝗟𝗘: 
• ${muptime}

${readMore}

𝗦𝗘𝗥𝗩𝗜𝗗𝗢𝗥:
• *RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
• *RAM Libre:* ${format(freemem())}`
await conn.sendFile(m.chat, gataImg, 'pp.jpg', caption, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: '𝙎𝙋𝙀𝙀𝘿 / 𝙀𝙓𝙊𝙏𝙄𝘾𝙊𝘽𝙊𝙏', body: '𝘗𝘳𝘶𝘦𝘣𝘢 𝘥𝘦 𝘷𝘦𝘭𝘰𝘤𝘪𝘥𝘢𝘥 𝘦𝘯 𝘦𝘭 𝘣𝘰𝘵.', previewType: 0, thumbnail: imagenRB, sourceUrl: exoticoAll }}})
} catch (e) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖🚫◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`, m)
console.log(e)
}}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' *Días : Days ☀️*\n ', h, ' *Horas : Hours 🕐*\n ', m, ' *Minuto : Minute ⏰*\n ', s, ' *Segundo : Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
