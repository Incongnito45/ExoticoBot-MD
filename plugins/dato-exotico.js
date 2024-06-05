let media = './Multi_Imagen/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `•━━━━━━━━•「 🔥 」•━━━━━━━━•
❮😃❯ 𝑮𝑹𝑨𝑪𝑰𝑨𝑺 𝑷𝑶𝑹 𝑬𝑺𝑻𝑨𝑹 𝑨𝑸𝑼𝑰!!!
𝑬𝑺𝑻𝑨𝑺 𝑺𝑶𝑵 𝑳𝑨𝑺 𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻.

🎉 𝗚𝗥𝗨𝗣𝗢 1:
• ${grupo1}

🎉 𝗚𝗥𝗨𝗣𝗢 2:
• ${grupo2}

🎉 𝗚𝗥𝗨𝗣𝗢 3:
• ${grupo3}

•━━━━━━━━•「 🔥 」•━━━━━━━━•
𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐒𝐄𝐑𝐕𝐈𝐃𝐎𝐑:
• ${creador}

•━━━━━━━━•「 🔥 」•━━━━━━━━•
𝐂𝐎𝐌𝐏𝐑𝐀𝐑 𝐂𝐎𝐈𝐍𝐒:
• https://wa.me/c/5493873232212

•━━━━━━━━•「 🔥 」•━━━━━━━━•
🌌 𝐒𝐎𝐏𝐎𝐑𝐓𝐄:
• ${asistencia}

•━━━━━━━━•「 🔥 」•━━━━━━━━•
❮🔮❯ ¿𝑫𝑼𝑫𝑨𝑺 𝑶 𝑷𝑹𝑶𝑩𝑳𝑬𝑴𝑨𝑺? 🌇✨
𝑪𝑶𝑵𝑻𝑨𝑪𝑻𝑨𝐌𝐄 𝑨𝑸𝑼𝑰!!!

👑 𝗖𝗥𝗘𝗔𝗗𝗢𝗥:
• ${creador}
•━━━━━━━━•「 🔥 」•━━━━━━━━•`
await conn.sendButton(m.chat, `Hola usuario(a)`, str, media, [
['𝐌𝐄𝐍𝐔 🌆', '.menu'],
['𝐓𝐈𝐄𝐍𝐃𝐀 🏪', '#tiendaexotico'],
['𝐂𝐇𝐀𝐓 𝐆𝐏𝐓 🤖', '/chatgpt hola']], null, [
['𝐀𝐓𝐎𝐌 𝐁𝐈𝐎 🎉', `https://atom.bio/exotico-ofc`]], fkontak)}
handler.command = /^cuentasoficiales|exoticocuentas|accountsexotic|accountsofc|cuentasofc$/i
handler.exp = 35
export default handler
