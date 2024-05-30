import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = `${IDexotic.UpdateA}`
if (messager.includes('Updating')) messager = `${IDexotic.UpdsteF}` + stdout.toString()
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
const errorMessage = `${IDexotic.UpdateC}\n\n${conflictedFiles.join('\n')}.*`
await conn.reply(m.chat, errorMessage, m);  
}}
} catch (error) {
console.error(error);
if (error.message) {
errorMessage2 += `\n${IDexotic.UpdateE}` + error.message;
}
await m.reply(`${IDexotic.UpdateB}`) 
}}};
handler.command = /^(reinstalar|updat|gitpull)$/i;
handler.rowner = true;
export default handler;
