import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${IDexotic.faltaLink} Github\n\n${IDexotic.porEjemplo}\n*${usedPrefix + command} https://github.com/DIEGO-OFC/ShadowBot-MD*`
if (!regex.test(args[0])) throw `${IDexotic.espereArchivo}`
try {   
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${IDexotic.aquiArchivo}`)
conn.sendFile(m.chat, url, filename, null, m)
} catch (e) { 
await conn.reply(m.chat, IDexotic.ErrorA, m)
console.log(IDexotic.ErrorB)
console.log(e)
handler.limit = 0 
}}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
//handler.limit = 2
handler.register = true
export default handler

