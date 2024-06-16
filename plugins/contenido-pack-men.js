let handler = async(m, { conn, text, command }) => {
let yh = global.adultosss
let url = yh[Math.floor(Math.random() * yh.length)]
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `᥀·࣭࣪̇˖🗿◗ 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #on modohorny.` 
conn.sendButton(m.chat, `• *_${command}_*`.trim(), wm, url, [['🔥 𝑺𝑰𝑮𝑼𝑰𝑬𝑵𝑻𝑬 🔥', `/${command}`]], null, null, m)
}
handler.command = /^(wpackmen)$/i
handler.tags = ['adultos']
handler.help = ['wpackmen']
export default handler 

global.adultoss = [
  "https://i.imgur.com/TK0qLAu.jpg",
  "https://i.imgur.com/q8lKT40.jpg",
  "https://i.imgur.com/OwWdL9u.jpg",
  "https://i.imgur.com/Er7WiQo.jpg",
  "https://i.imgur.com/u4y0q4P.jpg",
  "https://i.imgur.com/y8y4PPr.jpg",
  "https://i.imgur.com/qgfLlRY.jpg",
  "https://i.imgur.com/irgyUTD.jpg",
  "https://i.imgur.com/uXrqfBl.jpg",
  "https://i.imgur.com/lgXjetf.jpg",
  "https://i.imgur.com/81QLh8s.jpg",
  "https://i.imgur.com/R3AlYe1.jpg",
  "https://i.imgur.com/a2Myr3F.jpg",
  "https://i.imgur.com/Wp9cgGw.jpg",
  "https://i.imgur.com/ggKUnxt.jpg",
  "https://i.imgur.com/eCJNWBl.jpg",
  "https://i.imgur.com/6lcrBQB.jpg",
  "https://i.imgur.com/eSSbXJ1.jpg",
  "https://i.imgur.com/tNyvzyO.jpg"
  ]