import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
const q = m.quoted ? m.quoted : m;
const mime = (q.msg || q).mimetype || q.mediaType || '';
if (!/image/g.test(mime)) throw `᥀·࣭࣪̇˖☄️◗ 𝙍𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙥𝙚𝙧𝙤 𝙦𝙪𝙚 𝙨𝙚 𝙫𝙚𝙖 𝙡𝙖 𝙘𝙖𝙧𝙖 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙖.`
  m.reply(`𝘾𝙤𝙣𝙫𝙞𝙧𝙩𝙞𝙚𝙣𝙙𝙤...`);
const data = await q.download?.();
const image = await uploadImage(data);
try {
const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
} catch (i) {
try {
const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
} catch (a) {
try {
const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
} catch (e) {
throw `᥀·࣭࣪̇˖❌◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`
}}}}
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(exoanime|toanime)$/i;
export default handler;
