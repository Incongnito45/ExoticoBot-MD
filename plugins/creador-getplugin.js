
import fs from 'fs'

let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `᥀·࣭࣪̇˖💎◗ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙥𝙡𝙪𝙜𝙞𝙣𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.\n\n`
    if (!ar1.includes(text)) return m.reply(`𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗣𝗟𝗨𝗚𝗜𝗡𝗦:\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(fs.readFileSync('./plugins/' + text + '.js', 'utf-8'))
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(listaplugins|listgp)$/i

handler.rowner = true

export default handler
