import { tmpdir } from 'os'
import path, { join } from 'path'
import {
readdirSync,
statSync,
unlinkSync,
existsSync,
readFileSync,
watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => { 

conn.reply(m.chat, `᥀·࣭࣪̇˖✅◗ 𝘾𝙤𝙨𝙖𝙨 𝙞𝙣𝙣𝙚𝙘𝙚𝙨𝙖𝙧𝙞𝙖𝙨 𝙚𝙣 𝙏𝙈𝙋, 𝙛𝙪𝙚𝙧𝙤𝙣 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙖𝙨 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤!!!`, m)
//𝗡𝗢 𝗨𝗦𝗔𝗥 𝗘𝗦𝗧𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢 𝗖𝗢𝗡 𝗘𝗟 𝗕𝗢𝗧 𝗜𝗡𝗦𝗧𝗔𝗟𝗔𝗗𝗢 𝗘𝗡 𝗛𝗘𝗥𝗢𝗞𝗨.
const tmp = [tmpdir(), join(__dirname, '../tmp')]
const filename = []
tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
return filename.map(file => {
const stats = statSync(file)
unlinkSync(file)
})} 
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp|cleartemp|borrartmp|eliminartmp|borrartemp|borrartemp)$/i
handler.exp = 500
handler.rowner = true
export default handler
