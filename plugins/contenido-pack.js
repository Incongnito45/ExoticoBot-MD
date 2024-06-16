let handler = async(m, { conn, text, command }) => {
let yh = global.adultosss
let url = yh[Math.floor(Math.random() * yh.length)]
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `᥀·࣭࣪̇˖🗿◗ 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙥𝙖𝙧𝙖 𝙖𝙙𝙪𝙡𝙩𝙤𝙨 𝙚𝙨𝙩𝙖𝙣 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙙𝙤𝙨, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #on modohorny.` 
conn.sendButton(m.chat, `• *_${command}_*`.trim(), wm, url, [['🔥 𝑺𝑰𝑮𝑼𝑰𝑬𝑵𝑻𝑬 🔥', `/${command}`]], null, null, m)
}
handler.command = /^(wpack)$/i
handler.tags = ['adultos']
handler.help = ['wpack']
export default handler 

global.adultoss = [
  "https://i.imgur.com/XbW7FO2.jpg",
  "https://i.imgur.com/ciuzM98.jpg",
  "https://i.imgur.com/uHsrrrx.jpg",
  "https://i.imgur.com/PVi8YDi.jpg",
  "https://i.imgur.com/FLC3ZXE.jpg",
  "https://i.imgur.com/54m52tX.jpg",
  "https://i.imgur.com/OsxYPgQ.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/zdHVFEI.jpg",
  "https://i.imgur.com/kAplnSG.jpg",
  "https://i.imgur.com/15UiO8o.jpg",
  "https://i.imgur.com/qjjyr6G.jpg",
  "https://i.imgur.com/bQZRhBU.jpg",
  "https://i.imgur.com/vpw6Xnr.jpg",
  "https://i.imgur.com/aAyPrZx.jpg",
  "https://i.imgur.com/Gh3ORCd.jpg",
  "https://i.imgur.com/rjGhygM.jpg",
  "https://i.imgur.com/0MhmmF4.jpg",
  "https://i.imgur.com/2MX4wvq.jpg",
  "https://i.imgur.com/HYL5ggu.jpg",
  "https://i.imgur.com/7ZjOD2a.jpg",
  "https://i.imgur.com/zbEUy3m.jpg",
  "https://i.imgur.com/tZ6vlg6.jpg",
  "https://i.imgur.com/jdPns8O.jpg",
  "https://i.imgur.com/VyjBQHT.jpg",
  "https://i.imgur.com/ozAGqBD.jpg",
  "https://i.imgur.com/DsSj9S1.jpg",
  "https://i.imgur.com/KYHpjNc.jpg"
]