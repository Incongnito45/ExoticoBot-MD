import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let group = m.chat

const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: 'LINK GRUPAL', body: packname, mediaUrl: exoticoAll, description: 'WhatsApp Bot', previewType: 'PHOTO', thumbnail: await(await fetch(multiMenus)).buffer(), sourceUrl: exoticoAll }}}

try{
await conn.sendButton(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), '᥀·࣭࣪̇˖🪐◗ 𝙀𝙣𝙡𝙖𝙘𝙚 𝙜𝙧𝙪𝙥𝙖𝙡. ⬆️', pp, [['𝙀𝙨𝙩𝙖𝙙𝙤 🎉', `${usedPrefix}estado`]], null, null, fkontak, adReply)
} catch (e) {
await conn.reply(m.chat, '᥀·࣭࣪̇˖⛔◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧.', fkontak, m)
console.log('᥀·࣭࣪̇˖❌◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.')
console.log(e)
}} 
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^enlace|link(gro?up)?$/i
handler.group = true
handler.botAdmin = true
export default handler
