import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw '᥀·࣭࣪̇˖♻️◗ 𝙍𝙚𝙞𝙣𝙞𝙘𝙞𝙖𝙣𝙙𝙤 𝙙𝙖𝙩𝙤𝙨...'
    if (conn.user.jid == conn.user.jid) {
    const { key } = await conn.sendMessage(m.chat, {text: `✯ • • • •`}, {quoted: m});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `✯ ✯ ✯ • •`, edit: key});
await delay(1000 * 1);
await conn.sendMessage(m.chat, {text: `✯ ✯ ✯ ✯ ✯`, edit: key});
await conn.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖✅◗ 𝘽𝙤𝙩 𝙧𝙚𝙞𝙣𝙞𝙘𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤, 𝙚𝙣𝙩𝙧𝙚 𝙖 𝙡𝙖 𝙘𝙤𝙣𝙨𝙤𝙡𝙖 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙮 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: npm start`, edit: key});
    process.send('reset')
  } else throw 'eh'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart','reiniciar'] 
handler.rowner = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))