import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙤 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Erika Lundmeon - Yad*\n• *${usedPrefix + command} https://youtu.be/B5bp0Zt0Jss?si=mpraK8fQJQWfLtqS*`
let res = await yts(text)
let vid = res.videos[0]
if (!vid) throw `No encontrado`
let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
m.react('✅') 
let buscador = `𝇇•─•〘𝆭🌌𝆺𝅥𝙀𝙭𝙤𝙩𝙞𝙘𝆭𝙤𝘽𝙤𝙩-𝙈𝘿𝆹𝅥🌌𝆭〙•─•𝇇
⬪ํٜ•────────•𝅃۬𝆹𝅥🪐𝆺𝅥⸱𝅃•────────•ํٜ⬪

𝐓𝐈𝐓𝐔𝐋𝐎: ${vid.title}

𝐕𝐈𝐒𝐓𝐀𝐒: ${vid.views}

𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎 𝐄𝐍: ${vid.ago}

𝐔𝐑𝐋: ${vid.url}`
 await conn.sendButton(m.chat, buscador, 'Seleccione el boton para descargar.', thumbnail, [
['🎬 𝗩𝗜𝗗𝗘𝗢 🎬', `${usedPrefix}playvideo ${url}`],
['🎧 𝗔𝗨𝗗𝗜𝗢 🎧', `${usedPrefix}playaudio ${url}`],], null, null, m)}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'play2']
handler.disabled = false
export default handler
   
