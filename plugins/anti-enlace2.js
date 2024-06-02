let linkRegex = /https:/i
let handler = m => m
handler.before = async function (m, { isAdmin, isBotAdmin, text, participants }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*➛ ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0 
}    
await conn.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖🎩◗ 𝙃𝙤𝙡𝙖, 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤 𝙣𝙤 𝙨𝙚 𝙥𝙚𝙧𝙢𝙞𝙩𝙚𝙣 𝙚𝙣𝙡𝙖𝙘𝙚𝙨, 𝙨𝙚𝙧𝙖𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤 𝙙𝙚 𝙞𝙣𝙢𝙚𝙙𝙞𝙖𝙩𝙤.`, mentions: [m.sender]}, {quoted: m})
if (!isBotAdmin) return conn.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖🚫◗ 𝙉𝙤 𝙨𝙤𝙮 𝙖𝙙𝙢𝙞𝙣 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙩𝙚.`, mentions: [...groupAdmins.map(v => v.id)] }, {quoted: m})
if (isBotAdmin) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply(`᥀·࣭࣪̇˖🌐◗ 𝙀𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙖𝙘𝙩𝙞𝙫𝙖𝙧 𝙡𝙖𝙨 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙥𝙖𝙧𝙖 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙚𝙡𝙞𝙢𝙞𝙣𝙚 𝙖 𝙡𝙖𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨.`)
}
return !0
}
export default handler
