let ro = 3000
let handler = async (m, { conn, usedPrefix, command}) => {
let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `᥀·࣭࣪̇˖⏳◗ 𝙀𝙨𝙥𝙚𝙧𝙖 ${timers.toTimeString()} 𝙨𝙚𝙜𝙪𝙣𝙙𝙤(𝙨) 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙤𝙗𝙖𝙧.`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `᥀·࣭࣪̇˖⚔️◗ 𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗲 𝗼 𝗺𝗲𝗻𝘀𝗶𝗼𝗻𝗮 𝗮 𝘂𝗻 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗽𝗮𝗿𝗮 𝘂𝘀𝗮𝗿 𝗲𝘀𝘁𝗲 𝗰𝗼𝗺𝗮𝗻𝗱𝗼.`
if (!(who in global.db.data.users)) throw `᥀·࣭࣪̇˖⚔️◗ 𝗘𝗹 𝘂𝘀𝘂𝗮𝗿𝗶𝗼 𝗻𝗼 𝘀𝗲 𝗲𝗻𝗰𝘂𝗲𝗻𝘁𝗿𝗮 𝗲𝗻 𝗺𝗶 𝗯𝗮𝘀𝗲 𝗱𝗲 𝗱𝗮𝘁𝗼𝘀, 𝗱𝗲𝗯𝗲 𝗱𝗲 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗿𝘀𝗲.`
let users = global.db.data.users[who]
let rob = Math.floor(Math.random() * ro)
if (users.exp < rob) return m.reply(`᥀·࣭࣪̇˖⚔️◗ @${who.split`@`[0]} tiene menos de *${ro} XP* No robes a un pobre xdddd`, null, { mentions: [who] })    
global.db.data.users[m.sender].exp += rob
global.db.data.users[who].exp -= rob 
global.db.data.users[m.sender].money += rob
global.db.data.users[who].money -= rob 
m.reply(`*᥀·࣭࣪̇˖⚔️◗ Robaste ${rob} Xp a @${who.split`@`[0]}*`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['rob']
handler.tags = ['rol']
handler.command = ['robar', 'rob']
handler.group = true
handler.register = true
export default handler  
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

