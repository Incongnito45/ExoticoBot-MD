import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix, command, text}) => {
if (!text) throw `᥀·࣭࣪̇˖☁️◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙗𝙪𝙨𝙘𝙖𝙧 𝙚𝙡 𝙖𝙥𝙠.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`;
try {    
const searchA = await search(text);
const data5 = await download(searchA[0].id);
let response = `• 𝐍𝐎𝐌𝐁𝐑𝐄: ${data5.name}
• 𝐏𝐀𝐐𝐔𝐄𝐓𝐄: ${data5.package}
• 𝐔𝐏𝐃𝐀𝐓𝐄: ${data5.lastup}
• 𝐏𝐄𝐒𝐎: ${data5.size}

𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤...`
await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
return await conn.sendMessage(m.chat, {text: '᥀·࣭࣪̇˖📦◗ 𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙚𝙨 𝙢𝙪𝙮 𝙥𝙚𝙨𝙖𝙙𝙤, 𝙣𝙤 𝙨𝙚 𝙥𝙤𝙙𝙧𝙖 𝙚𝙣𝙫𝙞𝙖𝙧.'}, {quoted: m})}
await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m}); 
} catch (e) {
await conn.reply(m.chat, `${errorAB}`, m)
console.log(`${errorBB}`)
console.log(e)
handler.limit = false
}};
handler.command = /^(apkmod|apk|modapk|dapk|aptoide|aptoidedl)$/i;
handler.register = true
export default handler;

