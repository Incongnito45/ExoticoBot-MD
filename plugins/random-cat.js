import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `${IDexotic.botInfo}`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw IDexotic.ErrorB
}}
handler.help = ['cat']
handler.tags = ['random']
handler.command = /^cat$/i
handler.fail = null
export default handler