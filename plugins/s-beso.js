import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let MessageType = (await import(global.baileys)).default
let handler = async (m, { conn}) => {
try {   
if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
let res = await fetch('https://nekos.life/api/kiss')
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, `@${m.sender.split('@')[0]} 𝙚𝙨𝙩𝙖 𝙗𝙚𝙨𝙖𝙣𝙙𝙤 𝙖 ${m.mentionedJid.map((user)=>(user === m.sender)? '𝙖𝙡𝙜𝙪𝙞𝙚𝙣.' : `@${user.split('@')[0]}`).join(', ')}`)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.command = /^(kiss|skiss|kis|besos|beso|besar|besando)$/i
export default handler
