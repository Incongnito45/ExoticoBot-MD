import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `᥀·࣭࣪̇˖🧰◗ 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝘿𝙖𝙡𝙡 𝙀 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.\n\n• 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:\n*${usedPrefix + command} universo celestial.*`;
await conn.sendMessage(m.chat, {text: '᥀·࣭࣪̇˖🎨◗ 𝘾𝙧𝙚𝙖𝙣𝙙𝙤 𝙞𝙢𝙖𝙜𝙚𝙣...✨'}, {quoted: m});
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
} catch {
throw `᥀·࣭࣪̇˖❌◗ 𝘼𝙋𝙄 𝙘𝙖𝙞𝙙𝙖, 𝙧𝙚𝙥𝙤𝙧𝙩𝙖𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙙𝙚𝙡 𝙗𝙤𝙩.`;
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;

