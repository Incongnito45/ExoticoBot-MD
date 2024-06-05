import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
  let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/6a79e03143ad9c993149e.jpg')
  if (user.registered === true) throw `᥀·࣭࣪̇˖🍹◗ 𝙔𝙖 𝙚𝙨𝙩𝙖𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤(𝙖). 𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚?\n\n• 𝙋𝙧𝙞𝙢𝙚𝙧𝙤 𝙘𝙤𝙥𝙞𝙖 𝙚𝙡 𝙘𝙤𝙙𝙞𝙜𝙤 𝙦𝙪𝙚 𝙩𝙚 𝙙𝙖𝙧𝙖 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #myms\n\n• 𝙐𝙨𝙖 𝙚𝙨𝙩𝙚 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙢𝙖𝙨 𝙥𝙚𝙜𝙖 𝙩𝙪 𝙘𝙤𝙙𝙞𝙜𝙤:\n*${usedPrefix}unreg*`
  if (!Reg.test(text)) throw `᥀·࣭࣪̇˖⚔️◗ 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙨𝙚 𝙙𝙚 𝙡𝙖 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙢𝙖𝙣𝙚𝙧𝙖.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} ${name2}.19*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '᥀·࣭࣪̇˖⚔️◗ 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙚𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙖𝙡, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'
  if (!age) throw '᥀·࣭࣪̇˖⚔️◗ 𝙇𝙖 𝙚𝙙𝙖𝙙 𝙚𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙖𝙡, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'
  if (name.length >= 30) throw '᥀·࣭࣪̇˖⚔️◗ 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙚𝙧 𝙢𝙖𝙨 𝙙𝙚 100 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.' 
  age = parseInt(age)
  if (age > 100) throw '𝙑𝙞𝙚𝙟𝙤 𝙨𝙖𝙗𝙧𝙤𝙨𝙤 🍷'
  if (age < 5) throw '🍷 𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙖 𝙡𝙤𝙨 𝙗𝙚𝙗𝙚𝙨, 𝙡𝙤 𝙨𝙞𝙚𝙣𝙩𝙤.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)         
await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
let regbot = `╭• ⊹𝆭 ⌥𝆬 •𝆭〘𝆬☁️𝆭⋆𝙀𝙭𝆭𝙤𝙩𝙞𝆭𝙘𝆬𝙤𝆬𝘽𝆭𝙤𝙩𝆭-𝙈𝆬𝘿𝆬⋆𝆭🪐𝆭꧂
╰• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• ▹

◦ᮀᨘ۬․ٰ৴💧੭ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}

◦ᮀᨘ۬․ٰ৴💧੭ 𝗘𝗗𝗔𝗗: ${age} años

╭• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• ▹
╰• ⊹𝆭 ⌥𝆬 •𝆭〘𝆬☁️𝆭⋆𝙀𝙭𝆭𝙤𝙩𝙞𝆭𝙘𝆬𝙤𝆬𝘽𝆭𝙤𝙩𝆭-𝙈𝆬𝘿𝆬⋆𝆭🪐𝆭꧂`
await m.reply(regbot)
}
handler.help = ['reg'].map(v => v + ' <nombre.edad>')
handler.tags = ['rg']

handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar'] 

export default handler

/*import db from '../lib/database.js'
import { createHash } from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `᥀·࣭࣪̇˖🍹◗ 𝙔𝙖 𝙚𝙨𝙩𝙖𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤(𝙖). 𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚?\n\n• 𝙋𝙧𝙞𝙢𝙚𝙧𝙤 𝙘𝙤𝙥𝙞𝙖 𝙚𝙡 𝙘𝙤𝙙𝙞𝙜𝙤 𝙦𝙪𝙚 𝙩𝙚 𝙙𝙖𝙧𝙖 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #myms\n\n• 𝙐𝙨𝙖 𝙚𝙨𝙩𝙚 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙢𝙖𝙨 𝙥𝙚𝙜𝙖 𝙩𝙪 𝙘𝙤𝙙𝙞𝙜𝙤:\n*${usedPrefix}unreg*`
  if (!Reg.test(text)) throw `᥀·࣭࣪̇˖⚔️◗ 𝘿𝙚𝙗𝙚 𝙙𝙚 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙨𝙚 𝙙𝙚 𝙡𝙖 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙢𝙖𝙣𝙚𝙧𝙖.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} ${name2}.19*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '᥀·࣭࣪̇˖⚔️◗ 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙚𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙖𝙡, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'
  if (!age) throw '᥀·࣭࣪̇˖⚔️◗ 𝙇𝙖 𝙚𝙙𝙖𝙙 𝙚𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙖𝙡, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.'
  if (name.length >= 100) throw '᥀·࣭࣪̇˖⚔️◗ 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙚𝙧 𝙢𝙖𝙨 𝙙𝙚 100 𝙘𝙖𝙧𝙖𝙘𝙩𝙚𝙧𝙚𝙨, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.' 
  age = parseInt(age)
  if (age > 100) throw '𝙑𝙞𝙚𝙟𝙤 𝙨𝙖𝙗𝙧𝙤𝙨𝙤 🍷'
  if (age < 5) throw '🍷 𝙉𝙤 𝙥𝙪𝙚𝙙𝙤 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧 𝙖 𝙡𝙤𝙨 𝙗𝙚𝙗𝙚𝙨, 𝙡𝙤 𝙨𝙞𝙚𝙣𝙩𝙤.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let img = await (await fetch('https://telegra.ph/file/516ff7b7c47cbf5b58a38.png')).buffer()  
bio = biografia.status?.toString() || sinDefinir 
  let str = `
╭• ⊹𝆭 ⌥𝆬 •𝆭〘𝆬☁️𝆭⋆𝙀𝙭𝆭𝙤𝙩𝙞𝆭𝙘𝆬𝙤𝆬𝘽𝆭𝙤𝙩𝆭-𝙈𝆬𝘿𝆬⋆𝆭🪐𝆭꧂
╰• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• ▹

◦ᮀᨘ۬․ٰ৴💧੭ 𝗡𝗢𝗠𝗕𝗥𝗘: ${name}

◦ᮀᨘ۬․ٰ৴💧੭ 𝗘𝗗𝗔𝗗: ${age} años

╭• •┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈• ▹
╰• ⊹𝆭 ⌥𝆬 •𝆭〘𝆬☁️𝆭⋆𝙀𝙭𝆭𝙤𝙩𝙞𝆭𝙘𝆬𝙤𝆬𝘽𝆭𝙤𝙩𝆭-𝙈𝆬𝘿𝆬⋆𝆭🪐𝆭꧂`
conn.sendMessage(m.chat, {
text: str,
contextInfo: {
externalAdReply: {
title: '⊱『✅𝆺𝅥 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗔𝗗𝗢(𝗔) 𝆹𝅥✅』⊰',
body: user.name, 
thumbnailUrl: img, 
sourceUrl: 'https://atom.bio/exotico-ofc',
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}}, { quoted: fkontak })
await m.reply(`${sn}`)        
}}
handler.help = ['reg'].map(v => v + ' *<nombre.edad>*')
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'verificar', 'registrar'] 
export default handler
*/
