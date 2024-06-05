import fetch from 'node-fetch'
let handler = async(m, { conn, text, command, usedPrefix }) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣 𝙏𝙞𝙠𝙏𝙤𝙠.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Lol_Human*`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let enoc = `╭᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─᷼─•
│⌑┏┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
│⌑┃ ⧏❪̣࣭̇࣪𝆭·ฺ۪۟𖡎𝆭｡𝆹𝅥𝘌ฺ𝙭𝆭𝙤𝘵ฺ𝘪𝘤𝆭𝙤𝘉𝆭𝙤ฺ𝙩-𝗠ฺ𝖣𝆹𝅥𖣠ᮬ𝆭·̣̇͜᭺⧐
│⌑┗┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄•◌ͦ
╰────────────────────────•
👤 𝗨𝗦𝗨𝗔𝗥𝗜𝗢:
• ${json.result.username}

🥃 𝗔𝗣𝗢𝗗𝗢:
• ${json.result.nickname}

👥 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗥𝗘𝗦:
• ${json.result.followers}

👥 𝗦𝗘𝗚𝗨𝗜𝗗𝗢𝗦:
• ${json.result.followings}

❤️ 𝗟𝗜𝗞𝗘𝗦:
• ${json.result.likes}

📱 𝗣𝗢𝗦𝗧:
• ${json.result.video}

☁️ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡:
• ${json.result.bio}`.trim()
await conn.sendButton(m.chat, enoc, wm, res2, [['𝙈𝙞 𝙞𝙣𝙛𝙤', '#minfo'], ['𝙈𝙚𝙣𝙪', '.menu'], ['𝘾𝙪𝙚𝙣𝙩𝙖𝙨', '/cuentasofc']], null, null, m)
} catch (e) {
await conn.reply(m.chat, `${errorAB}`, m)
console.log(`${errorBB}`)
console.log(e)
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
handler.register = false
export default handler