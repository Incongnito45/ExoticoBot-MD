import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) conn.reply(m.chat, `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙩𝙞𝙩𝙪𝙡𝙤 𝙙𝙚 𝙪𝙣𝙖 𝙘𝙖𝙣𝙘𝙞𝙤𝙣 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙫𝙖𝙧𝙞𝙖𝙣𝙩𝙚𝙨.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} Erika lundmoen - yad*`, fkontak,  m)
try {
    let result = await yts(text);
    let ytres = result.videos;
  let teskd = `*${text}*`
    
let listSections = [];
for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
         title: `᥀·࣭࣪̇˖👑◗ 𝗥𝗘𝗦𝗨𝗟𝗧𝗔𝗗𝗢𝗦:`,
rows: [
{ header: '𝗩𝗜𝗗𝗘𝗢 🎬', title: "", description: `${v.title} • ${v.timestamp}\n`, id: `${usedPrefix}video ${v.url}`},
{ header: "𝗔𝗨𝗗𝗜𝗢 🎧", title: "" , description: `${v.title} • ${v.timestamp}\n`, id: `${usedPrefix}audio ${v.url}`}, 
{ header: "𝗩𝗜𝗗𝗘𝗢 𝗖𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗢 🎥", title: "" , description: `${v.title} • ${v.timestamp}\n`, id: `${usedPrefix}playdoc2 ${v.url}`}, 
{ header: "𝗔𝗨𝗗𝗜𝗢 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧𝗢 🎶", title: "" , description: `${v.title} • ${v.timestamp}\n`, id: `${usedPrefix}playdoc ${v.url}`}
]});
}
await conn.sendList(m.chat, `𝗧𝗜𝗧𝗨𝗟𝗢:`, `\n${text}`, `𝄚 Ver Lista`, listSections, fkontak);
} catch (e) {
await conn.sendButton(m.chat, `𝗢𝗰𝘂𝗿𝗿𝗶𝗼 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗶𝗻𝗲𝘀𝗽𝗲𝗿𝗮𝗱𝗼.`, wm, null, [['𝘝𝘰𝘭𝘷𝘦𝘳 𝘢 𝘪𝘯𝘵𝘦𝘯𝘵𝘢𝘳', `#playlist ${v.title}`]], null, null, m)
console.log(e) 
}}
handler.help = ['playlist']
handler.tags = ['down']
handler.command = /^playlist|playlista|plays(earch)?$/i
handler.limit = false

export default handler
  
