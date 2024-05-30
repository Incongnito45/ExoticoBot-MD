let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `${IDexotic.JoinA}\n\n*#unete ${grupo1}*\n\n*#join ${grupo1}*`

if ( isMods || isOwner || m.fromMe) {
m.reply(`${IDexotic.JoinD}`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`${IDexotic.JoinC}\n\n\`SOLICITANTE:\`\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n\`ENLACE GRUPAL:\`\n ' + link, jid)

m.reply(`${IDexotic.JoinB}`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
