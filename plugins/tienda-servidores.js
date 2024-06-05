let media = './Multi_Imagen/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `┌•───────────────────•
│SERVIDORES COINS USD:
└•───────────────────•
🛍️ *Bronce:*
⎕ _1.030 Coins_ │ *$2.50*
⎕ _2.050 Coins_ │ *$3.50*
⎕ _3.075 Coins_ │ *$4.50*
⎕ _4.100 Coins_ │ *$5.50*
⎕ _5.125 Coins_ │ *$6.50*

🛍️ *Premium:*
⎕ _10.145 Coins_ │ *$11.50*
⎕ _11.270 Coins_ │ *$12.50*
⎕ _17.410 Coins_ │ *$15.50*
⎕ _20.485 Coins_ │ *$22.50*

🛍️ *Mega:*
⎕ _50.250 Coins_ │ *$25.00*

┌•───────────────────•
│SERVIDORES COINS ARS:
└•───────────────────•
🛍️ *Bronce:*
⎕ _1.030 Coins_ │ *$500*
⎕ _2.050 Coins_ │ *$600*
⎕ _3.075 Coins_ │ *$700*
⎕ _4.100 Coins_ │ *$800*
⎕ _5.125 Coins_ │ *$900*

🛍️ *Premium:*
⎕ _10.145 Coins_ │ *$1.500*
⎕ _11.270 Coins_ │ *$1.650*
⎕ _17.410 Coins_ │ *$2.500*
⎕ _20.485 Coins_ │ *$3.000*

🛍️ *Mega:*
⎕ _50.250 Coins_ │ *$5.000*

┌•───────────────────•
│SERVIDORES:
└•───────────────────•
🛒 *Bronce:*
⎕ _Servidor Bajo_ │ *$1.025 Coins*
⎕ _Servidor Medio_ │ *$2.045 Coins*
⎕ _Servidor Alto_ │ *$3.065 Coins*

🛒 *Premium:*
⎕ _Servidor Premium_ │ *$10.135 Coins*
⎕ _Servidor Premium 2_ │ *$12.340 Coins*

🛒 *Mega:*
⎕ _Servidor Mega_ │ *$19.550 Coins*

┌•───────────────────•
│PAQUETES DE SORPRESA:
└•───────────────────•
*USD*
🎊 *BRONCE:*
⎕ _1 paquete_ │ *$1.00*
⎕ _2 paquetes_ │ *$1.20*
⎕ _3 paquetes_ │ *$1.50*

🎁 *ORO:*
⎕ _1 paquete_ │ *$2.00*
⎕ _2 paquetes_ │ *$2.20*
⎕ _3 paquetes_ │ *$2.50*

*NOTE:*
_Al comprarlo, ábrelo en el bot_
_usando el boton: *#miperfil*_
_y presiona en el botón: *Paquetes*_

⎕ *Para ver el menu de tiendas, escriba:* _#tiendaofc_
⎕ *Para instalar otros bots, ingrese el siguiente comando:* _#infobots_`
await conn.sendButton(m.chat, `¡BIENVENIDO(A)!`, str, media, [
['𝗠𝗜 𝗣𝗘𝗥𝗙𝗜𝗟 👤', '.miperfil'],
['𝗧𝗜𝗘𝗡𝗗𝗔 𝗢𝗙𝗖 🏪', '#tiendaofc'],
['𝗩𝗘𝗥 𝗕𝗢𝗧𝗦 🔗', '/installbots']], null, [
['𝗣𝗔𝗚𝗜𝗡𝗔 🎉', `https://atom.bio/exotico-ofc`]], fkontak)}
handler.command = /^botservers|servidores|comprarserver$/i
handler.exp = 35
export default handler

