//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
const handler = async (m, {conn, text, isPrems}) => {
if (!db.data.chats[m.chat].game) throw `᥀·࣭࣪̇˖⚔️◗ 𝙇𝙤𝙨 𝙟𝙪𝙚𝙜𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙗𝙤𝙩, 𝙪𝙨𝙖 𝙚𝙡 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙥𝙖𝙧𝙖 𝙖𝙘𝙩𝙞𝙫𝙖𝙧𝙡𝙤𝙨.\n\n• ${usedPrefix}on game` 
const date = global.db.data.users[m.sender].juegos + 10800000; //10800000 = 3 hs 
if (new Date - global.db.data.users[m.sender].juegos < 10800000) throw `᥀·࣭࣪̇˖⚔️◗ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(date - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧.`
if (global.db.data.users[m.sender].exp < 0 || global.db.data.users[m.sender].money < 0 || global.db.data.users[m.sender].limit < 0) return m.reply(`᥀·࣭࣪̇˖👺◗ 𝙉𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙨𝙪𝙛𝙞𝙘𝙞𝙚𝙣𝙩𝙚𝙨 𝙧𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝙥𝙖𝙧𝙖 𝙟𝙪𝙜𝙖𝙧 𝙚𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤.`)
let user = global.db.data.users[m.sender]
const prem = Math.floor(Math.random() * 3600000) 
const exp = Math.floor(Math.random() * 8500)
const limit = Math.floor(Math.random() * 130)
const money = Math.floor(Math.random() * 8500)
let rulet = ['text', 'text2', 'text3', 'text4', 'text5', 'text6']; 
let ruleta = rulet[Math.floor(Math.random() * 6)]
global.db.data.users[m.sender].juegos = new Date * 1;
if (ruleta === 'text') return m.reply(`᥀·࣭࣪̇˖✅◗ 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙀𝙍𝙏𝙀!!!\n*𝙊𝙗𝙩𝙞𝙚𝙣𝙚 :* ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (ruleta === 'text2') return m.reply(`᥀·࣭࣪̇˖👺◗ 𝙌𝙐𝙀 𝙈𝘼𝙇𝘼 𝙎𝙐𝙀𝙍𝙏𝙀. ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (ruleta === 'text3') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote').catch(m.reply(`᥀·࣭࣪̇˖👺◗ 𝙈𝙐𝙔 𝙈𝘼𝙇𝘼 𝙎𝙐𝙀𝙍𝙏𝙀, 𝙔𝘼 𝙉𝙊 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉.`)) 
if (ruleta === 'text4') return conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote').catch(m.reply(`᥀·࣭࣪̇˖🥳◗ 𝙌𝙐𝙀 𝙎𝙐𝙀𝙍𝙏𝙀, 𝘼𝙃𝙊𝙍𝘼 𝙀𝙍𝙀𝙎 𝘼𝘿𝙈𝙄𝙉, 𝙏𝙀 𝙇𝙊 𝙂𝘼𝙉𝘼𝙎!!!`)) 
if (ruleta === 'text5') return m.reply(`᥀·࣭࣪̇˖🎊◗ 𝙎𝙐𝙀𝙍𝙏𝙀!!!\n𝙂𝙖𝙣𝙖𝙨𝙩𝙚 ${diamond} 𝙙𝙚 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨 💎`).catch(global.db.data.users[m.sender].limit += limit) 
if (ruleta === 'text6') return m.reply(`᥀·࣭࣪̇˖🏆◗ 𝙎𝙐𝙀𝙍𝙏𝙀!!! 𝙚𝙧𝙚𝙨 𝙥𝙧𝙚𝙢𝙞𝙪𝙢 𝙥𝙤𝙧 𝙪𝙣𝙖 𝙝𝙤𝙧𝙖 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩 🏆✨`).catch(global.db.data.users[m.sender].premium += prem) 
}
handler.help = ['suerte', 'ruleta', 'ruletas']
handler.tags = ['fun']
handler.command = /^(ruletas|ruleta|suerte)$/i
handler.fail = null;
handler.group = true
handler.register = true
export default handler;
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}