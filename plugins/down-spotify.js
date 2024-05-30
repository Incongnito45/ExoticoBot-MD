import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
import fs from 'fs'
let handler = async(m, { conn, usedPrefix, command, text }) => {
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: redesMenu, thumbnail: await(await fetch(gataMenu)).buffer() }}}
if (!text) return await conn.reply(m.chat, `${IDexotic.faltaTexto}\n\n*${usedPrefix + command} Erika lundmoen - yad*`, fkontak, m) 
try {
const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let spotifyi = `*${IDexotic.Nombre}*
_${spty.data.name}_

*${IDexotic.Artista}:*
_${spty.data.artists}_

*${IDexotic.Enlace}*:
_${linkDL}_

*${IDexotic.espereAudio}*`
await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, fkontak, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    
await conn.sendMessage(m.chat, {text: waittttt, edit: key})
handler.limit = 1
} catch (e) {
await conn.reply(m.chat, IDexotic.ErrorA, fkontak, m)
console.log(IDexotic.ErrorB)
console.log(e)
handler.limit = false
}}
handler.command = /^(spotify|music)$/i
export default handler

const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: 'Fallo la descarga' }})
return { data: res, audio: await spotify.downloadTrack(url) }}

