let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw `᥀·࣭࣪̇˖🏙️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙪𝙣 𝙜𝙧𝙪𝙥𝙤 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*#unete ${grupo1}*\n\n*#join ${grupo1}*`

if ( isMods || isOwner || m.fromMe) {
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`)
await delay(5 * 5000)
let res = await conn.groupAcceptInvite(code)
} else {
const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)

await delay(5 * 5000)
for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) m.reply(`𝗦𝗢𝗟𝗜𝗖𝗜𝗧𝗨𝗗 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢.\n\n\`SOLICITANTE:\`\n` + ' wa.me/' + m.sender.split('@')[0] + '\n\n\`ENLACE GRUPAL:\`\n ' + link, jid)

m.reply(`᥀·࣭࣪̇˖✅◗ 𝙀𝙣𝙡𝙖𝙘𝙚 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 𝙢𝙞 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`)}}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['owner']
handler.command = /^unete|join|nuevogrupo|unir|unite|unirse|entra|entrar$/i 
handler.register = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
