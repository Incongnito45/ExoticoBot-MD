import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `᥀·࣭࣪̇˖☄️◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙫𝙞𝙙𝙚𝙤 𝙤 𝙣𝙤𝙩𝙖 𝙙𝙚 𝙫𝙤𝙯 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙡𝙤 𝙚𝙣 𝙖𝙪𝙙𝙞𝙤.`
await conn.sendPresenceUpdate('recording', m.chat)
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `᥀·࣭࣪̇˖☄️◗ 𝘾𝙤𝙣𝙫𝙞𝙧𝙩𝙞𝙚𝙣𝙙𝙤 𝙫𝙞𝙙𝙚𝙤 𝙖 𝙖𝙪𝙙𝙞𝙤...`
if (!media && !/audio/.test(mime)) throw `᥀·࣭࣪̇˖☄️◗ 𝘾𝙤𝙣𝙫𝙞𝙧𝙩𝙞𝙚𝙣𝙙𝙤 𝙣𝙤𝙩𝙖 𝙙𝙚 𝙫𝙤𝙯 𝙖 𝙖𝙪𝙙𝙞𝙤...`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `᥀·࣭࣪̇˖❌◗ 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 𝙖 𝙖𝙪𝙙𝙞𝙤.`
if (!audio.data && !/video/.test(mime)) throw `᥀·࣭࣪̇˖❌◗ 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙡𝙖 𝙣𝙤𝙩𝙖 𝙙𝙚 𝙫𝙤𝙯 𝙖 𝙖𝙪𝙙𝙞𝙤.`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
