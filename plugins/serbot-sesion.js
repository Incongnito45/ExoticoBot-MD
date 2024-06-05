import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const handler = async (m, { conn, usedPrefix }) => {
const chatId = m.isGroup ? m.chat : m.sender;
const uniqid = chatId.split('@')[0];
const sessionPath = './ExoticoBotSession/';
try {
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
if (file.includes(uniqid)) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
}}
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, { text: `᥀·࣭࣪̇˖🌐◗ 𝙉𝙤 𝙝𝙖𝙮 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙥𝙤𝙧 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧.` }, { quoted: m });
} else {
await conn.sendMessage(m.chat,
{ text: `᥀·࣭࣪̇˖🎩◗ 𝙀𝙡𝙡𝙞𝙢𝙞𝙣𝙖𝙣𝙙𝙤 𝙩𝙤𝙙𝙤, 𝙚𝙭𝙘𝙚𝙥𝙩𝙤: ${filesDeleted}` },
{ quoted: m }
)}
} catch (err) {
console.error(`᥀·࣭࣪̇˖🌐◗ 𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙤 𝙘𝙖𝙧𝙥𝙚𝙩𝙖 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙚...`, err);
await conn.sendMessage(m.chat,
{ text: `᥀·࣭࣪̇˖🌐◗ 𝙀𝙡 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙣𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤...` },
{ quoted: m }
)}
await conn.sendMessage(m.chat, {text: `᥀·࣭࣪̇˖🌐◗ 𝙎𝙚𝙨𝙞𝙤𝙣 𝙙𝙚𝙡 𝙗𝙤𝙩, 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙖 𝙥𝙤𝙧 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤.`}, { quoted: m })};
handler.help = ['deletebot'];
handler.tags = ['jadibot'];
handler.command = /^(msgespera|ds)$/i;
export default handler;