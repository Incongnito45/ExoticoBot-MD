let media = './Multi_Imagen/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `•━━━━━━━━•「 🔥 」•━━━━━━━━•
❮😃❯ 𝑮𝑹𝑨𝑪𝑰𝑨𝑺 𝑷𝑶𝑹 𝑬𝑺𝑻𝑨𝑹 𝑨𝑸𝑼𝑰!!!
𝑬𝑺𝑻𝑨𝑺 𝑺𝑶𝑵 𝑳𝑨𝑺 𝑪𝑼𝑬𝑵𝑻𝑨𝑺 𝑶𝑭𝑰𝑪𝑰𝑨𝑳𝑬𝑺 𝑫𝑬𝑳 𝑩𝑶𝑻.

🎉 *${IDexotic.Grupo} 1*
${IDexotic.aBordeB}${grupo1}

🎉 *${IDexotic.Grupo} 2*
${IDexotic.aBordeB}${grupo2}

🎉 *${IDexotic.Grupo} 3*
${IDexotic.aBordeB}${grupo3}

•━━━━━━━━•「 🔥 」•━━━━━━━━•
❮🔮❯ ¿𝑫𝑼𝑫𝑨𝑺 𝑶 𝑷𝑹𝑶𝑩𝑳𝑬𝑴𝑨𝑺? 🌇✨
𝑪𝑶𝑵𝑻𝑨𝑪𝑻𝑨𝑵𝑶𝑺 𝑨𝑸𝑼𝑰!!!

👑 *${IDexotic.Creador} 1*
${IDexotic.aBordeB}${IDexotic.httpsBot}${IDexotic.WA}${num5}${num4}${num9}${num3}${num8}${num7}${num3}${num2}${num3}${num2}${num2}${num2}${num1}

👑 *${IDexotic.Creador} 2*
${IDexotic.aBordeB}${IDexotic.httpsBot}${IDexotic.WA}${num5}${num4}${num9}${num3}${num8}${num7}${num3}${num2}${num3}${num2}${num2}${num1}${num2}

👑 *${IDexotic.Creador} 3*
${IDexotic.aBordeB}${IDexotic.httpsBot}${IDexotic.WA}${num5}${num2}${num3}${num1}${num4}${num2}${num1}${num8}${num3}${num8}${num2}${num8}
•━━━━━━━━•「 🔥 」•━━━━━━━━•
❮🎒❯ 𝑺𝑰𝑮𝑼𝑬𝑵𝑶𝑺 𝑬𝑵 𝑵𝑼𝑬𝑺𝑻𝑹𝑶 𝑪𝑨𝑵𝑨𝑳 🌃✨`
await conn.sendButton(m.chat, IDexotic.botInfo, str, media, [
[IDexotic.botonMenuC, '.menu'],
[IDexotic.botonLinkA, '#grupos'],
[IDexotic.botonInfoA, '/minfo']], null, [
[IDexotic.fBotonCanal, mycanal]], fkontak)}
handler.command = /^cuentasoficiales|gataig|cuentasgb|cuentagb|accounts|gataaccounts|account|iggata|cuentasdegata|cuentasdegatabot|cuentagatabot|cuentasgatabot$/i
handler.exp = 35
export default handler
