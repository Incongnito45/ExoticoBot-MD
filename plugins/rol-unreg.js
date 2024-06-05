
import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `᥀·࣭࣪̇˖⚔️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙨𝙪 𝙘𝙤𝙙𝙞𝙜𝙤 𝙙𝙚 𝙫𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣, 𝙨𝙞 𝙣𝙤 𝙨𝙚 𝙖𝙘𝙪𝙚𝙧𝙙𝙖, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #myns`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
if (args[0] !== sn) throw `᥀·࣭࣪̇˖🚫◗ 𝙀𝙧𝙧𝙤𝙧 𝙖𝙡 𝙧𝙚𝙫𝙞𝙨𝙖𝙧 𝙩𝙪 𝙘𝙤𝙙𝙞𝙜𝙤, 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙖 𝙨𝙞 𝙚𝙨 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤 𝙤 𝙪𝙨𝙖 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: #myns 𝙥𝙖𝙧𝙖 𝙘𝙤𝙥𝙞𝙖𝙧 𝙚𝙡 𝙘𝙤𝙙𝙞𝙜𝙤...`
global.db.data.users[m.sender]['registroC'] = false
global.db.data.users[m.sender]['registroR'] = false
user.name = 0
user.age = 0
user.genero = 0
user.identidad = 0
user.pasatiempo = 0
user.premLimit = 1
user.tiempo = 0
user.descripcion = 0
user.registered = false
m.reply(`᥀·࣭࣪̇˖✅◗ 𝙔𝙖 𝙣𝙤 𝙚𝙨𝙩𝙖𝙨 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿.\n\n• 𝙋𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙧𝙩𝙚 𝙪𝙨𝙖 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤:\n*${usedPrefix}reg Nombre.Edad*\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix}reg Exotico.20*`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
