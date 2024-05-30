import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat

const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: IDexotic.botNombre, body: IDexotic.botDescrip, mediaUrl: exoticoAll, description: IDexotic.botInfo, previewType: 'PHOTO', thumbnail: await(await fetch(menusRB)).buffer(), sourceUrl: exoticoAll }}}

try{
await conn.sendButton(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), IDexotic.linkGrupo, pp, [[IDexotic.botonStatus, `${usedPrefix}estado`]], null, null, fkontak, adReply)
} catch (e) {
await conn.reply(m.chat, IDexotic.ErrorA, fkontak, m)
console.log(IDexotic.ErrorB)
console.log(e)
}} 
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^enlace|link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