/*
var handler = async (m) => {

let tienda3 = `
┌•───────────────────•
│\`\`\`SERVIDORES COINS USD:\`\`\`
└•───────────────────•
🛍️ *Bronce:*
⎕ _1.030 Coins_ │ *$2.50*
⎕ _2.050 Coins_ │ *$3.50*
⎕ _3.075 Coins_ │ *$4.50*
⎕ _4.100 Coins_ │ *$5.50*
⎕ _5.125 Coins_ │ *$6.50*

🛍️ *Premium:*
⎕ _10.145 Coins_ │ *$11.50*
⎕ _11.270 Coins_ │ *$12.50*
⎕ _17.410 Coins_ │ *$15.50*
⎕ _20.485 Coins_ │ *$22.50*

🛍️ *Mega:*
⎕ _50.250 Coins_ │ *$25.00*

┌•───────────────────•
│\`\`\`SERVIDORES COINS ARS:\`\`\`
└•───────────────────•
🛍️ *Bronce:*
⎕ _1.030 Coins_ │ *$500*
⎕ _2.050 Coins_ │ *$600*
⎕ _3.075 Coins_ │ *$700*
⎕ _4.100 Coins_ │ *$800*
⎕ _5.125 Coins_ │ *$900*

🛍️ *Premium:*
⎕ _10.145 Coins_ │ *$1.500*
⎕ _11.270 Coins_ │ *$1.650*
⎕ _17.410 Coins_ │ *$2.500*
⎕ _20.485 Coins_ │ *$3.000*

🛍️ *Mega:*
⎕ _50.250 Coins_ │ *$5.000*

┌•───────────────────•
│\`\`\`SERVIDORES:\`\`\`
└•───────────────────•
🛒 *Bronce:*
⎕ _Servidor Bajo_ │ *$1.025 Coins*
⎕ _Servidor Medio_ │ *$2.045 Coins*
⎕ _Servidor Alto_ │ *$3.065 Coins*

🛒 *Premium:*
⎕ _Servidor Premium_ │ *$10.135 Coins*
⎕ _Servidor Premium 2_ │ *$12.340 Coins*

🛒 *Mega:*
⎕ _Servidor Mega_ │ *$19.550 Coins*

┌•───────────────────•
│\`\`\`PAQUETES DE SORPRESA:\`\`\`
└•───────────────────•
*USD*
🎊 *BRONCE:*
⎕ _1 paquete_ │ *$1.00*
⎕ _2 paquetes_ │ *$1.20*
⎕ _3 paquetes_ │ *$1.50*

🎁 *ORO:*
⎕ _1 paquete_ │ *$2.00*
⎕ _2 paquetes_ │ *$2.20*
⎕ _3 paquetes_ │ *$2.50*

\`\`\`NOTE:\`\`\`
_Al comprarlo, ábrelo en el bot_
_usando el comando: *#miperfil*_
_y presiona en el botón: *Paquetes*_

> ⎕ *Para ver el menu de tiendas, escriba:* _#tiendaofc_
> ⎕ *Para instalar otros bots, ingrese el siguiente comando:* _#infobots_`

conn.reply(m.chat, tienda3, m, fkontak, )
handler.before = async m => {

if (/^infobots|TiendaBots$/i.test(m.text) ) {
let texto = `
┌•───────────────────•
│\`\`\`INSTALAR BOTS:\`\`\`
└•───────────────────•
⎔ *GataBot-MD:*
⎕ _${usedPrefix}installgatabot_

⎔ *GataBotLite-MD:*
⎕ _${usedPrefix}installgatabotlite_

⎔ *LoliBot-MD:*
⎕ _${usedPrefix}installlolibot_

⎔ *TheMystic-Bot-MD:*
⎕ _${usedPrefix}installmysticbot_

⎔ *NovaBot-MD:*
⎕ _${usedPrefix}installnovabot_

⎔ *HadesBot-MD:*
⎕ _${usedPrefix}installhadesbot_

⎔ *KatashiBot-MD:*
⎕ _${usedPrefix}installkatashibot_

⎔ *SennaBot-MD:*
⎕ _${usedPrefix}installsennabot_

\`\`\`NOTE:\`\`\`
_Las instalaciones son por termix..._
_se iran poniendo mas metodos tal y como_
_se ven en sus canales de Youtube._

• _Para ver bots de paga, use el comando:_ *#pagabot*`
conn.reply(m.chat, texto, m, fkontak, )
}
if (/^pagabot$/i.test(m.text) ) {
let botpaga = `
⎕ _BayleisWA-BS_ (No disponible)
• ❌ #******

⎕ _BayileisWA-MD_ (No disponible)
• ❌ #******

⎕ _BusinessWA-OFC_ (No disponible)
• ❌ #******

⎕ _NaufraZapp-MD_ (Disponible)
• ✅ #cnaufrazapp

⎕ _BotsSupport_ (No disponible)
• ❌ #******

⎕ _WhatsApp-Bayleis_ (No disponible)
• ❌ #******

_Para ver el menu, use el comando:_ *#menu*
_Para ver la tienda, use el comando:_ *#tienda*`
m.reply(botpaga, m.chat, { mentions: conn.parseMention(botpaga)})}
}}
handler.help = ['tienda3', 'tienda4', 'pagabot', 'installbots', 'bots']
handler.tags = ['info']
handler.command = /^(botservers|pagabot|infobots)$/i
handler.register = true
export default handler
*/