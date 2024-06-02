import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢.\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: *${usedPrefix + command} lol_human*`
try {
const {key} = await conn.sendMessage(m, {text: wait})
await conn.sendMessage(m, {text: waitt, edit: key})
await conn.sendMessage(m, {text: waittt, edit: key})
await conn.sendMessage(m, {text: waitttt, edit: key})
let res = await igstalk(args[0].replace(/^@/, ''))
let res2 = await fetch(`https://api.lolhuman.xyz/api/stalkig/${args[0].replace(/^@/, '')}?apikey=${lolkeysapi}`)
let res3 = await res2.json()
let json = JSON.parse(JSON.stringify(res))
let iggs = `
𖣘 𝗡𝗢𝗠𝗕𝗥𝗘:
𖦹 *${json.username}*

𖣘 𝗔𝗣𝗢𝗗𝗢:
𖦹 *${json.fullname}*

𖣘 𝗘𝗡𝗟𝗔𝗖𝗘:
𖦹 *https://instagram.com/${json.username.replace(/^@/, '')}*

𖣘 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗥𝗘𝗦:
𖦹 *${json.followers}* 

𖣘 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗦:
𖦹 *${json.following}* 

𖣘 𝗣𝗢𝗦𝗧:
𖦹 *${json.post}*

𖣘 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:
𖦹 ${json.bio}`.trim() 
let aa = `${res3.result.photo_profile || res.profile}`
await conn.sendFile(m.chat, aa, 'error.jpg', iggs, m)
conn.reply(m.chat, `${packname}`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝗩𝗲𝗿 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝗰𝗶𝗼𝗻 𝗱𝗲 𝗜𝗚',
body: wm,         
previewType: 0, thumbnail: imagenRB,
sourceUrl: exoticoAll}}})
} catch (e) {
await conn.reply(m.chat, `᥀·࣭࣪̇˖⚠️◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`, m)
console.log(`᥀·࣭࣪̇˖❌◗ 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙣𝙚𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(e)
handler.money = false
}}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.money = 5
export default handler

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: { "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8", "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" }}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()}
resolve(result)})})}


