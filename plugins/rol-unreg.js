
import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `Ingrese su numero de serie por favor, si no se acuerda, use el comando: #myns`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)	
if (args[0] !== sn) throw `Error, verifique que su codigo sea correcto, o use el comando: #myns para copiar el texto.`
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
m.reply(`Listo!!! ya no estas registrato/a en este bot.`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
