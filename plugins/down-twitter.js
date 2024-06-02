import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import vm from 'node:vm'
import qs from 'qs'
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const twitterUrlRegex = /^https?:\/\/(www\.)?twitter\.com\/(\w+)\/status\/(\d+)$/i 
if (!text) return conn.reply(m.chat, `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙏𝙬𝙞𝙩𝙩𝙚𝙧 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧𝙡𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n${usedPrefix + command} https://twitter.com/Animalesybichos/status/1564616107159330816?t=gKqUsstvflSp7Dhpe_nmDg&s=19`, fkontak)
try{ 
const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
const apiUrl = `https://api.lolhuman.xyz/api/twitter?apikey=${lolkeysapi}&url=${encodeURIComponent(text)}`
const response = await fetch(apiUrl)
const jsonData = await response.json()
const tweetData = jsonData.result
const tweetTitle = tweetData.title
const tweetVideoUrl = tweetData.media[0].url
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const tweetTitleWithoutUrl = tweetTitle.replace(/https?:\/\/t\.co\/\w+/i, '').trim()
const txt1 = `• 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 •`.trim()
await conn.sendFile(m.chat, tweetVideoUrl, 'error.mp4', txt1, fkontak)
await conn.sendMessage(m.chat, {text: waittttt, edit: key})
handler.limit = 3
} catch (e) {
await conn.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖⚠️◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙛𝙖𝙡𝙡𝙖𝙙𝙤 𝙥𝙤𝙧 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`, edit: key});
console.log(`᥀·࣭࣪̇˖🚫◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(e)
handler.limit = false
}}
handler.command = /^((dl)?tw(it(ter(dl|x)?)?)?|x|t?tx)$/i
//handler.level = 0
handler.register = false

export default handler

const delay = time => new Promise(res => setTimeout(res, time))
