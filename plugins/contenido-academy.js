let handler = async(m, { conn, text, command }) => {
let yh = global.adultosss
let url = yh[Math.floor(Math.random() * yh.length)]
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `᥀·࣭࣪̇˖🗿◗ 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #on modohorny.` 
conn.sendButton(m.chat, `• *_${command}_*`.trim(), wm, url, [['🔥 𝑺𝑰𝑮𝑼𝑰𝑬𝑵𝑻𝑬 🔥', `/${command}`]], null, null, m)
}
handler.command = /^(comando)$/i
handler.tags = ['adultos']
handler.help = ['comando']
export default handler 

global.adultoss = 