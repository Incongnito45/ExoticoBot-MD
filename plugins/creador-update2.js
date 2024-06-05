import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = `᥀·࣭࣪̇˖🍾◗ 𝙀𝙭𝙤𝙩𝙞𝙘𝙤𝘽𝙤𝙩-𝙈𝘿 𝙮𝙖 𝙚𝙨𝙩𝙖 𝙚𝙣 𝙪𝙣𝙖 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙖.`
if (messager.includes('Updating')) messager = `᥀·࣭࣪̇˖✅◗ 𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘿𝙊: ` + stdout.toString()
conn.reply(m.chat, messager, m);
} catch {      
try {    
const status = execSync('git status --porcelain');
if (status.length > 0) {
const conflictedFiles = status
.toString()
.split('\n')
.filter(line => line.trim() !== '')
.map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('ExoticoBotSession/') || line.includes('npm-debug.log')) {
return null;
}
return '*➤ ' + line.slice(3) + '*'})
.filter(Boolean);
if (conflictedFiles.length > 0) {
const errorMessage = `᥀·࣭࣪̇˖💎◗ 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤:\n\nArchivo: ${conflictedFiles.join('\n')}.*`
await conn.reply(m.chat, errorMessage, m);  
}}
} catch (error) {
console.error(error);
if (error.message) {
errorMessage2 += `\n᥀·࣭࣪̇˖❌◗ 𝙀𝙧𝙧𝙤𝙧: ` + error.message;
}
await m.reply(`᥀·࣭࣪̇˖❌◗ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.`) 
}}};
handler.command = /^(reinstalar|updat|gitpull)$/i;
handler.rowner = true;
export default handler;
