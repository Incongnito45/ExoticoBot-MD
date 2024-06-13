import axios from "axios"
let handler = async (m, {command, conn, usedPrefix}) => {
let res = (await axios.get(`https://raw.githubusercontent.com/MultiBot-OFC/ExoticoBot-MD/master/NODE_EXOTICO_JSON/node-exotico-wallpaper/${command}-random.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]    
conn.sendButton(m.chat, `🪐✨ _${command}_ 🪐✨`.trim(), wm, haha, [['✨ 𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 🪐', `${usedPrefix + command}`]], null, null, m)    
}
handler.command = handler.help = ['wall']
handler.tags = ['wall']
export default handler
