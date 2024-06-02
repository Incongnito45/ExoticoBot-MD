import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-wallpaper/wall-random.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, "🌆 𝆺݊⬪࣭𝆭⬩𝆭𝙒𝙖𝙡𝙡𝙥𝙖𝙥𝙚𝙧𝆺݊⬪࣭⬩ 🌆", 'Fondo de pantallas.', url, [['🌅 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙛𝙤𝙣𝙙𝙤 🌇', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['hot asuma']
handler.tags = ['internet']
handler.command = /^(hot takeda|hot takeda harumi|hot takeda senpai)$/i
export default handler
