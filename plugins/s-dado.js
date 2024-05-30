let handler = async (m, { conn }) => {
let dados=[
  'https://tinyurl.com/gdd01',
  'https://tinyurl.com/gdd02',
  'https://tinyurl.com/gdd003',
  'https://tinyurl.com/gdd004',
  'https://tinyurl.com/gdd05',
  'https://tinyurl.com/gdd006'
]
let url = dados[Math.floor(Math.random() * dados.length)]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
await conn.reply(m.chat, `Si sacas 6, mando foto pack :v`, fkontak, m)
conn.sendFile(m.chat, url, 'error.webp', null, m, { asSticker: true })}
handler.command = ['dado', 'dados', 'dadu'] 
export default handler
