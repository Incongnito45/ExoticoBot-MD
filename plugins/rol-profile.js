import { createHash } from 'crypto' 
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
//let pp = imagenRB
let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './src/avatar_contact.png')
let user = global.db.data.users[m.sender]
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
//pp = await conn.getProfilePicture(who)         //pp = await conn.getProfilePicture(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
//let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `⧏『 𝗣𝗘𝗥𝗙𝗜𝗟 / 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 』⧐

• 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:
• ${conn.getName(m.sender)}

• 𝗘𝗗𝗔𝗗:
• ${registered ? age + ' *años*' : ''}

• 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔)?
• ${registered ? '𝗦𝗶': '𝗡𝗼'}

• 𝗡𝗨𝗠𝗘𝗥𝗢:
• ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

• 𝗟𝗜𝗡𝗞:
• wa.me/${who.split`@`[0]}


• 𝗖𝗢𝗗𝗜𝗚𝗢 𝗗𝗘 𝗩𝗘𝗥𝗜𝗙𝗜𝗖𝗔𝗖𝗜𝗢𝗡:
• *${sn}*`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', str, fkontak, false, { contextInfo: { mentionedJid }}) 
  }
}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler
