let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `᥀·࣭࣪̇˖⌛◗ 𝙀𝙨𝙥𝙚𝙧𝙚 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n`
let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `᥀·࣭࣪̇˖🧰◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥, 𝙩𝙚𝙭𝙩𝙤 𝙮 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙨𝙥𝙖𝙢.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} +548374827482|Holaaa|10*`
if (!pesan) throw `᥀·࣭࣪̇˖🧰◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥, 𝙩𝙚𝙭𝙩𝙤 𝙮 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙨𝙥𝙖𝙢.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} +548374827482|Holaaa|10*`
if (jumlah && isNaN(jumlah)) throw `᥀·࣭࣪̇˖🧰◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥, 𝙩𝙚𝙭𝙩𝙤 𝙮 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙨𝙥𝙖𝙢.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} +548374827482|Holaaa|10*`
await delay(10000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 10) throw `᥀·࣭࣪̇˖❕◗ 𝙈𝙞𝙣𝙞𝙢𝙤 𝙙𝙚𝙗𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙧 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 10 𝙥𝙖𝙧𝙖 𝙝𝙖𝙘𝙚𝙧 𝙚𝙡 𝙨𝙥𝙖𝙢.`
await delay(10000)
await m.reply(`᥀·࣭࣪̇˖✅◗ 𝙀𝙡 𝙏𝙚𝙭𝙩𝙎𝙥𝙖𝙢 𝙨𝙚 𝙚𝙣𝙫𝙞𝙤 *${fixedJumlah}* 𝙫𝙚𝙘𝙚𝙨 𝙖 *${nomor}* 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^textspam?$/i
handler.group = false
handler.premium = false
handler.register = true
handler.level = 16
handler.limit = 60
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
