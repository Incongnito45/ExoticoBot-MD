import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `᥀·࣭࣪̇˖☄️◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙖𝙪𝙙𝙞𝙤 𝙤 𝙫𝙞𝙙𝙚𝙤 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧𝙡𝙤 𝙚𝙣 𝙣𝙤𝙩𝙖 𝙙𝙚 𝙫𝙤𝙯.`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw `᥀·࣭࣪̇˖🍹◗ 𝘾𝙤𝙣𝙫𝙞𝙧𝙩𝙞𝙚𝙣𝙙𝙤...`
if (!media && !/audio/.test(mime)) throw `᥀·࣭࣪̇˖🥃◗ 𝘾𝙤𝙣𝙫𝙞𝙧𝙩𝙞𝙚𝙣𝙙𝙤...`
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw `᥀·࣭࣪̇˖❌◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙡𝙖 𝙣𝙤𝙩𝙖 𝙙𝙚 𝙫𝙤𝙯 𝙖 𝙖𝙪𝙙𝙞𝙤.`
if (!audio.data && !/video/.test(mime)) throw `᥀·࣭࣪̇˖❌◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙧 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 𝙖 𝙖𝙪𝙙𝙞𝙤.`
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^tovn|vn|ptt$/i
export default handler