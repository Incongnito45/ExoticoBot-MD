import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime-boy/hot-asuma.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, "⛩️ 𝘼𝙨𝙪𝙢𝙖 𝙎𝙖𝙧𝙪𝙩𝙤𝙗𝙞 🍃", '𝘏𝘰𝘵 𝘈𝘴𝘶𝘮𝘢 𝘚𝘢𝘳𝘶𝘵𝘰𝘣𝘪', url, [['🔥 SIGUIENTE 🔥', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['hot asuma']
handler.tags = ['internet']
handler.command = /^(hot asuma)$/i
export default handler
