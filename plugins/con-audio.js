import { toAudio } from '../lib/converter.js' 
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `${IDexotic.convertVA}`
await conn.sendPresenceUpdate('recording', m.chat)
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `${IDexotic.espereContenido}`
if (!media && !/audio/.test(mime)) throw `${IDexotic.espereContenido}`
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `${IDexotic.convertError}`
if (!audio.data && !/video/.test(mime)) throw `${IDexotic.convertError}`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']
export default handler
