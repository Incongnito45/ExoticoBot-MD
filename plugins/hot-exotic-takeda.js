import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime-boy/hot-takeda.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, "🐻 ⛩️ 𝙏𝙖𝙠𝙚𝙙𝙖 𝙃𝙖𝙧𝙪𝙢𝙞 ⛩️ 🐻", '𝘏𝘰𝘵 𝘵𝘢𝘬𝘦𝘥𝘢 𝘩𝘢𝘳𝘶𝘮𝘪', url, [['🔥 SIGUIENTE 🔥', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['hot asuma']
handler.tags = ['internet']
handler.command = /^(hot takeda|hot takeda harumi|hot takeda senpai)$/i
export default handler
