import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧𝙡𝙤.\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: *${usedPrefix + command} Universo*` 
try {
const json = await pinterest(text)
conn.sendButton(m.chat, `᥀·࣭࣪̇˖𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿᥀·࣭࣪̇˖`, `𝑃𝑖𝑛𝑡𝑒𝑟𝑒𝑠𝑡`, json.getRandom(), [
['𝙎𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 🌌', `${usedPrefix}pinterest ${text}`]], null, null, m)
} catch (e) {
console.log(`${errorBB}`)
console.log(e)
handler.money = false
}}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
export default handler