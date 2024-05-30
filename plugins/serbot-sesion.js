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
await conn.sendMessage(m.chat, { text: `${IDexotic.subArchivo}` }, { quoted: m });
} else {
await conn.sendMessage(m.chat,
{ text: `${IDexotic.subArchicoA} ${filesDeleted} ${IDexotic.subArchivoB}` },
{ quoted: m }
)}
} catch (err) {
console.error(`${IDexotic.existFile}`, err);
await conn.sendMessage(m.chat,
{ text: `${IDexotic.existFileB}` },
{ quoted: m }
)}
await conn.sendMessage(m.chat, {text: `${IDexotic.rsExito}`}, { quoted: m })};
handler.help = ['deletebot'];
handler.tags = ['jadibot'];
handler.command = /^(msgespera|ds)$/i;
export default handler;