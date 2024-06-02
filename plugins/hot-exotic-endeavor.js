import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-anime-boy/hot-endeavor.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, "🍁 🔥 𝙀𝙣𝙙𝙚𝙖𝙫𝙤𝙧 🔥 🍁", '𝘏𝘰𝘵 𝘌𝘯𝘥𝘦𝘢𝘷𝘰𝘳', url, [['🔥 SIGUIENTE 🔥', `${usedPrefix + command}`]], null, null, m)}
handler.help = ['hot asuma']
handler.tags = ['internet']
handler.command = /^(hot endeavor)$/i
export default handler
