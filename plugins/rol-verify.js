import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let user = global.db.data.users[m.sender]
let name2 = conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/516ff7b7c47cbf5b58a38.png')
if (user.registered === true) throw `${IDexotic.verifyE(usedPrexi)}`
if (!Reg.test(text)) throw `${IDexotic.faltaTextoD} *${usedPrefix + command}* ${name2}.17`
let [_, name, splitter, age] = text.match(Reg)
if (!name) throw IDexotic.verifyD
if (!age) throw IDexotic.verifyC
if (name.length >= 30) throw 'El nombre es demasiado largo, usa uno corto y intenta de nuevo.' 
age = parseInt(age)
if (age > 50) throw IDexotic.verifyB
if (age < 5) throw IDexotic.verifyA
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
global.db.data.users[m.sender].money += 600
global.db.data.users[m.sender].limit += 10
global.db.data.users[m.sender].exp += 245
global.db.data.users[m.sender].joincount += 5
let sn = createHash('md5').update(m.sender).digest('hex')
m.react('✅') 
let regbot = `
•════════════•
\`R E G I S T R O:\`

${IDexotic.Nombre}
• ${name}

${IDexotic.Edad}
• ${age} años
•════════════•
\`REGALO EXOTICO\`
1500 : Diamantes
1500 : BotCoins
1500 : Monedas`
await m.reply(regbot)
await m.reply(`${sn}`)
}
handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'reg', 'verificar', 'registrar'] 

export default handler