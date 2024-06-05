let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `᥀·࣭࣪̇˖💎◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙤 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.`, m)
if(isNaN(number)) return conn.reply(m.chat, `᥀·࣭࣪̇˖❌◗ 𝙀𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙘𝙪𝙚𝙣𝙩𝙧𝙖 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨, 𝙩𝙞𝙚𝙣𝙚 𝙦𝙪𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙨𝙚...`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
delete global.global.db.data.users[user]
conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝘿𝙖𝙩𝙤𝙨 𝙧𝙚𝙞𝙣𝙞𝙘𝙞𝙖𝙙𝙤𝙨 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚!!!`, null, { mentions: [user] })
}}

handler.tags = ['owner']
handler.command = ['restablecerdatos', 'borrardatos', 'deletedatauser'] 
handler.owner = true

export default handler
