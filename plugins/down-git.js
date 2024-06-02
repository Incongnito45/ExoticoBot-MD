import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙂𝙞𝙩𝙝𝙪𝙗 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧.\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: ${usedPrefix + command} https://github.com/LolHuman/BotBot-MD`
if (!regex.test(args[0])) throw `𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤... ✨`
try {   
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚 𝙚𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤. 🪐`)
conn.sendFile(m.chat, url, filename, null, m)
} catch (e) { 
await conn.reply(m.chat, `᥀·࣭࣪̇˖⚠️◗ 𝙀𝙧𝙧𝙤𝙧, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧.`, m)
console.log(`᥀·࣭࣪̇˖❌◗ 𝙄𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`)
console.log(e)
handler.limit = 0 
}}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 2
handler.level = 3
handler.register = true
export default handler